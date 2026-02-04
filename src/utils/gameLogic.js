/**
 * Утиліти для оцінювання вибору продуктів у грі
 */

import { categories } from '../data/products';

/**
 * Причини, чому продукт корисний або шкідливий
 */
// Ключі для перекладу характеристик продуктів
const productBenefits = {
  vitamins: 'vitamins',
  fiber: 'fiber',
  protein: 'protein',
  calcium: 'calcium',
  iron: 'iron',
  omega3: 'omega3',
  antioxidants: 'antioxidants',
  lowCalorie: 'lowCalorie',
  water: 'water',
  energy: 'energy',
  sugar: 'sugar',
  fat: 'fat',
  salt: 'salt',
  calories: 'calories',
  processed: 'processed',
  additives: 'additives',
  caffeine: 'caffeine',
  trans_fats: 'trans_fats'
};

/**
 * Детальна інформація про користь/шкоду продуктів
 */
const getProductDetails = (product) => {
  const details = {
    benefits: [],
    concerns: [],
    nutrients: {}
  };

  if (product.healthScore >= 85) {
    if (product.category === 'fruits') {
      details.benefits.push(productBenefits.vitamins);
      details.benefits.push(productBenefits.fiber);
      details.benefits.push(productBenefits.antioxidants);
      if (product.calories < 60) details.benefits.push(productBenefits.lowCalorie);
    } else if (product.category === 'vegetables') {
      details.benefits.push(productBenefits.vitamins);
      details.benefits.push(productBenefits.fiber);
      details.benefits.push(productBenefits.lowCalorie);
      if (product.id === 'spinach') details.benefits.push(productBenefits.iron);
    } else if (product.category === 'protein') {
      details.benefits.push(productBenefits.protein);
      if (product.id === 'fish') details.benefits.push(productBenefits.omega3);
    } else if (product.category === 'dairy') {
      details.benefits.push(productBenefits.calcium);
      details.benefits.push(productBenefits.protein);
    } else if (product.category === 'grains') {
      details.benefits.push(productBenefits.fiber);
      details.benefits.push(productBenefits.energy);
    }
  }

  if (product.healthScore < 50) {
    if (product.calories > 300) details.concerns.push(productBenefits.calories);
    if (product.category === 'junk') {
      if (product.id.includes('soda') || product.id.includes('candy') || product.id.includes('cake')) {
        details.concerns.push(productBenefits.sugar);
      }
      if (product.id.includes('chips') || product.id.includes('fries') || product.id.includes('burger')) {
        details.concerns.push(productBenefits.fat);
        details.concerns.push(productBenefits.salt);
      }
      if (product.id.includes('energy')) {
        details.concerns.push(productBenefits.caffeine);
        details.concerns.push(productBenefits.sugar);
      }
      details.concerns.push(productBenefits.processed);
      details.concerns.push(productBenefits.additives);
    }
  }

  return details;
};

/**
 * Обчислити загальний бал за вибрані продукти
 */
