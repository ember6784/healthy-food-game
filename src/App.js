import React, { useState, useEffect } from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import { scenarios } from './data/scenarios';
import { getShuffledProductsByAge } from './data/products';
import { calculateScore, getHint, formatResult } from './utils/gameLogic';

/**
 * Головний компонент гри про здорове харчування
 */

// Мапа ключів сценаріїв для перекладів
const scenarioKeyMap = {
  'breakfast-1': 'breakfast1',
  'snack-1': 'snack1',
  'lunch-1': 'lunch1',
  'athlete-meal': 'athlete',
  'daily-menu': 'daily',
  'sugar-control': 'sugar',
  'brain-food': 'brain',
  'exam-prep': 'exam'
};

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  
  useEffect(() => {
    const handleLanguageChanged = (lng) => {
      setLang(lng);
    };
    i18n.on('languageChanged', handleLanguageChanged);
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);
  
  const language = lang === 'uk' ? 'uk' : 'en';
  
  const toggleLanguage = () => {
    const newLang = language === 'uk' ? 'en' : 'uk';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };
  const [gameState, setGameState] = useState('menu');
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [shuffledProducts, setShuffledProducts] = useState([]);
  const [result, setResult] = useState(null);

  const startGame = (ageGroup, scenario) => {
    setSelectedAge(ageGroup);
    setSelectedScenario(scenario);
    setSelectedProducts([]);
    setResult(null);
    setShuffledProducts(getShuffledProductsByAge(ageGroup));
    setGameState('playing');
  };

  const toggleProduct = (product) => {
    const isSelected = selectedProducts.some(p => p.id === product.id);
    
    if (isSelected) {
      setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
    } else {
      if (selectedProducts.length < selectedScenario.goals.maxProducts) {
        setSelectedProducts([...selectedProducts, product]);
      }
    }
  };

  const finishGame = () => {
    const score = calculateScore(selectedProducts, selectedScenario, t);
    const formattedResult = formatResult(score);
    setResult(formattedResult);
    setGameState('results');
  };

  const backToMenu = () => {
    setGameState('menu');
    setSelectedAge(null);
    setSelectedScenario(null);
    setSelectedProducts([]);
    setResult(null);
  };

  const openAbout = () => {
    setGameState('about');
  };

  const playAgain = () => {
    setSelectedProducts([]);
    setResult(null);
    setShuffledProducts(getShuffledProductsByAge(selectedAge));
    setGameState('playing');
  };

  // Рендер меню
  const renderMenu = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 p-4 md:p-8 animate-gradient">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-8 animate-bounce-slow">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl game-title">
            {t('appTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-white font-bold drop-shadow-lg">
            {t('appSubtitle')}
          </p>
        </div>

        {/* Кнопки Про игру и язык */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={toggleLanguage}
            className="bg-white/90 hover:bg-white text-gray-800 font-bold px-3 py-2 rounded-full shadow-lg transition transform hover:scale-110 text-sm"
            title={t('language')}
          >
            {language === 'uk' ? '🇺🇦 UA' : '🇬🇧 EN'}
          </button>
          <button
            onClick={openAbout}
            className="bg-white/90 hover:bg-white text-gray-800 font-bold px-4 py-2 rounded-full shadow-lg transition transform hover:scale-110"
          >
            {t('aboutGame')}
          </button>
        </div>

        {!selectedAge ? (
          <>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <button
                onClick={() => setSelectedAge('1-5')}
                className="group bg-gradient-to-br from-yellow-300 to-orange-400 hover:from-yellow-400 hover:to-orange-500 rounded-3xl p-12 shadow-2xl transform hover:scale-105 hover:rotate-2 transition-all duration-300"
              >
                <div className="text-8xl mb-6 animate-bounce">👶</div>
                <h2 className="text-4xl font-black text-white mb-2">{t('age1to5')}</h2>
                <p className="text-xl text-white font-semibold">{t('age1to5Desc')}</p>
              </button>

              <button
                onClick={() => setSelectedAge('6-11')}
                className="group bg-gradient-to-br from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 rounded-3xl p-12 shadow-2xl transform hover:scale-105 hover:-rotate-2 transition-all duration-300"
              >
                <div className="text-8xl mb-6 animate-bounce delay-100">🧒</div>
                <h2 className="text-4xl font-black text-white mb-2">{t('age6to11')}</h2>
                <p className="text-xl text-white font-semibold">{t('age6to11Desc')}</p>
              </button>
            </div>

            {/* Дисклеймер на головній сторінці */}
            <div className="max-w-4xl mx-auto mt-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border-2 border-yellow-400 shadow-lg">
                <p className="text-sm text-gray-700 text-center leading-relaxed">
                  {t('disclaimerShort')}
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 animate-slide-up">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-black text-gray-800">{t('selectMission')}</h2>
              <button
                onClick={() => setSelectedAge(null)}
                className="bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded-full font-bold transition transform hover:scale-110"
              >
                {t('back')}
              </button>
            </div>
            
            <div className="grid gap-4">
              {scenarios
                .filter(s => s.ageGroup === selectedAge)
                .map((scenario, index) => (
                  <button
                    key={scenario.id}
                    onClick={() => startGame(selectedAge, scenario)}
                    className="scenario-card bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 hover:from-green-400 hover:via-blue-400 hover:to-purple-400 text-left p-6 rounded-2xl shadow-lg transform hover:scale-102 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-5xl">{index === 0 ? '🍳' : index === 1 ? '🎒' : index === 2 ? '🍱' : '💪'}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-black text-gray-800 mb-2">{t(`scenario_${scenarioKeyMap[scenario.id]}_title`) || scenario.title}</h3>
                        <p className="text-lg text-gray-700 font-medium mb-3">{t(`scenario_${scenarioKeyMap[scenario.id]}_desc`) || scenario.description}</p>
                        <div className="flex gap-3 text-sm font-bold">
                          <span className="bg-white/80 px-3 py-1 rounded-full">
                            📝 {selectedAge === '1-5' ? index + 1 : 3 + index + 1}
                          </span>
                          <span className="bg-white/80 px-3 py-1 rounded-full">
                            {scenario.difficulty === 'easy' && t('difficultyEasy')}
                            {scenario.difficulty === 'medium' && t('difficultyMedium')}
                            {scenario.difficulty === 'hard' && t('difficultyHard')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Рендер гри
  const renderGame = () => {
    const hint = getHint(selectedProducts, selectedScenario, t);
    const canFinish = selectedProducts.length >= selectedScenario.goals.minProducts;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 p-4">
        <div className="max-w-7xl mx-auto">
          {/* Хедер */}
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-4 md:p-6 mb-4">
            <div className="flex justify-between items-center mb-3">
              <div className="flex-1">
                <h2 className="text-xl md:text-3xl font-black text-gray-800">{t(`scenario_${scenarioKeyMap[selectedScenario.id]}_title`) || selectedScenario.title}</h2>
                <p className="text-sm md:text-base text-gray-600 font-medium mt-1 hidden md:block">{t(`scenario_${scenarioKeyMap[selectedScenario.id]}_desc`) || selectedScenario.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleLanguage}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-3 py-2 rounded-full transition transform hover:scale-110 text-sm"
                  title={t('language')}
                >
                  {language === 'uk' ? '🇺🇦' : '🇬🇧'}
                </button>
                <button
                  onClick={backToMenu}
                  className="bg-red-400 hover:bg-red-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-bold transition transform hover:scale-110 text-sm md:text-base"
                >
                  {t('exit')}
                </button>
              </div>
            </div>
          </div>

          {/* Корзина - компактна для мобільних */}
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-4 md:p-6 border-4 border-yellow-300 mb-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-3">
              <h3 className="text-xl md:text-2xl font-black text-gray-800 flex items-center gap-2">
                {t('yourCart')}
                <span className="bg-white px-3 py-1 rounded-full text-lg md:text-xl">
                  {selectedProducts.length}/{selectedScenario.goals.maxProducts}
                </span>
              </h3>
              <div className="text-sm md:text-lg font-bold text-gray-700 bg-white px-3 md:px-4 py-2 rounded-full">
                {t(hint.key, hint.params)}
              </div>
            </div>
            
            {/* Продукти в корзині - менші на мобільному */}
            <div className="flex flex-wrap gap-2 min-h-[60px] md:min-h-[100px] mb-3">
              {selectedProducts.length === 0 ? (
                <div className="w-full text-center text-gray-400 font-bold text-base md:text-xl py-4 md:py-8">
                  {t('startSelecting')}
                </div>
              ) : (
                selectedProducts.map(product => (
                  <div
                    key={product.id}
                    className="relative group bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all"
                  >
                    <img 
                      src={product.image} 
                      alt={t(`product_${product.id}`)}
                      className="w-16 h-16 md:w-20 md:h-20 object-cover"
                    />
                    <button
                      onClick={() => toggleProduct(product)}
                      className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 md:w-8 md:h-8 font-bold shadow-lg text-xs md:text-base"
                    >
                      ✕
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-[10px] md:text-xs font-bold px-1 py-1 text-center truncate">
                      {t(`product_${product.id}`)}
                    </div>
                  </div>
                ))
              )}
            </div>

            {canFinish && (
              <button
                onClick={finishGame}
                className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-black text-lg md:text-xl py-3 md:py-4 rounded-2xl shadow-xl transform hover:scale-105 transition-all"
              >
                {t('ready')}
              </button>
            )}
          </div>

          {/* Продукти */}
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8">
            <h3 className="text-3xl font-black mb-6 text-gray-800 text-center">
              {t('selectProducts')}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {shuffledProducts.map(product => {
                  const isSelected = selectedProducts.some(p => p.id === product.id);
                  const isDisabled = !isSelected && selectedProducts.length >= selectedScenario.goals.maxProducts;

                  return (
                    <button
                      key={product.id}
                      onClick={() => toggleProduct(product)}
                      disabled={isDisabled}
                      className={`
                        product-card group relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300
                        ${isSelected 
                          ? 'ring-4 ring-yellow-400 scale-105 shadow-2xl' 
                          : 'hover:scale-110 hover:shadow-2xl'}
                        ${isDisabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
                      `}
                    >
                      <div className="relative">
                        <img 
                          src={product.image} 
                          alt={t(`product_${product.id}`)}
                          className="w-full h-40 object-cover"
                        />
                        {isSelected && (
                          <div className="absolute top-2 right-2 bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center text-2xl animate-bounce">
                            ✓
                          </div>
                        )}
                      </div>
                      <div className="bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-white font-black text-center text-sm">{t(`product_${product.id}`)}</p>
                      </div>
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Рендер сторінки "Про гру"
  const renderAbout = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 p-4 md:p-8 animate-gradient">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 animate-slide-up">
          {/* Перемикач мови */}
          <div className="absolute top-4 right-4">
            <button
              onClick={toggleLanguage}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-3 py-2 rounded-full shadow-lg transition transform hover:scale-110 text-sm"
              title={t('language')}
            >
              {language === 'uk' ? '🇺🇦 UA' : '🇬🇧 EN'}
            </button>
          </div>

          {/* Заголовок */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎮</div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              {t('aboutTitle')}
            </h2>
          </div>

          {/* Опис гри */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6 border-4 border-green-300">
              <h3 className="text-2xl font-black mb-4 text-gray-800 flex items-center gap-2">
                {t('gameGoal')}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('gameGoalText')}
              </p>
            </div>

            {/* Дисклеймер */}
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 border-4 border-yellow-400">
              <h3 className="text-2xl font-black mb-4 text-gray-800 flex items-center gap-2">
                {t('disclaimer')}
              </h3>
              <div className="space-y-3 text-gray-700">
                <p className="text-lg leading-relaxed">
                  {t('disclaimerText1')}
                </p>
                <p className="text-lg leading-relaxed">
                  {t('disclaimerText2')}
                </p>
                <p className="text-lg leading-relaxed">
                  {t('disclaimerText3')}
                </p>
              </div>
            </div>

            {/* Конфіденційність */}
            <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-2xl p-6 border-4 border-teal-300">
              <h3 className="text-2xl font-black mb-4 text-gray-800 flex items-center gap-2">
                {t('privacy')}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('privacyText')}
              </p>
            </div>

            {/* Результати та призи */}
            <div className="bg-gradient-to-r from-indigo-100 to-blue-100 rounded-2xl p-6 border-4 border-indigo-300">
              <h3 className="text-2xl font-black mb-4 text-gray-800 flex items-center gap-2">
                {t('resultsAndPrizes')}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('resultsAndPrizesText')}
              </p>
            </div>

            {/* Контент */}
            <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-2xl p-6 border-4 border-emerald-300">
              <h3 className="text-2xl font-black mb-4 text-gray-800 flex items-center gap-2">
                {t('content')}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('contentText')}
              </p>
            </div>

            {/* Про розробника */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-4 border-purple-300">
              <h3 className="text-2xl font-black mb-4 text-gray-800 flex items-center gap-2">
                {t('aboutDeveloper')}
              </h3>
              <div className="space-y-3 text-lg text-gray-700">
                <p><strong>{t('developer')}</strong> {t('developerName')}</p>
                <p><strong>{t('ideaInitiator')}</strong> {t('ideaInitiatorName')}</p>
                <p>
                  <strong>{t('contact')}:</strong>{' '}
                  <a 
                    href={`mailto:${t('developerEmail')}`}
                    className="text-purple-600 hover:text-purple-800 underline"
                  >
                    {t('developerEmail')}
                  </a>
                </p>
                <p className="leading-relaxed mt-4">
                  {t('volunteerText')}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t-2 border-purple-200">
                <p className="text-base text-gray-600 leading-relaxed mb-3">
                  {t('openSource')}
                </p>
                <a 
                  href="https://github.com/ember6784/healthy-food-game" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-purple-600 transition"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="font-semibold">{t('githubRepo')}</span>
                </a>
              </div>
              <div className="mt-6 pt-4 border-t-2 border-purple-200 text-gray-600">
                <p><strong>{t('version')}</strong> 1.0</p>
                <p><strong>{t('year')}</strong> 2026</p>
              </div>
            </div>
          </div>

          {/* Кнопка назад */}
          <div className="mt-8 text-center">
            <button
              onClick={backToMenu}
              className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-black text-xl py-4 px-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all"
            >
              {t('mainMenu')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Рендер результатів
  const renderResults = () => (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300 p-4 md:p-8 animate-gradient">
      <div className="max-w-4xl mx-auto">
        {/* Перемикач мови */}
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleLanguage}
            className="bg-white/90 hover:bg-white text-gray-800 font-bold px-3 py-2 rounded-full shadow-lg transition transform hover:scale-110 text-sm"
            title={t('language')}
          >
            {language === 'uk' ? '🇺🇦 UA' : '🇬🇧 EN'}
          </button>
        </div>
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 animate-scale-in">
          {/* Головна оцінка */}
          <div className="text-center mb-8">
            <div className="text-9xl mb-6 animate-bounce">{result.grade.emoji}</div>
            <h2 className="text-5xl md:text-6xl font-black mb-4" style={{ color: result.grade.color }}>
              {t(result.grade.gradeKey)}
            </h2>
            <p className="text-2xl text-gray-700 font-bold mb-6">{t(result.grade.messageKey)}</p>
            
            {/* Зірки */}
            <div className="flex justify-center gap-3 mb-6">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={`text-6xl transition-all duration-300 ${i < result.stars ? 'animate-star' : ''}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {i < result.stars ? '⭐' : '☆'}
                </span>
              ))}
            </div>

            {/* Бал */}
            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all">
              <div className="text-6xl font-black">{result.displayScore}</div>
              <div className="text-3xl font-bold mt-2">{t('points')}</div>
              <div className="text-xl mt-2 font-bold">{result.percentage}%</div>
            </div>
          </div>

          {/* Відгук */}
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl p-8 mb-6 border-4 border-blue-300">
            <h3 className="text-3xl font-black mb-4 text-gray-800 flex items-center gap-2">
              {t('youSelected')}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {selectedProducts.map(product => (
                <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={product.image} 
                    alt={t(`product_${product.id}`)}
                    className="w-full h-20 object-cover"
                  />
                  <p className="text-xs font-bold text-center p-2">{t(`product_${product.id}`)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Коментар */}
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-3xl p-8 mb-6 border-4 border-green-300">
            <h3 className="text-2xl font-black mb-4 text-gray-800">{t('comment')}</h3>
            <div className="whitespace-pre-line text-lg text-gray-700 font-medium leading-relaxed">
              {result.feedbackKeys.map((fb, i) => <div key={i}>{t(fb.key, fb.params)}</div>)}
            </div>
          </div>

          {/* Детальний аналіз (тільки для 6-11 класів) */}
          {result.analysis && (
            <div className="space-y-6 mb-8">
              {/* Калорії та харчування */}
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-3xl p-8 border-4 border-orange-300">
                <h3 className="text-2xl font-black mb-4 text-gray-800 flex items-center gap-2">
                  {t('nutritionValue')}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-sm text-gray-600 mb-1">{t('totalCalories')}</div>
                    <div className="text-3xl font-black text-orange-600">{result.analysis.nutritionSummary.totalCalories} {t('caloriesUnit')}</div>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-sm text-gray-600 mb-1">{t('avgPerProduct')}</div>
                    <div className="text-3xl font-black text-blue-600">{result.analysis.nutritionSummary.avgCaloriesPerProduct} {t('caloriesUnit')}</div>
                  </div>
                </div>
                <div className="mt-4 text-lg font-bold text-gray-700 bg-white rounded-xl p-4">
                  {result.analysis.nutritionSummary.calorieStatus}
                </div>
              </div>

              {/* Детальне пояснення */}
              {result.analysis.detailedExplanation.map((section, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 border-4 border-purple-300">
                  <h3 className="text-2xl font-black mb-4 text-gray-800">{section.title}</h3>
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-white rounded-xl p-4 text-gray-700 font-medium">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Рекомендації */}
              {result.analysis.recommendations.length > 0 && (
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl p-8 border-4 border-blue-300">
                  <h3 className="text-2xl font-black mb-4 text-gray-800 flex items-center gap-2">
                    {t('recommendations')}
                  </h3>
                  <div className="space-y-3">
                    {result.analysis.recommendations.map((rec, index) => (
                      <div key={index} className="bg-white rounded-xl p-4 flex items-start gap-3">
                        <span className="text-2xl">👉</span>
                        <p className="text-gray-700 font-medium flex-1">{rec}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Кнопки */}
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={playAgain}
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-black text-xl py-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all"
            >
              {t('playAgain')}
            </button>
            <button
              onClick={backToMenu}
              className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-black text-xl py-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all"
            >
              {t('mainMenu')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="App">
      {gameState === 'menu' && renderMenu()}
      {gameState === 'playing' && renderGame()}
      {gameState === 'results' && renderResults()}
      {gameState === 'about' && renderAbout()}
    </div>
  );
}

export default App;
