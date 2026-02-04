# 🥗 Healthy Food Game / Гра про здорове харчування

**[English](#english) | [Українська](#українська)**

---

<a name="english"></a>
## 🇬🇧 English

An educational game for grades 1-11 where children learn to choose healthy food in a fun, interactive way.

### 📋 Project Description

Interactive web game that helps children:
- Distinguish between healthy and unhealthy foods
- Create balanced meals
- Understand the importance of dietary variety
- Learn to control sugar and calorie intake

### 🎮 Game Features

#### Two difficulty levels:
- **Grades 1-5**: Simple tasks with bright, colorful images
- **Grades 6-11**: Complex tasks with nutrition analysis and calorie counting

#### Various scenarios:
- Packing a healthy school breakfast
- Meal planning for athletes
- Sugar consumption control
- Brain food for better concentration
- Exam preparation nutrition

#### Scoring system:
- Instant feedback
- Detailed choice evaluation
- In-game hints
- Star rating system (0-5)

### 🌍 Internationalization

The game supports two languages:
- 🇺🇦 Ukrainian
- 🇬🇧 English

Language can be switched in-game and is saved to localStorage.

### 🚀 Quick Start

#### Install dependencies:
```bash
npm install
```

#### Run in development mode:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

#### Build for production:
```bash
npm run build
```

### 📁 Project Structure

```
healthy-food-game/
├── src/
│   ├── components/      # React components
│   ├── data/           # Game data
│   │   ├── products.js     # Product database
│   │   └── scenarios.js    # Game scenarios
│   ├── utils/          # Utility functions
│   │   └── gameLogic.js    # Scoring logic
│   ├── hooks/          # Custom hooks
│   ├── i18n.js         # Translations (EN/UK)
│   ├── App.js          # Main component
│   ├── App.css         # App styles
│   └── index.js        # Entry point
├── public/             # Static files
│   └── locales/        # Translation files
└── package.json        # Project config
```

### 🛠️ Tech Stack

- **React 19** - UI framework
- **Tailwind CSS** - styling
- **i18next** - internationalization
- **JavaScript ES6+** - game logic

### 📊 Product Database

The database contains 70+ products across categories:
- 🍎 Fruits (10 products)
- 🥕 Vegetables (7 products)
- 🥛 Dairy (5 products)
- 🍞 Grains (10 products)
- 🍗 Protein foods (12 products)
- 🥑 Fats & oils (7 products)
- 🍔 Junk food (20+ products)

Each product has:
- Name in Ukrainian/English
- Health score (0-100)
- Calorie content
- Image URL
- Description
- Age-appropriate flags

### 🎯 Game Scenarios

Total 8 scenarios:
- 3 for younger grades (easy)
- 5 for older grades (medium & hard)

Each scenario has:
- Clear objective
- Scoring rules
- Hints
- Limits (product count, calories, sugar)

### 🧮 Scoring System

The game evaluates:
1. **Product healthiness** (healthScore)
2. **Diet balance** (different categories)
3. **No junk food**
4. **Limit compliance** (calories, sugar)
5. **Selection variety**

Grades:
- **90-100%**: Excellent! 🌟
- **75-89%**: Good! 😊
- **60-74%**: Not bad 🤔
- **<60%**: Try again 😕

### 🔄 Future Development

#### Planned features:
- [ ] Achievement system
- [ ] Progress saving
- [ ] Multiplayer (compete with friends)
- [ ] More products and scenarios
- [ ] Product info cards
- [ ] Mini-games (memory, quizzes)
- [ ] Progress statistics
- [ ] Parental controls
- [ ] Export results for teachers

#### Possible improvements:
- Better mobile responsiveness
- Sound effects
- Transition animations
- Dark theme
- More languages

### 👨‍💻 Development

#### Adding new products:
Edit `src/data/products.js`:

```javascript
{
  id: 'unique-id',
  name: 'Product name',
  category: 'category',
  healthScore: 0-100,
  calories: number,
  image: 'https://...',
  description: 'Description',
  ageAppropriate: ['1-5', '6-11']
}
```

#### Adding new scenarios:
Edit `src/data/scenarios.js`:

```javascript
{
  id: 'unique-id',
  title: 'Scenario title',
  description: 'Description',
  ageGroup: '1-5' or '6-11',
  difficulty: 'easy' | 'medium' | 'hard',
  goals: { /* rules */ },
  scoring: { /* points */ }
}
```

### 📝 License

Project created for educational purposes.

### 🤝 Contributing

Suggestions and improvements are welcome! Create issues and pull requests.

### 📧 Contacts

For questions and suggestions, use GitHub issues.

---

<a name="українська"></a>
## 🇺🇦 Українська

Освітня гра для дітей 1-11 класів, де вони вчаться обирати здорову їжу в ігровій формі.

### 📋 Опис проєкту

Інтерактивна веб-гра, яка допомагає дітям:
- Розрізняти корисні та шкідливі продукти
- Складати збалансований раціон
- Розуміти важливість різноманітності в харчуванні
- Вчитися контролювати споживання цукру та калорій

### 🎮 Особливості гри

#### Два рівні складності:
- **1-5 класи**: прості завдання з яскравими картинками
- **6-11 класи**: складніші завдання з аналізом БЖУ та калорій

#### Різноманітні сценарії:
- Збір сніданку для школи
- Раціон для спортсмена
- Контроль споживання цукру
- Їжа для покращення концентрації
- Підготовка до іспиту

#### Система оцінювання:
- Миттєвий зворотний зв'язок
- Детальна оцінка вибору
- Підказки під час гри
- Система зірок (0-5)

### 🌍 Багатомовність

Гра підтримує дві мови:
- 🇺🇦 Українська
- 🇬🇧 Англійська

Мову можна перемикати прямо в грі, вибір зберігається в localStorage.

### 🚀 Швидкий старт

#### Встановлення залежностей:
```bash
npm install
```

#### Запуск в режимі розробки:
```bash
npm start
```

Відкрийте [http://localhost:3000](http://localhost:3000) в браузері.

#### Збірка для продакшену:
```bash
npm run build
```

### 📁 Структура проекту

```
healthy-food-game/
├── src/
│   ├── components/      # React компоненти
│   ├── data/           # Дані гри
│   │   ├── products.js     # База продуктів
│   │   └── scenarios.js    # Ігрові сценарії
│   ├── utils/          # Допоміжні функції
│   │   └── gameLogic.js    # Логіка оцінювання
│   ├── hooks/          # Користувацькі хуки
│   ├── i18n.js         # Переклади (EN/UK)
│   ├── App.js          # Головний компонент
│   ├── App.css         # Стилі додатку
│   └── index.js        # Точка входу
├── public/             # Статичні файли
│   └── locales/        # Файли перекладів
└── package.json        # Конфігурація проекту
```

### 🛠️ Технології

- **React 19** - UI фреймворк
- **Tailwind CSS** - стилізація
- **i18next** - інтернаціоналізація
- **JavaScript ES6+** - логіка гри

### 📊 База даних продуктів

База містить 70+ продуктів, розподілених по категоріях:
- 🍎 Фрукти (10 продуктів)
- 🥕 Овочі (7 продуктів)
- 🥛 Молочні продукти (5 продуктів)
- 🍞 Зернові (10 продуктів)
- 🍗 Білкові продукти (12 продуктів)
- 🥑 Жири та олії (7 продуктів)
- 🍔 Шкідливі продукти (20+ продуктів)

Кожен продукт має:
- Назву українською/англійською
- Оцінку корисності (0-100)
- Калорійність
- URL зображення
- Опис властивостей
- Прапорці для вікових груп

### 🎯 Ігрові сценарії

Всього 8 сценаріїв:
- 3 для молодших класів (легкі)
- 5 для старших класів (середні та складні)

Кожен сценарій має:
- Чітку мету
- Правила оцінювання
- Підказки
- Обмеження (кількість продуктів, калорії, цукор)

### 🧮 Система оцінювання

Гра оцінює:
1. **Корисність продуктів** (healthScore)
2. **Збалансованість раціону** (різні категорії)
3. **Відсутність шкідливих продуктів**
4. **Дотримання обмежень** (калорії, цукор)
5. **Різноманітність вибору**

Оцінки:
- **90-100%**: Відмінно! 🌟
- **75-89%**: Добре! 😊
- **60-74%**: Непогано 🤔
- **<60%**: Спробуй ще 😕

### 🔄 Подальший розвиток

### Заплановані функції:
- [ ] Система досягнень та нагород
- [ ] Збереження прогресу
- [ ] Мультиплеєр (змагання з друзями)
- [ ] Більше продуктів та сценаріїв
- [ ] Інформаційні картки про продукти
- [ ] Міні-ігри (мемо, вікторини)
- [ ] Статистика прогресу
- [ ] Батьківський контроль
- [ ] Експорт результатів для вчителів

### Можливі покращення:
- Адаптивний дизайн для мобільних
- Звукові ефекти
- Анімації переходів
- Темна тема
- Інші мови

### 👨‍💻 Розробка

### Правила розробки:
1. Не переименовувати існуючі функції без причини
2. Розширювати існуючі функції замість створення нових
3. Зберігати єдиний стиль коду
4. Додавати докстрінги до функцій
5. Мінімум дублювання коду

### Додавання нових продуктів:
Відредагуйте `src/data/products.js`:

```javascript
{
  id: 'unique-id',
  name: 'Назва українською',
  category: 'категорія',
  healthScore: 0-100,
  calories: число,
  image: 'https://...',
  description: 'Опис',
  ageAppropriate: ['1-5', '6-11']
}
```

### Додавання нових сценаріїв:
Відредагуйте `src/data/scenarios.js`:

```javascript
{
  id: 'unique-id',
  title: 'Назва завдання',
  description: 'Опис',
  ageGroup: '1-5' або '6-11',
  difficulty: 'easy' | 'medium' | 'hard',
  goals: { /* правила */ },
  scoring: { /* бали */ }
}
```

### 📝 Ліцензія

Проєкт створено для освітніх цілей.

### 🤝 Внесок

Вітаються пропозиції та покращення! Створюйте issues та pull requests.

### 📧 Контакти

Для питань та пропозицій звертайтесь через GitHub issues.

---

**Створено з ❤️ для здоров'я дітей України / Created with ❤️ for the health of Ukrainian children**
