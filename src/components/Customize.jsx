import "./style.css"
import {useState} from "react"

function Customize({state,emos,setEmos}) {

    const emojiCategories = {
        animals: ['🐶', '🐱', '🐵', '🐰'],
        food: ['🍕', '🍟', '🍔', '🍩'],
        sports: ['⚽', '🏀', '🏈', '🎾'],
        };

    const [categories, setCategories] = useState({ player1: 'animals', player2: 'animals' });
    
    const handleCategoryChange = (player, category) => {
        setCategories({ ...categories, [player]: category });
        setEmos({ ...emos, [player]: '' });
        };

    const handleEmojiChange = (player, emoji) => {
        setEmos({ ...emos, [player]: emoji });
        };

    const selectRandomEmoji = (player) => {
        const allEmojis = Object.values(emojiCategories[categories[player]]);
        const randomEmoji = allEmojis[Math.floor(Math.random() * allEmojis.length)];
        setEmos({ ...emos, [player]: randomEmoji });
        };

    return (
    <div className="container">
      <h1 className="title">Select Your Emoji's</h1>
      <div className="players">
        {[1, 2].map((p) => (
        <div key={p} className="player-box">
            <div>Player {p}</div>
            <div>
                <label>Category :</label>
                <select
                    value={categories[`player${p}`]}
                    onChange={(e) => handleCategoryChange(`player${p}`, e.target.value)}
                >
                    <option value="animals">Animals</option>
                    <option value="food">Food</option>
                    <option value="sports">Sports</option>
                </select>
            </div>
            <div>
                <label>Emoji :</label>
                <select style={{backgroundColor: "transparent", fontSize: "2rem"}}
                    value={emos[`player${p}`]}
                    onChange={(e) => handleEmojiChange(`player${p}`, e.target.value)}
                >
                    {emojiCategories[categories[`player${p}`]].map((e,i) => (
                        <option value={e}>{e}</option>
                    ))}
                </select>
            </div>
            <button className="s-button" onClick={() => selectRandomEmoji(`player${p}`)}>
            Random
            </button>   
        </div>
      ))}
      </div>
      
      <button className="button" onClick={()=>state("proceed")}>Proceed</button>
    </div>
  )
}

export default Customize