export const calculateScore = (selectedProducts, scenario, t) => {
  if (!selectedProducts || selectedProducts.length === 0) {
    return {
      totalScore: 0,
      feedbackKeys: [{ key: 'fb_no_products' }],
      details: {},
      analysis: null
    };
  }

  const { goals, scoring } = scenario;
  let score = 0;
  const maxPossibleScore = scoring.perfectScore;
  const feedbackKeys = [];
  const details = {};

  // 1. Перевірка кількості продуктів (20%)
  const productCount = selectedProducts.length;
  details.productCount = productCount;
  
  if (productCount >= goals.minProducts && productCount <= goals.maxProducts) {
    feedbackKeys.push({ key: 'fb_correct_count' });
    score += maxPossibleScore * 0.2;
  } else if (productCount < goals.minProducts) {
    feedbackKeys.push({ key: 'fb_too_few', params: { count: productCount, min: goals.minProducts } });
    score += (maxPossibleScore * 0.2 * productCount) / goals.minProducts;
  } else {
    feedbackKeys.push({ key: 'fb_too_many', params: { count: productCount, max: goals.maxProducts } });
    score += maxPossibleScore * 0.1;
  }

  // 2. Оцінка корисності продуктів (40%)
  let healthyCount = 0;
  let unhealthyCount = 0;
  let totalHealthScore = 0;
  let totalCalories = 0;

  selectedProducts.forEach(product => {
    totalHealthScore += product.healthScore;
    totalCalories += product.calories;
    
    if (product.healthScore >= 70) {
      healthyCount++;
    } else if (product.healthScore < 50) {
      unhealthyCount++;
    }
  });

  const avgHealthScore = totalHealthScore / productCount;
  details.avgHealthScore = Math.round(avgHealthScore);
  details.totalCalories = totalCalories;

  const healthPercentage = avgHealthScore / 100;
  score += maxPossibleScore * 0.4 * healthPercentage;

  if (avgHealthScore >= 70) {
    feedbackKeys.push({ key: 'fb_very_healthy' });
  } else if (avgHealthScore >= 50) {
    feedbackKeys.push({ key: 'fb_moderate_healthy' });
  } else {
    feedbackKeys.push({ key: 'fb_many_unhealthy' });
  }

  // 3. Перевірка шкідливих категорій (20%)
  if (goals.avoidCategories) {
    const junkProducts = selectedProducts.filter(p => 
      goals.avoidCategories.includes(p.category)
    );
    
    if (junkProducts.length === 0) {
      feedbackKeys.push({ key: 'fb_no_junk' });
      score += maxPossibleScore * 0.2;
    } else {
      const junkPercentage = junkProducts.length / productCount;
      const junkScore = maxPossibleScore * 0.2 * (1 - junkPercentage);
      score += junkScore;
      feedbackKeys.push({ key: 'fb_has_junk', params: { count: junkProducts.length } });
      details.junkProducts = junkProducts.map(p => `product_${p.id}`);
    }
  }

  // 4. Перевірка необхідних категорій (20%)
  if (goals.needsCategory && goals.needsCategory.length > 0) {
    const selectedCategories = new Set(selectedProducts.map(p => p.category));
    const missingCategories = goals.needsCategory.filter(cat => 
      !selectedCategories.has(cat)
    );

    const categoryScore = (goals.needsCategory.length - missingCategories.length) / goals.needsCategory.length;
    score += maxPossibleScore * 0.2 * categoryScore;

    if (missingCategories.length === 0) {
      feedbackKeys.push({ key: 'fb_balanced' });
    } else {
      const missingNames = missingCategories.map(cat => categories[cat].name);
      feedbackKeys.push({ key: 'fb_missing', params: { categories: missingNames.join(', ') } });
    }

    details.selectedCategories = Array.from(selectedCategories).map(cat => categories[cat].name);
  } else {
    // Якщо не вказано обов'язкові категорії - даємо повний бал за цей розділ
    score += maxPossibleScore * 0.2;
  }

  // 5. Перевірка на надмірну концентрацію однієї категорії
  const categoryCounts = {};
  selectedProducts.forEach(p => {
    categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
  });

  // Якщо одна категорія становить більше 50% - штраф
  const maxCategoryCount = Math.max(...Object.values(categoryCounts));
  const categoryPercentage = maxCategoryCount / productCount;
  
  if (categoryPercentage > 0.5) {
    const penalty = 15 * (categoryPercentage - 0.5) * 2; // Штраф до 15 балів
    score -= penalty;
    feedbackKeys.push({ key: 'fb_imbalance' });
    details.categoryImbalance = true;
  }

  // 6. Бонуси за різноманітність
  const uniqueCategories = new Set(selectedProducts.map(p => p.category));
  if (uniqueCategories.size >= 3) {
    feedbackKeys.push({ key: 'fb_diversity' });
    score += 5;
    details.diversity = true;
  }

  // 6. Обмеження балу
  const totalScore = Math.max(0, Math.min(Math.round(score), maxPossibleScore));
  details.healthyCount = healthyCount;
  details.unhealthyCount = unhealthyCount;

  // 7. Детальний аналіз (тільки для 6-11 класів)
  const analysis = scenario.ageGroup === '6-11' ? generateDetailedAnalysis(selectedProducts, details, goals, t) : null;

  console.log('Розрахунок балів:', {
    selectedProducts: selectedProducts.map(p => ({ name: p.name, health: p.healthScore })),
    rawScore: score,
    totalScore,
    maxScore: maxPossibleScore,
    avgHealthScore,
    details,
    analysis
  });

  return {
    totalScore,
    maxScore: maxPossibleScore,
    feedbackKeys,
    details,
    grade: getGrade(totalScore, maxPossibleScore),
    analysis
  };
};

