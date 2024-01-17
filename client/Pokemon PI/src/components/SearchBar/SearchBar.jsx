import { useState } from 'react';
import style from './SearchBar.module.css';
import { FaSearch } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { getSearchName, orderPokemons } from '../../redux/actions';
import { NavLink } from 'react-router-dom';



const SearchBar = ({setCurrentPage}) => {

    const dispatch = useDispatch();
    const [searchName, setSearchName] = useState('');
    const [ordePoke, setorderPoke] = useState('');
    
    const handleSearch = (event) => {
        event.preventDefault();
        dispatch(getSearchName(searchName))
        setSearchName(''); 
        setCurrentPage(1)
    }
     
    const handlerInput = (event) => {
        setSearchName(event.target.value);
        
    }


    const handleOrder = (event) => {
        setorderPoke(event.target.value);
        dispatch(orderPokemons(event.target.value))
        setCurrentPage(1)
    }
    
    

    return (
        <>
            <form className={style.conteiner} onSubmit={handleSearch}>
                <input type="text" placeholder='Find your pokemon' className={style.inputTex} value={searchName} onChange={handlerInput}/>
                <button className={style.BtnSearch} type='submit'>
                    <FaSearch/>
                    Search
                </button>
                <select onChange={handleOrder} className={style.selec} value={ordePoke}>
                    <option value="All" hidden>Order</option>
                    <option value="A">Ascending</option>
                    <option value="Z">Descending</option>
                </select>
                <select onChange={handleOrder} className={style.selec} value={ordePoke}>
                    <option value="attck" hidden>Attack</option>
                    <option value="more">More</option>
                    <option value="less">Less</option>
                </select>
                <NavLink to={'/create'} className={style.linked}>                  
                    <button className={style.BtnSearch}>
                            Create-Pokemon
                    </button>
                </NavLink>
            </form>  
        </>
    )
}

export default SearchBar;