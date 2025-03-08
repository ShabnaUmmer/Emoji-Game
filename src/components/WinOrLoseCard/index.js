// Write your code here.

import './index.css'

const WinOrLose = ({result, score, onPlayAgain}) => {
  const imageUrl =
    result === 'Won'
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <>
      <div className="result-card">
        <div className="score-container">
          <h1 className="result-text">
            {result === 'Won' ? 'You Won!' : 'You Lose'}
          </h1>
          <p className="best-score">Best Score</p>
          <p className="score-text">{score}/12</p>
          <button className="play-again-button" onClick={onPlayAgain}>
            Play Again
          </button>
        </div>
        <img src={imageUrl} alt="win or lose" className="result-image" />
      </div>
    </>
  )
}

export default WinOrLose