/**
 * Генерувати детальний аналіз для старших класів
 */
const generateDetailedAnalysis = (selectedProducts, details, goals, t) => {
  const analysis = {
    nutritionSummary: {
      totalCalories: details.totalCalories,
      avgCaloriesPerProduct: Math.round(details.totalCalories / selectedProducts.length),
      calorieStatus: ''
    },
    productBreakdown: {
      healthy: [],
      moderate: [],
      unhealthy: []
    },
    recommendations: [],
    detailedExplanation: []
  };

  // Оцінка калорій
  if (goals.maxCalories) {
    if (details.totalCalories <= goals.maxCalories * 0.8) {
      analysis.nutritionSummary.calorieStatus = t('calorie_good');
    } else if (details.totalCalories <= goals.maxCalories) {
      analysis.nutritionSummary.calorieStatus = t('calorie_good');
    } else {
      analysis.nutritionSummary.calorieStatus = t('calorie_exceed', { count: details.totalCalories - goals.maxCalories });
      analysis.recommendations.push(t('recommend_less_calories'));
    }
  }

  // Розбір продуктів за категоріями корисності
  selectedProducts.forEach(product => {
    const productInfo = {
      nameKey: `product_${product.id}`,
      calories: product.calories,
      healthScore: product.healthScore,
      details: getProductDetails(product)
    };

    if (product.healthScore >= 70) {
      analysis.productBreakdown.healthy.push(productInfo);
    } else if (product.healthScore >= 40) {
      analysis.productBreakdown.moderate.push(productInfo);
    } else {
      analysis.productBreakdown.unhealthy.push(productInfo);
    }
  });

  // Детальні пояснення
  if (analysis.productBreakdown.healthy.length > 0) {
    analysis.detailedExplanation.push({
      title: t('healthy_products'),
      items: analysis.productBreakdown.healthy.map(p => 
        `${t(p.nameKey)} (${p.calories} ${t('kcal')}): ${p.details.benefits.map(b => t(b)).join(', ') || t('fb_very_healthy')}`
      )
    });
  }

  if (analysis.productBreakdown.unhealthy.length > 0) {
    analysis.detailedExplanation.push({
      title: t('unhealthy_products'),
      items: analysis.productBreakdown.unhealthy.map(p => 
        `${t(p.nameKey)} (${p.calories} ${t('kcal')}): ${p.details.concerns.map(c => t(c)).join(', ') || t('fb_many_unhealthy')}`
      )
    });

    // Рекомендації
    analysis.recommendations.push(t('recommend_replace'));
    
    if (analysis.productBreakdown.unhealthy.some(p => p.details.concerns.includes(productBenefits.sugar))) {
      analysis.recommendations.push(t('recommend_sugar'));
    }
    if (analysis.productBreakdown.unhealthy.some(p => p.details.concerns.includes(productBenefits.fat))) {
      analysis.recommendations.push(t('recommend_fat'));
    }
    if (analysis.productBreakdown.unhealthy.some(p => p.details.concerns.includes(productBenefits.salt))) {
      analysis.recommendations.push(t('recommend_salt'));
    }
  }

  // Рекомендації щодо балансу
  if (details.selectedCategories) {
    const hasAllCategories = goals.needsCategory?.every(cat => 
      details.selectedCategories.some(selected => selected === categories[cat].name)
    );
    
    if (hasAllCategories) {
      analysis.recommendations.push(t('recommend_balance'));
    }
  }

  return analysis;
};

