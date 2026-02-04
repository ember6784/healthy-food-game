/**
 * Ігрові сценарії для різних вікових груп
 * 
 * Структура сценарію:
 * - id: унікальний ідентифікатор
 * - title: назва завдання
 * - description: опис завдання
 * - ageGroup: вікова група
 * - difficulty: рівень складності (easy, medium, hard)
 * - goals: цілі завдання
 * - requiredProducts: необхідна кількість продуктів
 * - scoring: правила нарахування балів
 */

export const scenarios = [
  // Сценарії для 1-5 класів (прості)
  {
    id: 'breakfast-1',
    title: 'Збери здоровий сніданок',
    description: 'Обери 5 корисних продуктів для твого сніданку',
    ageGroup: '1-5',
    difficulty: 'easy',
    goals: {
      minProducts: 5,
      maxProducts: 5,
      minHealthScore: 70,
      needsCategory: ['fruits', 'grains'],
      avoidCategories: ['junk']
    },
    requiredProducts: 5,
    scoring: {
      perfectScore: 100,
      healthyProduct: 20,
      unhealthyProduct: -10,
      balancedDiet: 20
    },
    hint: 'Обирай фрукти, каші та молочні продукти!'
  },
  {
    id: 'snack-1',
    title: 'Перекус для школи',
    description: 'Що візьмеш на перекус у школу?',
    ageGroup: '1-5',
    difficulty: 'easy',
    goals: {
      minProducts: 3,
      maxProducts: 3,
      minHealthScore: 75,
      avoidCategories: ['junk']
    },
    requiredProducts: 3,
    scoring: {
      perfectScore: 100,
      healthyProduct: 30,
      unhealthyProduct: -15,
      balancedDiet: 10
    },
    hint: 'Обирай фрукти або йогурт!'
  },
  {
    id: 'lunch-1',
    title: 'Здоровий обід',
    description: 'Склади повноцінний обід',
    ageGroup: '1-5',
    difficulty: 'easy',
    goals: {
      minProducts: 4,
      maxProducts: 6,
      minHealthScore: 70,
      needsCategory: ['vegetables', 'protein'],
      avoidCategories: ['junk']
    },
    requiredProducts: 5,
    scoring: {
      perfectScore: 100,
      healthyProduct: 15,
      unhealthyProduct: -10,
      balancedDiet: 25,
      categoryBonus: 10
    },
    hint: 'Потрібні овочі та білок (м\'ясо, риба або яйця)!'
  },

  // Сценарії для 6-11 класів (складніші)
  {
    id: 'athlete-meal',
    title: 'Раціон для спортсмена',
    description: 'Склади раціон перед спортивними змаганнями',
    ageGroup: '6-11',
    difficulty: 'medium',
    goals: {
      minProducts: 6,
      maxProducts: 8,
      minHealthScore: 80,
      needsCategory: ['protein', 'grains', 'vegetables'],
      maxCalories: 800,
      avoidCategories: ['junk']
    },
    requiredProducts: 7,
    scoring: {
      perfectScore: 100,
      healthyProduct: 12,
      unhealthyProduct: -15,
      balancedDiet: 20,
      categoryBonus: 15,
      calorieBalance: 15
    },
    hint: 'Спортсменам потрібні білки, складні вуглеводи та овочі!'
  },
  {
    id: 'daily-menu',
    title: 'Денне меню',
    description: 'Склади збалансоване меню на весь день',
    ageGroup: '6-11',
    difficulty: 'hard',
    goals: {
      minProducts: 10,
      maxProducts: 12,
      minHealthScore: 75,
      needsCategory: ['fruits', 'vegetables', 'protein', 'grains', 'dairy'],
      maxCalories: 2000,
      maxSugar: 30,
      avoidCategories: ['junk']
    },
    requiredProducts: 10,
    scoring: {
      perfectScore: 100,
      healthyProduct: 8,
      unhealthyProduct: -12,
      balancedDiet: 25,
      categoryBonus: 20,
      calorieBalance: 10,
      diversityBonus: 15
    },
    hint: 'Потрібні продукти з усіх корисних категорій!'
  },
  {
    id: 'sugar-control',
    title: 'Контроль цукру',
    description: 'Обери продукти так, щоб не перевищити норму цукру',
    ageGroup: '6-11',
    difficulty: 'medium',
    goals: {
      minProducts: 6,
      maxProducts: 8,
      minHealthScore: 70,
      maxSugar: 25,
      avoidCategories: ['junk']
    },
    requiredProducts: 7,
    scoring: {
      perfectScore: 100,
      healthyProduct: 12,
      unhealthyProduct: -15,
      balancedDiet: 15,
      sugarControl: 30
    },
    hint: 'Уважно слідкуй за кількістю цукру!'
  },
  {
    id: 'brain-food',
    title: 'Їжа для розуму',
    description: 'Обери продукти, які допоможуть краще думати',
    ageGroup: '6-11',
    difficulty: 'medium',
    goals: {
      minProducts: 5,
      maxProducts: 7,
      minHealthScore: 85,
      needsCategory: ['protein', 'fruits', 'vegetables'],
      preferProducts: ['fish', 'nuts', 'broccoli', 'blueberry'],
      avoidCategories: ['junk']
    },
    requiredProducts: 6,
    scoring: {
      perfectScore: 100,
      healthyProduct: 12,
      unhealthyProduct: -15,
      balancedDiet: 20,
      brainFoodBonus: 25
    },
    hint: 'Риба, горіхи та броколі — найкраща їжа для мозку!'
  },
  {
    id: 'exam-prep',
    title: 'Підготовка до іспиту',
    description: 'Що з\'їсти перед важливим іспитом?',
    ageGroup: '6-11',
    difficulty: 'easy',
    goals: {
      minProducts: 4,
      maxProducts: 5,
      minHealthScore: 80,
      needsCategory: ['fruits', 'grains'],
      avoidCategories: ['junk']
    },
    requiredProducts: 4,
    scoring: {
      perfectScore: 100,
      healthyProduct: 20,
      unhealthyProduct: -15,
      balancedDiet: 20,
      energyBonus: 20
    },
    hint: 'Потрібна енергія для мозку: фрукти та каші!'
  }
];

/**
 * Отримати сценарії для вікової групи
 */
export const getScenariosByAge = (ageGroup) => {
  return scenarios.filter(scenario => scenario.ageGroup === ageGroup);
};

/**
 * Отримати сценарії за складністю
 */
export const getScenariosByDifficulty = (difficulty) => {
  return scenarios.filter(scenario => scenario.difficulty === difficulty);
};

/**
 * Отримати сценарій за ID
 */
export const getScenarioById = (id) => {
  return scenarios.find(scenario => scenario.id === id);
};

/**
 * Рівні складності
 */
export const difficulties = {
  easy: {
    name: 'Легкий',
    color: '#51CF66',
    icon: '😊'
  },
  medium: {
    name: 'Середній',
    color: '#FFD43B',
    icon: '🤔'
  },
  hard: {
    name: 'Складний',
    color: '#FF6B6B',
    icon: '🧠'
  }
};
