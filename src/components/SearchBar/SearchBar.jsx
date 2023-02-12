import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar ({ onSearch }) {
  const [character, setCharacter] = useState("");

  const handleChange = (e) => {
    setCharacter(e.target.value);
  

    if(!character.includes(e.target.name)) {
      setCharacter({
          ...character,
          character: [...character, e.target.name],
      })
    }
    else {
      setCharacter({
          ...character,
          character: character.filter(e => e !== e.target.name)
      })
    }
  }

  return (
    <>
      <input 
        type='search' 
        placeholder= "  Search character" 
        className={style.border}
        onChange={handleChange}
        value={character}
      />
      <button 
        onClick={() => onSearch(character) } 
        className={style.btn}>
          Add
      </button>
    </>
  )
}
