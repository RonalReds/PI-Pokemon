import { useDispatch, useSelector } from "react-redux";
import { useForm } from "./useForm";
import { useEffect } from "react";
import { createPokemon, getPokemonsTypes, showPokemons } from "../../redux/actions";
import { Link} from "react-router-dom";
import style from './PostPokemon.module.css'


const initialForm = {
    name: '',
    image: '',
    life: '',
    defense: '',
    attack: '',
    height: '',
    weight: '',
    speed: '',
    types: ''
};

const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;


    if (!form.name.trim()) {
    errors.name = 'El campo es requerido'
    }else if(!regexName.test(form.name)) {
        errors.name = 'El campo solo acepta letras'
    } 
    if (!form.image) { errors.image = 'Debes agregar una imagen' };
    if (!form.attack) { errors.attack = 'Campo requerido' };
    if (!form.defense) { errors.defense = 'Campo requerido' };
    if (!form.life) { errors.life = 'Campo requerido' };
    if (!form.height) { errors.height = 'Campo requerido' };
    if (!form.weight) { errors.weight = 'Campo requerido' };
    if (!form.speed) { errors.speed = 'Campo requerido' };
    return errors;
};





const NewPokemon = () => {
    const {
        form,
        errors,
        handleChange,
        handleTypes,
        handleSubmit,
        handleBlur } = useForm(initialForm, validationsForm)
    
        
        const dispatch = useDispatch();
    const types = useSelector(state => state.types);
    
     
        
        useEffect(() => {
            dispatch(getPokemonsTypes())
          
        }, [])
    
   
    const createPok = () => {
        handleSubmit();
        const create = dispatch(createPokemon(form))
        dispatch(showPokemons());
        setCurrentPage(1)
        if(create) {alert('Pokemon was created')}
        
    }
    
        
        
    
    return (
            <div className={style.continer}>
                <form onSubmit={(event) => createPok(event)} className={style.containerForm}>
                <h2 className={style.title}>Crea un Pokemon</h2>
                <input
                    type="text"
                    name='name'
                    autoComplete="off"
                    placeholder="Escribe tu nombre"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.name}
                    required
                    className={style.inputs}
                />
                {errors.name && <p className={style.msjValidate}>{errors.name}</p>}
                <input
                    type="text"
                    name='image'
                    placeholder="URL de la imagen"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.image}
                    required
                    className={style.inputs}
                />
                {errors.image && <p className={style.msjValidate}>{errors.image}</p>}
                <input
                    type="number"
                    name='speed'
                    placeholder="speed 1-200"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.speed}
                    required
                    className={style.inputs}
                />
                {errors.speed && <p className={style.msjValidate}>{errors.speed}</p>}
                <input
                    type="number"
                    name='life'
                    placeholder="life 1-200"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.life}
                    required
                    className={style.inputs}
                />
                {errors.life && <p className={style.msjValidate}>{errors.life}</p>}
                <input
                    type="number"
                    name='defense'
                    placeholder="defense 1-250"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.defense}
                    required
                    className={style.inputs}
                />
                {errors.defense && <p className={style.msjValidate}>{errors.defense}</p>}
                <input
                    type="number"
                    name='attack'
                    placeholder="attack 1-190"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.attack}
                    required
                    className={style.inputs}
                />
                {errors.attack && <p className={style.msjValidate}>{errors.attack}</p>}
                <input
                    type="number"
                    name='height'
                    placeholder="height 1-200"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.height}
                    required
                    className={style.inputs}
                />
                {errors.height && <p className={style.msjValidate}>{errors.height}</p>}
                <input
                    type="number"
                    name='weight'
                    placeholder="weight 1-1000"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.weight}
                    required
                    className={style.inputs}
                />
                {errors.weight && <p className={style.msjValidate}>{errors.weight}</p>}
                <select name="types" onChange={handleTypes} className={style.typesSelec}>
                    <option value="All" className={style.options}>Types</option>
                    {types.map((type) => {
                        return (
                            <option key={type.id} value={type.name} className={style.options}>{type.name}</option>
                        )
                    })}
                </select>
            <input type="submit" value='Create' className={style.Btn}/>
            <Link to='/home' className={style.link}>
                <h2>««Go Home</h2>
            </Link>
            </form>
            </div>
            
       )
   

}


export default NewPokemon;