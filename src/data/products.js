/**
 * База продуктів для освітньої гри про здорове харчування
 * 
 * Структура продукту:
 * - id: унікальний ідентифікатор
 * - name: назва українською
 * - category: категорія (fruits, vegetables, dairy, grains, protein, junk)
 * - healthScore: оцінка корисності (0-100)
 * - calories: калорійність на 100г
 * - image: URL або шлях до зображення
 * - description: короткий опис
 * - ageAppropriate: вікові групи ['1-5', '6-11']
 */

export const products = [
  // КОРИСНІ ПРОДУКТИ (25 штук)
  
  // Фрукти (10)
  {
    id: 'apple',
    name: 'Яблуко',
    category: 'fruits',
    healthScore: 90,
    calories: 52,
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=300&h=300&fit=crop',
    description: 'Багате вітамінами та клітковиною',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'banana',
    name: 'Банан',
    category: 'fruits',
    healthScore: 85,
    calories: 89,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop',
    description: 'Містить калій та енергію',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'orange',
    name: 'Апельсин',
    category: 'fruits',
    healthScore: 90,
    calories: 47,
    image: 'https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=300&h=300&fit=crop',
    description: 'Багатий вітаміном C',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'strawberry',
    name: 'Полуниця',
    category: 'fruits',
    healthScore: 95,
    calories: 32,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=300&fit=crop',
    description: 'Смачна та корисна ягода',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'watermelon',
    name: 'Кавун',
    category: 'fruits',
    healthScore: 85,
    calories: 30,
    image: 'https://images.unsplash.com/photo-1563114773-84221bd62daa?w=300&h=300&fit=crop',
    description: 'Освіжає та має багато води',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'grapes',
    name: 'Виноград',
    category: 'fruits',
    healthScore: 85,
    calories: 69,
    image: 'https://images.unsplash.com/photo-1596363505729-4190a9506133?w=300&h=300&fit=crop',
    description: 'Смачні та корисні ягоди',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'pear',
    name: 'Груша',
    category: 'fruits',
    healthScore: 88,
    calories: 57,
    image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=300&h=300&fit=crop',
    description: 'Солодка та корисна',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'kiwi',
    name: 'Ківі',
    category: 'fruits',
    healthScore: 92,
    calories: 61,
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300&h=300&fit=crop',
    description: 'Багатий вітаміном C',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'peach',
    name: 'Персик',
    category: 'fruits',
    healthScore: 87,
    calories: 39,
    image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=300&h=300&fit=crop',
    description: 'Соковитий та смачний',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'blueberry',
    name: 'Чорниця',
    category: 'fruits',
    healthScore: 98,
    calories: 57,
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=300&h=300&fit=crop',
    description: 'Суперфуд для мозку',
    ageAppropriate: ['1-5', '6-11']
  },

  // Овочі (7)
  {
    id: 'carrot',
    name: 'Морква',
    category: 'vegetables',
    healthScore: 95,
    calories: 41,
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300&h=300&fit=crop',
    description: 'Корисна для зору',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'broccoli',
    name: 'Броколі',
    category: 'vegetables',
    healthScore: 100,
    calories: 34,
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=300&h=300&fit=crop',
    description: 'Супер-корисний овоч',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'tomato',
    name: 'Помідор',
    category: 'vegetables',
    healthScore: 90,
    calories: 18,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&h=300&fit=crop',
    description: 'Багатий антиоксидантами',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'cucumber',
    name: 'Огірок',
    category: 'vegetables',
    healthScore: 85,
    calories: 16,
    image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=300&h=300&fit=crop',
    description: 'Освіжає та має мало калорій',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'pepper',
    name: 'Перець болгарський',
    category: 'vegetables',
    healthScore: 90,
    calories: 31,
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&h=300&fit=crop',
    description: 'Багатий вітамінами',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'spinach',
    name: 'Шпинат',
    category: 'vegetables',
    healthScore: 97,
    calories: 23,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=300&fit=crop',
    description: 'Багатий залізом',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'cabbage',
    name: 'Капуста',
    category: 'vegetables',
    healthScore: 88,
    calories: 25,
    image: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=300&h=300&fit=crop',
    description: 'Корисна для травлення',
    ageAppropriate: ['1-5', '6-11']
  },

  // Молочні продукти (3)
  {
    id: 'milk',
    name: 'Молоко',
    category: 'dairy',
    healthScore: 80,
    calories: 60,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop',
    description: 'Багате кальцієм',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'cheese',
    name: 'Сир',
    category: 'dairy',
    healthScore: 75,
    calories: 402,
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=300&h=300&fit=crop',
    description: 'Містить білок та кальцій',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'yogurt',
    name: 'Йогурт',
    category: 'dairy',
    healthScore: 85,
    calories: 59,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=300&fit=crop',
    description: 'Корисний для травлення',
    ageAppropriate: ['1-5', '6-11']
  },

  // Зернові (2)
  {
    id: 'bread',
    name: 'Хліб цільнозерновий',
    category: 'grains',
    healthScore: 80,
    calories: 247,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop',
    description: 'Багатий клітковиною',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'oatmeal',
    name: 'Вівсянка',
    category: 'grains',
    healthScore: 90,
    calories: 68,
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=300&h=300&fit=crop',
    description: 'Ідеальний сніданок',
    ageAppropriate: ['1-5', '6-11']
  },

  // Білкові продукти (3)
  {
    id: 'egg',
    name: 'Яйце',
    category: 'protein',
    healthScore: 85,
    calories: 155,
    image: 'https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=300&h=300&fit=crop',
    description: 'Багате білком',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'chicken',
    name: 'Куряче філе',
    category: 'protein',
    healthScore: 85,
    calories: 165,
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop',
    description: 'Легкий білок',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'fish',
    name: 'Риба',
    category: 'protein',
    healthScore: 95,
    calories: 206,
    image: 'https://images.unsplash.com/photo-1535140728325-a4d3707eee61?w=300&h=300&fit=crop',
    description: 'Багата омега-3',
    ageAppropriate: ['1-5', '6-11']
  },

  // ШКІДЛИВІ ПРОДУКТИ (25 штук)
  
  {
    id: 'soda',
    name: 'Кола',
    category: 'junk',
    healthScore: 10,
    calories: 140,
    image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300&h=300&fit=crop',
    description: 'Багато цукру',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'chips',
    name: 'Чіпси',
    category: 'junk',
    healthScore: 15,
    calories: 536,
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300&h=300&fit=crop',
    description: 'Багато солі та жиру',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'candy',
    name: 'Цукерки',
    category: 'junk',
    healthScore: 10,
    calories: 375,
    image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=300&h=300&fit=crop',
    description: 'Лише цукор',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'chocolate-bar',
    name: 'Шоколадний батончик',
    category: 'junk',
    healthScore: 20,
    calories: 546,
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=300&h=300&fit=crop',
    description: 'Багато цукру',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'burger',
    name: 'Бургер',
    category: 'junk',
    healthScore: 30,
    calories: 295,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop',
    description: 'Багато жиру',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'pizza',
    name: 'Піца',
    category: 'junk',
    healthScore: 35,
    calories: 266,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=300&fit=crop',
    description: 'Багато калорій',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'donut',
    name: 'Пончик',
    category: 'junk',
    healthScore: 15,
    calories: 452,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300&h=300&fit=crop',
    description: 'Багато цукру та жиру',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'fries',
    name: 'Картопля фрі',
    category: 'junk',
    healthScore: 20,
    calories: 312,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=300&fit=crop',
    description: 'Смажена в маслі',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'ice-cream',
    name: 'Морозиво',
    category: 'junk',
    healthScore: 25,
    calories: 207,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=300&fit=crop',
    description: 'Багато цукру',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'hot-dog',
    name: 'Хот-дог',
    category: 'junk',
    healthScore: 28,
    calories: 290,
    image: 'https://images.pexels.com/photos/4518643/pexels-photo-4518643.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Багато жиру та солі',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'popcorn-butter',
    name: 'Попкорн з маслом',
    category: 'junk',
    healthScore: 30,
    calories: 375,
    image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=300&h=300&fit=crop',
    description: 'Багато жиру та солі',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'cake',
    name: 'Торт',
    category: 'junk',
    healthScore: 18,
    calories: 360,
    image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=300&h=300&fit=crop',
    description: 'Багато цукру та жиру',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'cookies',
    name: 'Печиво',
    category: 'junk',
    healthScore: 22,
    calories: 502,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=300&h=300&fit=crop',
    description: 'Багато цукру',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'nachos',
    name: 'Начос',
    category: 'junk',
    healthScore: 25,
    calories: 346,
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&h=300&fit=crop',
    description: 'Багато жиру та солі',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'energy-drink',
    name: 'Енергетик',
    category: 'junk',
    healthScore: 8,
    calories: 110,
    image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=300&h=300&fit=crop',
    description: 'Багато кофеїну та цукру',
    ageAppropriate: ['6-11']
  },
  {
    id: 'croissant',
    name: 'Круасан',
    category: 'junk',
    healthScore: 32,
    calories: 406,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300&h=300&fit=crop',
    description: 'Багато масла',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'milkshake',
    name: 'Молочний коктейль',
    category: 'junk',
    healthScore: 24,
    calories: 350,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=300&fit=crop',
    description: 'Багато цукру',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'gummy-bears',
    name: 'Желейні ведмедики',
    category: 'junk',
    healthScore: 12,
    calories: 325,
    image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=300&h=300&fit=crop',
    description: 'Лише цукор',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'bacon',
    name: 'Бекон',
    category: 'junk',
    healthScore: 28,
    calories: 541,
    image: 'https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=300&h=300&fit=crop',
    description: 'Багато жиру та солі',
    ageAppropriate: ['6-11']
  },
  {
    id: 'nuggets',
    name: 'Нагетси',
    category: 'junk',
    healthScore: 26,
    calories: 296,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=300&h=300&fit=crop',
    description: 'Смажені, багато жиру',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'mayo',
    name: 'Майонез',
    category: 'junk',
    healthScore: 15,
    calories: 680,
    image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=300&h=300&fit=crop',
    description: 'Дуже жирний',
    ageAppropriate: ['6-11']
  },
  {
    id: 'ketchup',
    name: 'Кетчуп',
    category: 'junk',
    healthScore: 22,
    calories: 112,
    image: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?w=300&h=300&fit=crop',
    description: 'Багато цукру',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'waffle',
    name: 'Вафлі',
    category: 'junk',
    healthScore: 24,
    calories: 291,
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=300&h=300&fit=crop',
    description: 'Багато цукру',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'pancakes-syrup',
    name: 'Млинці з сиропом',
    category: 'junk',
    healthScore: 20,
    calories: 227,
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=300&h=300&fit=crop',
    description: 'Багато цукру',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'sweetened-cereal',
    name: 'Солодкі сухі сніданки',
    category: 'junk',
    healthScore: 18,
    calories: 379,
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&h=300&fit=crop',
    description: 'Багато цукру',
    ageAppropriate: ['1-5', '6-11']
  }
];

