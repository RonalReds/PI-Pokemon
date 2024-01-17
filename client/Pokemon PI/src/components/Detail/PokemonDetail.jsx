import axios from "axios";
import style from "./Detail.module.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";





const PokemonDetail = () => {
    const {id} = useParams()
    const [pokemon, setPokemon] = useState({});
    
    

    useEffect( () => {
        axios(`http://localhost:3001/pokemons/${id}`)
          .then(
              ({ data }) => {
                 
              if (data[0].id) {
                setPokemon(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setPokemon({});
    }, [id])
    
    return (
        <div className={style.containerDetail}>
            <section className={style.containerSection}>
                <div className={style.imageContainer}>
                    <img src={pokemon[0]?.image} alt={pokemon[0]?.name} className={style.imageDetail} />
                    <section>
                        {pokemon[0]?.types.map((type) => <span className={style.tag} key={pokemon[0]?.id}>{type}</span>)}
                    </section>
                </div>
                <div className={style.data}>
                <h2 className={style.title}>{pokemon[0]?.name} ({pokemon[0]?.id})</h2>
                    <h3 className={style.titlSection}>Skills</h3>
                    <div className={style.skills}>
                        <section>
                            <span className={style.point}>{pokemon[0]?.life}</span>
                            <span>Life</span>
                        </section>
                        <section>
                            <span className={style.point}>{pokemon[0]?.attack}</span>
                            <span>Attack</span>
                        </section>
                        <section>
                            <span className={style.point}>{pokemon[0]?.defense}</span>
                            <span>Defense</span>
                        </section>
                        <section>
                            <span className={style.point}>{pokemon[0]?.speed}</span>
                            <span>Speed</span>
                        </section>
                        <section>
                            <span className={style.point}>{pokemon[0]?.height}</span>
                            <span>Height</span>
                        </section>
                        <section>
                            <span className={style.point}>{pokemon[0]?.weight}</span>
                            <span>Weight</span>
                        </section>
                    </div>
                </div>           
            </section>
            <Link to={'/home'} className={style.linked}>««Go Home</Link>
        </div>
    )
}


export default PokemonDetail;