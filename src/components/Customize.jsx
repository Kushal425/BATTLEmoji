import "./style.css"

function Customize({state,emos,setEmos,categos,setCategos}) {

    const emojiCategories = {
        animals: ['🐶', '🐱', '🐵', '🐰'],
        food: ['🍕', '🍟', '🍔', '🍩'],
        sports: ['⚽', '🏀', '🏈', '🎾'],
        };

    const handleCategoryChange = (player, category) => {
        setCategos({ ...categos, [player]: category });
        setEmos({ ...emos, [player]: '' });
        };

    const handleEmojiChange = (player, emoji) => {
        setEmos({ ...emos, [player]: emoji });
        };

    const selectRandomEmoji = (player) => {
        const allEmojis = Object.values(emojiCategories).flat();
        const randomEmoji = allEmojis[Math.floor(Math.random() * allEmojis.length)];
        setEmos({ ...emos, [player]: randomEmoji });
        };

    return (
    <div className="container">
      <h1 className="title">Select Your Emoji's</h1>
      <div className="players">
        {[1, 2].map((p) => (
        <div key={p} className="player-box">
            <h2 >Player {p}</h2>
            <div>
                <label>Category :</label>
                <select>
                    <option value="animals">Animals</option>
                    <option value="food">Food</option>
                    <option value="sports">Sports</option>
                    <option value="nature">Emotions</option>
                </select>
            </div>
            <div>
                <label>Emoji :</label>
                <select>
                    <option value="cat">🐱</option>
                    <option value="dog">🐶</option>
                    <option value="fish">🐟</option>
                    <option value="tiger">🐯</option>
                    <option value="elephant">🐘</option>
                    <option value="lion">🦁</option>
                    <option value="monkey">🐒</option>
                    <option value="panda">🐼</option>
                </select>
            </div>
            <button className="random-button" onClick={() => selectRandomEmoji(`player${p}`)}>
            Select Random Emoji
            </button>   
        </div>
      ))}
      </div>
      
      <button className="button" onClick={()=>state("proceed")}>Proceed</button>
    </div>
  )
}

export default Customize