/**
 * Категорії продуктів з описом українською
 */
export const categories = {
  fruits: {
    name: 'Фрукти',
    color: '#FF6B6B',
    icon: '🍎'
  },
  vegetables: {
    name: 'Овочі',
    color: '#51CF66',
    icon: '🥕'
  },
  dairy: {
    name: 'Молочні продукти',
    color: '#74C0FC',
    icon: '🥛'
  },
  grains: {
    name: 'Зернові',
    color: '#FFD43B',
    icon: '🍞'
  },
  protein: {
    name: 'Білкові продукти',
    color: '#FF922B',
    icon: '🍗'
  },
  junk: {
    name: 'Шкідливі продукти',
    color: '#868E96',
    icon: '🍔'
  }
};

/**
 * Перемішати масив (алгоритм Fisher-Yates)
 */
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Отримати продукти за категорією
 */
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

/**
 * Отримати продукт за ID
 */
export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

/**
 * Отримати продукти для вікової групи
 */
export const getProductsByAge = (ageGroup) => {
  return products.filter(product => product.ageAppropriate.includes(ageGroup));
};

/**
 * Отримати продукти для вікової групи в рандомному порядку
 */
export const getShuffledProductsByAge = (ageGroup) => {
  const filtered = getProductsByAge(ageGroup);
  return shuffleArray(filtered);
};
