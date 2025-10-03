/**
 * Утиліти для оцінювання вибору продуктів у грі
 */

import { categories } from '../data/products';

/**
 * Причини, чому продукт корисний або шкідливий
 */
const productBenefits = {
  // Корисні речовини
  vitamins: 'Багатий вітамінами',
  fiber: 'Містить клітковину для травлення',
  protein: 'Багатий білком для м\'язів',
  calcium: 'Містить кальцій для кісток',
  iron: 'Містить залізо для крові',
  omega3: 'Багатий омега-3 для мозку',
  antioxidants: 'Містить антиоксиданти',
  lowCalorie: 'Низькокалорійний',
  water: 'Багато води, освіжає',
  energy: 'Дає енергію',
  
  // Шкідливі речовини
  sugar: 'Багато цукру (підвищує рівень глюкози)',
  fat: 'Багато насичених жирів',
  salt: 'Високий вміст солі (підвищує тиск)',
  calories: 'Дуже висока калорійність',
  processed: 'Сильно оброблений продукт',
  additives: 'Штучні добавки та барвники',
  caffeine: 'Високий вміст кофеїну',
  trans_fats: 'Містить трансжири'
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
export const calculateScore = (selectedProducts, scenario) => {
  if (!selectedProducts || selectedProducts.length === 0) {
    return {
      totalScore: 0,
      feedback: 'Ти не обрав жодного продукту!',
      details: {},
      analysis: null
    };
  }

  const { goals, scoring } = scenario;
  let score = 0;
  const maxPossibleScore = scoring.perfectScore;
  const feedback = [];
  const details = {};

  // 1. Перевірка кількості продуктів (20%)
  const productCount = selectedProducts.length;
  details.productCount = productCount;
  
  if (productCount >= goals.minProducts && productCount <= goals.maxProducts) {
    feedback.push('✓ Правильна кількість продуктів');
    score += maxPossibleScore * 0.2;
  } else if (productCount < goals.minProducts) {
    feedback.push(`Обрано замало продуктів (${productCount}/${goals.minProducts})`);
    score += (maxPossibleScore * 0.2 * productCount) / goals.minProducts;
  } else {
    feedback.push(`Обрано забагато продуктів (${productCount}/${goals.maxProducts})`);
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
    feedback.push('✓ Продукти дуже корисні для здоров\'я');
  } else if (avgHealthScore >= 50) {
    feedback.push('Продукти помірно корисні');
  } else {
    feedback.push('Обрано багато шкідливих продуктів');
  }

  // 3. Перевірка шкідливих категорій (20%)
  if (goals.avoidCategories) {
    const junkProducts = selectedProducts.filter(p => 
      goals.avoidCategories.includes(p.category)
    );
    
    if (junkProducts.length === 0) {
      feedback.push('✓ Немає шкідливих продуктів - чудово!');
      score += maxPossibleScore * 0.2;
    } else {
      const junkPercentage = junkProducts.length / productCount;
      const junkScore = maxPossibleScore * 0.2 * (1 - junkPercentage);
      score += junkScore;
      feedback.push(`⚠ Шкідливих продуктів: ${junkProducts.length}`);
      details.junkProducts = junkProducts.map(p => p.name);
    }
  }

  // 4. Перевірка необхідних категорій (20%)
  if (goals.needsCategory) {
    const selectedCategories = new Set(selectedProducts.map(p => p.category));
    const missingCategories = goals.needsCategory.filter(cat => 
      !selectedCategories.has(cat)
    );

    const categoryScore = (goals.needsCategory.length - missingCategories.length) / goals.needsCategory.length;
    score += maxPossibleScore * 0.2 * categoryScore;

    if (missingCategories.length === 0) {
      feedback.push('✓ Збалансований раціон - є всі потрібні категорії!');
    } else {
      const missingNames = missingCategories.map(cat => categories[cat].name);
      feedback.push(`Не вистачає: ${missingNames.join(', ')}`);
    }

    details.selectedCategories = Array.from(selectedCategories).map(cat => categories[cat].name);
  }

  // 5. Бонуси за різноманітність
  const uniqueCategories = new Set(selectedProducts.map(p => p.category));
  if (uniqueCategories.size >= 4) {
    feedback.push('✓ Чудове різноманіття продуктів!');
    score += 5;
    details.diversity = true;
  }

  // 6. Обмеження балу
  const totalScore = Math.max(0, Math.min(Math.round(score), maxPossibleScore));
  details.healthyCount = healthyCount;
  details.unhealthyCount = unhealthyCount;

  // 7. Детальний аналіз (тільки для 6-11 класів)
  const analysis = scenario.ageGroup === '6-11' ? generateDetailedAnalysis(selectedProducts, details, goals) : null;

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
    feedback: feedback.join('\n'),
    details,
    grade: getGrade(totalScore, maxPossibleScore),
    analysis
  };
};

