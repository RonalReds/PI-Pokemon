import style from "./PokemonCard.module.css";
import {Link} from "react-router-dom"

const Pokemon = ({image, name, types, id}) => {

    const type =  types && types.map((t)=> t.name[0].toUpperCase() + t.name.slice(1))
  const typea = type && type.join(' & ')
  
    return (
        <div key={id} className={style.CardContainer}>
            <Link to={`/detail/${id}`}>
                <img src={image} alt={name} className={style.CardImage} />
            </Link>
                <span className={style.titleName}>{name}</span>   
                <span className={style.titleType}>{/* types?.join('/') */typea}</span>   
        </div>
        
    )
}

export default Pokemon;