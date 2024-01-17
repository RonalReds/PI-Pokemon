import style from "./PokemonCard.module.css";
import {Link} from "react-router-dom"

const Pokemon = ({image, name, types, id}) => {

  
    return (
        <div className={style.CardContainer}>
            <Link to={`/detail/${id}`}>
                <img src={image} alt={name} className={style.CardImage} />
            </Link>
                <span className={style.titleName}>{name}</span>   
                <span className={style.titleType}>{types.join('/')}</span>   
        </div>
        
    )
}

export default Pokemon;