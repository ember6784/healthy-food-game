/**
 * База продуктів для освітньої гри про здорове харчування
 * 
 * Структура продукту:
 * - id: унікальний ідентифікатор
 * - name: назва українською
 * - category: категорія (fruits, vegetables, dairy, grains, protein, fats, junk)
 * - healthScore: оцінка корисності (0-100)
 * - calories: калорійність на 100г
 * - image: URL або шлях до зображення
 * - description: короткий опис
 * - ageAppropriate: вікові групи ['1-5', '6-11']
 */

export const products = [
  // ===================== КОРИСНІ ПРОДУКТИ =====================
  
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
    image: 'https://images.pexels.com/photos/133182/pexels-photo-133182.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Багатий вітаміном C',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'peach',
    name: 'Персик',
    category: 'fruits',
    healthScore: 87,
    calories: 39,
    image: 'https://images.pexels.com/photos/2889197/pexels-photo-2889197.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
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

  // Молочні продукти (4)
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
  {
    id: 'kefir',
    name: 'Кефір',
    category: 'dairy',
    healthScore: 87,
    calories: 40,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop',
    description: 'Корисний для травлення',
    ageAppropriate: ['1-5', '6-11']
  },

  // Зернові та вуглеводи - Крупи (5)
  {
    id: 'oatmeal',
    name: 'Вівсянка',
    category: 'grains',
    healthScore: 90,
    calories: 68,
    image: 'https://images.pexels.com/photos/7421205/pexels-photo-7421205.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Ідеальний сніданок',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'buckwheat',
    name: 'Гречка',
    category: 'grains',
    healthScore: 92,
    calories: 92,
    image: 'https://images.pexels.com/photos/6811137/pexels-photo-6811137.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Багата білком та залізом',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'quinoa',
    name: 'Кіноа',
    category: 'grains',
    healthScore: 95,
    calories: 120,
    image: 'https://images.pexels.com/photos/7421203/pexels-photo-7421203.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Суперфуд з повним білком',
    ageAppropriate: ['6-11']
  },
  {
    id: 'bulgur',
    name: 'Булгур',
    category: 'grains',
    healthScore: 88,
    calories: 83,
    image: 'https://images.pexels.com/photos/10487660/pexels-photo-10487660.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Цільнозернова пшениця',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'brown-rice',
    name: 'Бурий рис',
    category: 'grains',
    healthScore: 85,
    calories: 123,
    image: 'https://images.pexels.com/photos/4110253/pexels-photo-4110253.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Багатий клітковиною',
    ageAppropriate: ['1-5', '6-11']
  },
  
  // Зернові та вуглеводи - Хліб та макарони (2)
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
    id: 'whole-grain-pasta',
    name: 'Макарони цільнозернові',
    category: 'grains',
    healthScore: 82,
    calories: 348,
    image: 'https://images.pexels.com/photos/16749368/pexels-photo-16749368.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'З твердих сортів пшениці',
    ageAppropriate: ['1-5', '6-11']
  },
  
  // Зернові та вуглеводи - Овочі крохмалисті (2)
  {
    id: 'potato',
    name: 'Картопля',
    category: 'grains',
    healthScore: 75,
    calories: 77,
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=300&fit=crop',
    description: 'Джерело вуглеводів',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'sweet-potato',
    name: 'Батат',
    category: 'grains',
    healthScore: 90,
    calories: 86,
    image: 'https://images.pexels.com/photos/7657339/pexels-photo-7657339.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Багатий вітаміном А',
    ageAppropriate: ['1-5', '6-11']
  },

  // Білкові продукти - М'ясо та птиця (5)
  {
    id: 'chicken',
    name: 'Куряче філе',
    category: 'protein',
    healthScore: 85,
    calories: 165,
    image: 'https://images.pexels.com/photos/5769375/pexels-photo-5769375.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Легкий білок',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'turkey',
    name: 'Індичка',
    category: 'protein',
    healthScore: 87,
    calories: 135,
    image: 'https://images.pexels.com/photos/18153126/pexels-photo-18153126.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Дієтичне м\'ясо',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'beef-lean',
    name: 'Пісна яловичина',
    category: 'protein',
    healthScore: 80,
    calories: 250,
    image: 'https://images.pexels.com/photos/1314041/pexels-photo-1314041.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Багата залізом',
    ageAppropriate: ['6-11']
  },
  {
    id: 'veal',
    name: 'Телятина',
    category: 'protein',
    healthScore: 82,
    calories: 172,
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=300&h=300&fit=crop',
    description: 'Ніжне м\'ясо',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'pork-lean',
    name: 'Нежирна свиняча вирізка',
    category: 'protein',
    healthScore: 75,
    calories: 242,
    image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=300&h=300&fit=crop',
    description: 'Нежирна частина',
    ageAppropriate: ['6-11']
  },
  
  // Білкові продукти - Риба та морепродукти (4)
  {
    id: 'fish',
    name: 'Риба',
    category: 'protein',
    healthScore: 95,
    calories: 206,
    image: 'https://images.pexels.com/photos/3304176/pexels-photo-3304176.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Багата омега-3',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'salmon',
    name: 'Лосось',
    category: 'protein',
    healthScore: 98,
    calories: 208,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=300&fit=crop',
    description: 'Багатий омега-3',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'mackerel',
    name: 'Скумбрія',
    category: 'protein',
    healthScore: 95,
    calories: 205,
    image: 'https://images.pexels.com/photos/29048590/pexels-photo-29048590.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Корисна жирна риба',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'seafood',
    name: 'Морепродукти',
    category: 'protein',
    healthScore: 92,
    calories: 99,
    image: 'https://images.pexels.com/photos/2031994/pexels-photo-2031994.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Низькокалорійний білок',
    ageAppropriate: ['6-11']
  },
  
  // Білкові продукти - Яйця та молочні білкові (2)
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
    id: 'cottage-cheese',
    name: 'Сир кисломолочний',
    category: 'protein',
    healthScore: 88,
    calories: 98,
    image: 'https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Легкий білковий продукт',
    ageAppropriate: ['1-5', '6-11']
  },
  
  // Білкові продукти - Бобові (5)
  {
    id: 'beans',
    name: 'Квасоля',
    category: 'protein',
    healthScore: 90,
    calories: 127,
    image: 'https://images.pexels.com/photos/1638523/pexels-photo-1638523.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Рослинний білок',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'lentils',
    name: 'Сочевиця',
    category: 'protein',
    healthScore: 92,
    calories: 116,
    image: 'https://images.pexels.com/photos/3735165/pexels-photo-3735165.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Багата білком та клітковиною',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'peas',
    name: 'Горох',
    category: 'protein',
    healthScore: 88,
    calories: 81,
    image: 'https://images.pexels.com/photos/768092/pexels-photo-768092.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Рослинний білок',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'chickpeas',
    name: 'Нут',
    category: 'protein',
    healthScore: 91,
    calories: 164,
    image: 'https://images.pexels.com/photos/106972/pexels-photo-106972.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Корисний білок',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'tofu',
    name: 'Тофу',
    category: 'protein',
    healthScore: 86,
    calories: 76,
    image: 'https://images.pexels.com/photos/4518583/pexels-photo-4518583.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Соєвий білок',
    ageAppropriate: ['6-11']
  },
  
  // Білкові продукти - Горіхи (3)
  {
    id: 'walnuts',
    name: 'Волоські горіхи',
    category: 'protein',
    healthScore: 93,
    calories: 654,
    image: 'https://images.pexels.com/photos/34148605/pexels-photo-34148605.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Корисні жири та білок',
    ageAppropriate: ['6-11']
  },
  {
    id: 'almonds',
    name: 'Мигдаль',
    category: 'protein',
    healthScore: 94,
    calories: 579,
    image: 'https://images.pexels.com/photos/57042/pexels-photo-57042.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Багатий білком',
    ageAppropriate: ['6-11']
  },
  {
    id: 'cashews',
    name: 'Кешʼю',
    category: 'protein',
    healthScore: 89,
    calories: 553,
    image: 'https://images.pexels.com/photos/4499222/pexels-photo-4499222.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Смачні та корисні',
    ageAppropriate: ['6-11']
  },

  // Корисні жири - Олії та інше (7)
  {
    id: 'olive-oil',
    name: 'Оливкова олія',
    category: 'fats',
    healthScore: 96,
    calories: 884,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=300&fit=crop',
    description: 'Корисна для серця',
    ageAppropriate: ['6-11']
  },
  {
    id: 'flax-oil',
    name: 'Лляна олія',
    category: 'fats',
    healthScore: 94,
    calories: 884,
    image: 'https://images.pexels.com/photos/5737579/pexels-photo-5737579.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Багата омега-3',
    ageAppropriate: ['6-11']
  },
  {
    id: 'avocado',
    name: 'Авокадо',
    category: 'fats',
    healthScore: 95,
    calories: 160,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=300&h=300&fit=crop',
    description: 'Корисні жири',
    ageAppropriate: ['6-11']
  },
  {
    id: 'olives',
    name: 'Оливки',
    category: 'fats',
    healthScore: 88,
    calories: 115,
    image: 'https://images.pexels.com/photos/4109910/pexels-photo-4109910.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Натуральні корисні жири',
    ageAppropriate: ['6-11']
  },
  {
    id: 'flax-seeds',
    name: 'Насіння льону',
    category: 'fats',
    healthScore: 93,
    calories: 534,
    image: 'https://images.pexels.com/photos/691175/pexels-photo-691175.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Багате омега-3',
    ageAppropriate: ['6-11']
  },
  {
    id: 'chia-seeds',
    name: 'Насіння чіа',
    category: 'fats',
    healthScore: 94,
    calories: 486,
    image: 'https://images.pexels.com/photos/691162/pexels-photo-691162.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Суперфуд з жирами',
    ageAppropriate: ['6-11']
  },
  {
    id: 'pumpkin-seeds',
    name: 'Гарбузове насіння',
    category: 'fats',
    healthScore: 90,
    calories: 559,
    image: 'https://images.pexels.com/photos/1080071/pexels-photo-1080071.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Корисні жири та мінерали',
    ageAppropriate: ['6-11']
  },

  // ===================== ШКІДЛИВІ ПРОДУКТИ =====================
  
  // Шкідливі - Солодощі та десерти (10)
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
    image: 'https://images.pexels.com/photos/4187499/pexels-photo-4187499.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Багато цукру',
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
    id: 'cake',
    name: 'Торт',
    category: 'junk',
    healthScore: 18,
    calories: 360,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
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
    id: 'sweetened-cereal',
    name: 'Солодкі сухі сніданки',
    category: 'junk',
    healthScore: 18,
    calories: 379,
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&h=300&fit=crop',
    description: 'Багато цукру',
    ageAppropriate: ['1-5', '6-11']
  },

  // Шкідливі - Фастфуд та смажене (10)
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
    id: 'nachos',
    name: 'Начос',
    category: 'junk',
    healthScore: 25,
    calories: 346,
    image: 'https://images.pexels.com/photos/1200354/pexels-photo-1200354.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Багато жиру та солі',
    ageAppropriate: ['1-5', '6-11']
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

  // Шкідливі - Вироби та соуси (8)
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
    id: 'sausage',
    name: 'Ковбаса',
    category: 'junk',
    healthScore: 25,
    calories: 301,
    image: 'https://images.pexels.com/photos/6004714/pexels-photo-6004714.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Багато солі та консервантів',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'ham',
    name: 'Шинка',
    category: 'junk',
    healthScore: 30,
    calories: 145,
    image: 'https://images.pexels.com/photos/6004712/pexels-photo-6004712.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Багато солі',
    ageAppropriate: ['6-11']
  },
  {
    id: 'pate',
    name: 'Паштет',
    category: 'junk',
    healthScore: 22,
    calories: 319,
    image: 'https://images.pexels.com/photos/6419708/pexels-photo-6419708.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Високожирний продукт',
    ageAppropriate: ['6-11']
  },
  {
    id: 'mayo',
    name: 'Майонез',
    category: 'junk',
    healthScore: 15,
    calories: 680,
    image: 'https://images.pexels.com/photos/8053728/pexels-photo-8053728.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Дуже жирний',
    ageAppropriate: ['6-11']
  },
  {
    id: 'ketchup',
    name: 'Кетчуп',
    category: 'junk',
    healthScore: 22,
    calories: 112,
    image: 'https://images.pexels.com/photos/8801194/pexels-photo-8801194.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Багато цукру',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'margarine',
    name: 'Маргарин',
    category: 'junk',
    healthScore: 18,
    calories: 717,
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300&h=300&fit=crop',
    description: 'Трансжири, шкідливо',
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

  // Шкідливі - Напої та інше (3)
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
    id: 'white-bread',
    name: 'Білий хліб',
    category: 'junk',
    healthScore: 35,
    calories: 265,
    image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=300&h=300&fit=crop',
    description: 'Немає клітковини',
    ageAppropriate: ['1-5', '6-11']
  },
  {
    id: 'white-rice',
    name: 'Білий рис',
    category: 'junk',
    healthScore: 40,
    calories: 130,
    image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Високий глікемічний індекс',
    ageAppropriate: ['1-5', '6-11']
  },
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
  fats: {
    name: 'Корисні жири',
    color: '#94D82D',
    icon: '🥑'
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
