import ImgPokemon from './pokemon.svg';
import style from './NavBar.module.css';
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { useEffect, useState } from 'react';

const NavBar = () => {
    const [tema, setTema] = useState('claro');

    const handleChange = (event) => setTema(event.target.checked ? 'oscuro' : 'claro')

    useEffect(() => {
        document.body.setAttribute('data-tema', tema)
    }, [tema])

    return (
        <nav>
            <img src={ImgPokemon} alt="Pokemon" className={style.imgLogo} />
            <div className={style.container}>
                <FaSun />
                <label className={style.labelContent}>
                    <input type="checkbox" className={style.check} onChange={handleChange} hidden/>
                    <span className={style.slider}></span>
                </label>
                <FaMoon/>
            </div>
       </nav>
    )
}


export default NavBar;