/**
 * Отримати оцінку на основі балів
 */
export const getGrade = (score, maxScore) => {
  const percentage = (score / maxScore) * 100;

  if (percentage >= 90) {
    return {
      gradeKey: 'grade_excellent',
      emoji: '🌟',
      messageKey: 'msg_expert',
      color: '#51CF66'
    };
  } else if (percentage >= 75) {
    return {
      gradeKey: 'grade_good',
      emoji: '😊',
      messageKey: 'msg_great',
      color: '#74C0FC'
    };
  } else if (percentage >= 60) {
    return {
      gradeKey: 'grade_average',
      emoji: '🤔',
      messageKey: 'msg_good',
      color: '#FFD43B'
    };
  } else if (percentage >= 40) {
    return {
      gradeKey: 'grade_poor',
      emoji: '😐',
      messageKey: 'msg_better',
      color: '#FFA94D'
    };
  } else {
    return {
      gradeKey: 'grade_bad',
      emoji: '😕',
      messageKey: 'msg_try_again',
      color: '#FF6B6B'
    };
  }
};

/**
 * Отримати підказку на основі поточного вибору
 * Повертає об'єкт { key, params } для перекладу
 */
export const getHint = (selectedProducts, scenario, t) => {
  const { goals } = scenario;
  const selectedCategories = new Set(selectedProducts.map(p => p.category));

  if (goals.needsCategory) {
    const missingCategories = goals.needsCategory.filter(cat => 
      !selectedCategories.has(cat)
    );

    if (missingCategories.length > 0) {
      // Спеціальна підказка для "Здоровий обід"
      if (scenario.id === 'lunch-1') {
        return { key: 'hint_lunch' };
      }
      
      const missing = missingCategories[0];
      return { 
        key: 'hint_add_category', 
        params: { category: t(`cat_${missing}`), icon: categories[missing].icon }
      };
    }
  }

  if (goals.avoidCategories) {
    const hasJunk = selectedProducts.some(p => 
      goals.avoidCategories.includes(p.category)
    );
    
    if (hasJunk) {
      return { key: 'hint_remove_junk' };
    }
  }

  if (selectedProducts.length < goals.minProducts) {
    return { key: 'hint_sugar_control' };
  }

  if (selectedProducts.length > goals.maxProducts) {
    const extra = selectedProducts.length - goals.maxProducts;
    const countWord = extra === 1 ? t('product_1') || 'product' : t('product_many') || 'products';
    return { key: 'hint_too_many', params: { count: extra, countWord } };
  }

  return { key: 'hint_good' };
};

/**
 * Форматувати результат для відображення
 */
export const formatResult = (result) => {
  const { totalScore, maxScore, details } = result;
  const percentage = Math.round((totalScore / maxScore) * 100);

  return {
    ...result,
    percentage,
    stars: Math.round(percentage / 20),
    displayScore: `${totalScore} / ${maxScore}`,
    detailsFormatted: {
      'Середня корисність': `${details.avgHealthScore}/100`,
      'Корисних продуктів': details.healthyCount,
      'Шкідливих продуктів': details.unhealthyCount,
      ...(details.totalCalories && { 'Загальна калорійність': `${details.totalCalories} ккал` }),
      ...(details.selectedCategories && { 'Категорії': details.selectedCategories.join(', ') })
    }
  };
};
