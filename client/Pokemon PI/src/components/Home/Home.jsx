import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { showPokemons } from "../../redux/actions";
import style from "./Home.module.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import SearchBar from "../SearchBar/SearchBar";
import Pokemon from "../PokemonCard/Pokemon";



const Home = () => {
    const pokemons = useSelector(state => state.pokemons)
    const dispatch = useDispatch();
   
    
    const [QPokemos, setQPokemons] = useState(12);
    const [currentPage, setCurrentPage] = useState(1)
    
    useEffect( () => {
        dispatch(showPokemons()); 
    }, [])

    const totalData = currentPage * QPokemos;
    const intialData = totalData - QPokemos;
    const nPokemons = pokemons.slice(intialData, totalData)
    const nPage = Math.ceil(pokemons.length / QPokemos);

    const next = () => {
        if (currentPage !== nPage) setCurrentPage(currentPage + 1);
    }

    const prev = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1);
    }


    


    return (
        <div>
            <SearchBar setCurrentPage={setCurrentPage} />
                <div className={style.container}>
                {
                    nPokemons.map(poke => <Pokemon
                        key={poke.id}
                        image={poke.image}
                        name={poke.name}
                        id={poke.id}
                        types={poke.types}
                        />)
                    }
            </div>
            <div className={style.paginator}>
                <h3 onClick={prev}><GrPrevious /></h3>
                <span>Page {currentPage}</span>
                <h3 onClick={next}><GrNext /></h3>
            </div>
          
        </div>
    )
}


export default Home;