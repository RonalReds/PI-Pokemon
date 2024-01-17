import imagePage from './pokemonT.png';
import style from './Landing.module.css';
import { NavLink } from 'react-router-dom';



const LandinPage = () => {
    return (
        <div className={style.container}>
            <img src={imagePage} alt="Title" className={style.image} />
            <NavLink to={'/home'} className={style.link}>
                <h2 className={style.myButton}>Start</h2>
            </NavLink>
        </div>
    )
}

export default LandinPage;