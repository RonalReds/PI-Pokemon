import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import style from "./Detail.module.css";
import { getPokemonsDetail } from "../../redux/actions"






const PokemonDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const pokeDetail = useSelector(state => state.pokemonsDetail);

    useEffect(() => {
       dispatch(getPokemonsDetail(id))
   },[id])
    
    
    
    return (
        <div className={style.containerDetail}>
            <section className={style.containerSection}>
                <div className={style.imageContainer}>
                    <img src={pokeDetail[0]?.image} className={style.imageDetail} />
                </div>
                <div className={style.data}>
                <h2 className={style.title}>{pokeDetail[0]?.name} ({pokeDetail[0]?.id})</h2>
                    <h3 className={style.titlSection}>Skills</h3>
                    <div className={style.skills}>
                        <section>
                            <span className={style.point}>{pokeDetail[0]?.life}</span>
                            <span>Life</span>
                        </section>
                        <section>
                            <span className={style.point}>{pokeDetail[0]?.attack}</span>
                            <span>Attack</span>
                        </section>
                        <section>
                            <span className={style.point}>{pokeDetail[0]?.defense}</span>
                            <span>Defense</span>
                        </section>
                        <section>
                            <span className={style.point}>{pokeDetail[0]?.speed}</span>
                            <span>Speed</span>
                        </section>
                        <section>
                            <span className={style.point}>{pokeDetail[0]?.height}</span>
                            <span>Height</span>
                        </section>
                        <section>
                            <span className={style.point}>{pokeDetail[0]?.weight}</span>
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








