import SearchBar from "../SearchBar/SearchBar";
import imgLetter from '../../assets/letter.png';
import style from './Nav.module.css';
import { useNavigate } from "react-router-dom";

export default function Nav(props) {
    const navigate = useNavigate();
    const {onSearch} = props;

    const handleClick = ()=> {
        navigate('/');
    }

    return(
        <div className={style.container}>
            <div className={style.containLetter} onClick={handleClick}>
                <img src={imgLetter} alt="Rick and Morty" />
            </div>
            <div>
                <SearchBar onSearch={onSearch}/>
            </div>
        </div>
    )

}