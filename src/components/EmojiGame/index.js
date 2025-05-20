/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojis: [],
    result: '',
    gameOver: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  handleEmojiClick = id => {
    const {clickedEmojis, score, topScore} = this.state
    const {emojisList} = this.props
    if (clickedEmojis.includes(id)) {
      this.setState({gameOver: true, result: 'Lose'})
      if (score > topScore) {
        this.setState({topScore: score})
      }
    } else {
      const updatedClickedEmojis = [...clickedEmojis, id]
      const newScore = score + 1
      this.setState({gameOver: false, result: 'Won'})
      this.setState({clickedEmojis: updatedClickedEmojis, score: newScore})
      if (newScore === emojisList.length) {
        this.setState({gameOver: true, result: 'Won'})
        if (newScore > topScore) {
          this.setState({topScore: newScore})
        }
      }
    }
  }

  handlePlayAgain = () => {
    this.setState({
      score: 0,
      clickedEmojis: [],
      gameOver: false,
      result: '',
    })
  }

  render() {
    const {score, topScore, gameOver, result} = this.state

    // Shuffle the emojis list
    const shuffledEmojis = this.shuffledEmojisList()

    return (
      <div className="emoji-game-container">
        <NavBar score={score} topScore={topScore} showScores={!gameOver} />
        <div className="emoji-game-body">
          {gameOver ? (
            <WinOrLoseCard
              result={result}
              score={score}
              onPlayAgain={this.handlePlayAgain}
            />
          ) : (
            <ul className="emojis-container">
              {shuffledEmojis.map(emoji => (
                <li key={emoji.id}>
                  <EmojiCard
                    emoji={emoji}
                    onClick={() => this.handleEmojiClick(emoji.id)}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
