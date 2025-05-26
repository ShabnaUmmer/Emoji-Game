import './index.css'

const NavBar = ({score, topScore, showScores}) => (
  <nav className="nav-container">
    <div className="nav-logo">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
        alt="emoji logo"
        className="emoji-logo"
      />
      <h1>Emoji Game</h1>
    </div>
    {showScores && (
      <div className="nav-elements">
        <p className="score">Score: {score}</p>
        <p className="score score-2">Top Score: {topScore}</p>
      </div>
    )}
  </nav>
)

export default NavBar