/**
 * Генерувати детальний аналіз для старших класів
 */
const generateDetailedAnalysis = (selectedProducts, details, goals) => {
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
      analysis.nutritionSummary.calorieStatus = '✓ Відмінно! Калорійність в межах норми';
    } else if (details.totalCalories <= goals.maxCalories) {
      analysis.nutritionSummary.calorieStatus = '✓ Добре! Калорійність прийнятна';
    } else {
      analysis.nutritionSummary.calorieStatus = `⚠ Перевищення норми на ${details.totalCalories - goals.maxCalories} калорій`;
      analysis.recommendations.push('Намагайся обирати менш калорійні продукти');
    }
  }

  // Розбір продуктів за категоріями корисності
  selectedProducts.forEach(product => {
    const productInfo = {
      name: product.name,
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
      title: '✅ Корисні продукти в твоєму виборі:',
      items: analysis.productBreakdown.healthy.map(p => 
        `${p.name} (${p.calories} ккал): ${p.details.benefits.join(', ') || 'Корисний продукт'}`
      )
    });
  }

  if (analysis.productBreakdown.unhealthy.length > 0) {
    analysis.detailedExplanation.push({
      title: '⚠️ Шкідливі продукти в твоєму виборі:',
      items: analysis.productBreakdown.unhealthy.map(p => 
        `${p.name} (${p.calories} ккал): ${p.details.concerns.join(', ') || 'Краще уникати'}`
      )
    });

    // Рекомендації
    analysis.recommendations.push('Спробуй замінити шкідливі продукти на корисніші альтернативи');
    
    if (analysis.productBreakdown.unhealthy.some(p => p.details.concerns.includes(productBenefits.sugar))) {
      analysis.recommendations.push('Надмірне споживання цукру може призвести до діабету та карієсу');
    }
    if (analysis.productBreakdown.unhealthy.some(p => p.details.concerns.includes(productBenefits.fat))) {
      analysis.recommendations.push('Насичені жири підвищують холестерин та ризик серцевих захворювань');
    }
    if (analysis.productBreakdown.unhealthy.some(p => p.details.concerns.includes(productBenefits.salt))) {
      analysis.recommendations.push('Надмірна сіль може підвищити кров\'яний тиск');
    }
  }

  // Рекомендації щодо балансу
  if (details.selectedCategories) {
    const hasAllCategories = goals.needsCategory?.every(cat => 
      details.selectedCategories.some(selected => selected === categories[cat].name)
    );
    
    if (hasAllCategories) {
      analysis.recommendations.push('Чудова збалансованість! У твоєму раціоні є всі необхідні групи продуктів');
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
      grade: 'Відмінно!',
      emoji: '🌟',
      message: 'Ти справжній експерт здорового харчування!',
      color: '#51CF66'
    };
  } else if (percentage >= 75) {
    return {
      grade: 'Добре!',
      emoji: '😊',
      message: 'Чудовий вибір! Так тримати!',
      color: '#74C0FC'
    };
  } else if (percentage >= 60) {
    return {
      grade: 'Непогано',
      emoji: '🤔',
      message: 'Добре, але можна краще!',
      color: '#FFD43B'
    };
  } else if (percentage >= 40) {
    return {
      grade: 'Можна краще',
      emoji: '😐',
      message: 'Спробуй обрати більше корисних продуктів',
      color: '#FFA94D'
    };
  } else {
    return {
      grade: 'Спробуй ще',
      emoji: '😕',
      message: 'Обирай корисніші продукти!',
      color: '#FF6B6B'
    };
  }
};

/**
 * Отримати підказку на основі поточного вибору
 */
export const getHint = (selectedProducts, scenario) => {
  const { goals } = scenario;
  const selectedCategories = new Set(selectedProducts.map(p => p.category));

  if (goals.needsCategory) {
    const missingCategories = goals.needsCategory.filter(cat => 
      !selectedCategories.has(cat)
    );

    if (missingCategories.length > 0) {
      const missing = missingCategories[0];
      return `Спробуй додати ${categories[missing].name.toLowerCase()} ${categories[missing].icon}`;
    }
  }

  if (goals.avoidCategories) {
    const hasJunk = selectedProducts.some(p => 
      goals.avoidCategories.includes(p.category)
    );
    
    if (hasJunk) {
      return 'Краще прибрати шкідливі продукти 🚫';
    }
  }

  if (selectedProducts.length < goals.minProducts) {
    const need = goals.minProducts - selectedProducts.length;
    return `Потрібно ще ${need} ${need === 1 ? 'продукт' : 'продукти'}`;
  }

  if (selectedProducts.length > goals.maxProducts) {
    const extra = selectedProducts.length - goals.maxProducts;
    return `Забагато! Прибери ${extra} ${extra === 1 ? 'продукт' : 'продукти'}`;
  }

  return 'Все виглядає добре! Можеш завершити 👍';
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
