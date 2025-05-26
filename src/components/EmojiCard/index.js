// Write your code here.
import './index.css'

const EmojiCard = ({emoji, onClick}) => (
  <>
    <button type="button" className="emoji-card" onClick={onClick}>
      <img src={emoji.emojiUrl} alt={emoji.emojiName} className="emoji-image" />
    </button>
  </>
)
export default EmojiCard
