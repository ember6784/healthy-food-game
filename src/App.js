import React, { useState } from 'react';
import './App.css';
import { scenarios } from './data/scenarios';
import { getShuffledProductsByAge } from './data/products';
import { calculateScore, getHint, formatResult } from './utils/gameLogic';

/**
 * Головний компонент гри про здорове харчування
 */
function App() {
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
    const score = calculateScore(selectedProducts, selectedScenario);
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
            🎮 Смачна Гра 🍎
          </h1>
          <p className="text-xl md:text-2xl text-white font-bold drop-shadow-lg">
            Обирай найкращу їжу та ставай експертом здорового харчування!
          </p>
        </div>

        {!selectedAge ? (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedAge('1-5')}
              className="group bg-gradient-to-br from-yellow-300 to-orange-400 hover:from-yellow-400 hover:to-orange-500 rounded-3xl p-12 shadow-2xl transform hover:scale-105 hover:rotate-2 transition-all duration-300"
            >
              <div className="text-8xl mb-6 animate-bounce">👶</div>
              <h2 className="text-4xl font-black text-white mb-2">1-5 класи</h2>
              <p className="text-xl text-white font-semibold">Прості та веселі завдання!</p>
            </button>

            <button
              onClick={() => setSelectedAge('6-11')}
              className="group bg-gradient-to-br from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 rounded-3xl p-12 shadow-2xl transform hover:scale-105 hover:-rotate-2 transition-all duration-300"
            >
              <div className="text-8xl mb-6 animate-bounce delay-100">🧒</div>
              <h2 className="text-4xl font-black text-white mb-2">6-11 класи</h2>
              <p className="text-xl text-white font-semibold">Цікаві виклики!</p>
            </button>
          </div>
        ) : (
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 animate-slide-up">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-black text-gray-800">Обери місію! 🎯</h2>
              <button
                onClick={() => setSelectedAge(null)}
                className="bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded-full font-bold transition transform hover:scale-110"
              >
                ← Назад
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
                        <h3 className="text-2xl font-black text-gray-800 mb-2">{scenario.title}</h3>
                        <p className="text-lg text-gray-700 font-medium mb-3">{scenario.description}</p>
                        <div className="flex gap-3 text-sm font-bold">
                          <span className="bg-white/80 px-3 py-1 rounded-full">
                            📦 {scenario.requiredProducts} продуктів
                          </span>
                          <span className="bg-white/80 px-3 py-1 rounded-full">
                            {scenario.difficulty === 'easy' && '😊 Легко'}
                            {scenario.difficulty === 'medium' && '🤔 Середньо'}
                            {scenario.difficulty === 'hard' && '🧠 Складно'}
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
    const hint = getHint(selectedProducts, selectedScenario);
    const canFinish = selectedProducts.length >= selectedScenario.goals.minProducts;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 p-4">
        <div className="max-w-7xl mx-auto">
          {/* Хедер з корзиною */}
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-6 mb-6 sticky top-4 z-10">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-3xl font-black text-gray-800">{selectedScenario.title}</h2>
                <p className="text-gray-600 font-medium mt-1">{selectedScenario.description}</p>
              </div>
              <button
                onClick={backToMenu}
                className="bg-red-400 hover:bg-red-500 text-white px-6 py-3 rounded-full font-bold transition transform hover:scale-110"
              >
                ✖ Вихід
              </button>
            </div>

            {/* Корзина */}
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 border-4 border-yellow-300">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-black text-gray-800 flex items-center gap-2">
                  🛒 Твоя корзина
                  <span className="bg-white px-4 py-1 rounded-full text-xl">
                    {selectedProducts.length}/{selectedScenario.goals.maxProducts}
                  </span>
                </h3>
                <div className="text-lg font-bold text-gray-700 bg-white px-4 py-2 rounded-full">
                  {hint}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 min-h-[100px] mb-4">
                {selectedProducts.length === 0 ? (
                  <div className="w-full text-center text-gray-400 font-bold text-xl py-8">
                    Почни обирати продукти! 👇
                  </div>
                ) : (
                  selectedProducts.map(product => (
                    <div
                      key={product.id}
                      className="relative group bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all"
                    >
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-24 h-24 object-cover"
                      />
                      <button
                        onClick={() => toggleProduct(product)}
                        className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ✕
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs font-bold px-2 py-1 text-center">
                        {product.name}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {canFinish && (
                <button
                  onClick={finishGame}
                  className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-black text-xl py-4 rounded-2xl shadow-xl transform hover:scale-105 transition-all animate-pulse"
                >
                  ✓ Готово! Перевір мій вибір! 🎉
                </button>
              )}
            </div>
          </div>

          {/* Продукти */}
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8">
            <h3 className="text-3xl font-black mb-6 text-gray-800 text-center">
              Обирай продукти для своєї місії! 🎯
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
                          alt={product.name}
                          className="w-full h-40 object-cover"
                        />
                        {isSelected && (
                          <div className="absolute top-2 right-2 bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center text-2xl animate-bounce">
                            ✓
                          </div>
                        )}
                      </div>
                      <div className="bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-white font-black text-center text-sm">{product.name}</p>
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

  // Рендер результатів
  const renderResults = () => (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300 p-4 md:p-8 animate-gradient">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 animate-scale-in">
          {/* Головна оцінка */}
          <div className="text-center mb-8">
            <div className="text-9xl mb-6 animate-bounce">{result.grade.emoji}</div>
            <h2 className="text-5xl md:text-6xl font-black mb-4" style={{ color: result.grade.color }}>
              {result.grade.grade}
            </h2>
            <p className="text-2xl text-gray-700 font-bold mb-6">{result.grade.message}</p>
            
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
              <div className="text-3xl font-bold mt-2">балів</div>
              <div className="text-xl mt-2 font-bold">{result.percentage}%</div>
            </div>
          </div>

          {/* Відгук */}
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl p-8 mb-6 border-4 border-blue-300">
            <h3 className="text-3xl font-black mb-4 text-gray-800 flex items-center gap-2">
              📝 Що ти обрав:
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {selectedProducts.map(product => (
                <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-20 object-cover"
                  />
                  <p className="text-xs font-bold text-center p-2">{product.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Коментар */}
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-3xl p-8 mb-6 border-4 border-green-300">
            <h3 className="text-2xl font-black mb-4 text-gray-800">💬 Коментар:</h3>
            <div className="whitespace-pre-line text-lg text-gray-700 font-medium leading-relaxed">
              {result.feedback}
            </div>
          </div>

          {/* Детальний аналіз (тільки для 6-11 класів) */}
          {result.analysis && (
            <div className="space-y-6 mb-8">
              {/* Калорії та харчування */}
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-3xl p-8 border-4 border-orange-300">
                <h3 className="text-2xl font-black mb-4 text-gray-800 flex items-center gap-2">
                  📊 Харчова цінність
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-sm text-gray-600 mb-1">Загальна калорійність</div>
                    <div className="text-3xl font-black text-orange-600">{result.analysis.nutritionSummary.totalCalories} ккал</div>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-sm text-gray-600 mb-1">Середньо на продукт</div>
                    <div className="text-3xl font-black text-blue-600">{result.analysis.nutritionSummary.avgCaloriesPerProduct} ккал</div>
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
                    💡 Рекомендації експертів
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
              🔄 Спробувати знову
            </button>
            <button
              onClick={backToMenu}
              className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-black text-xl py-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all"
            >
              🏠 Головне меню
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
    </div>
  );
}

export default App;
