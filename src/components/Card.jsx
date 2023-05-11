 import style from '../styles/div.module.css';
 import boton from '../styles/button.module.css';

 
 const Card = ({id, name, status, species, gender, origin, image, onClose}) => {
   return (
      <div className={style.griditem}>
         <div className={style.contenedor1}>
            <img src={image} alt="" /> 
         </div>
         <div className={style.contenedor2}>
            <h2 className={style.contenedor2_h2}>Name: {name}</h2>
            <h2 className={style.contenedor2_h2}>Status: {status}</h2>
            <h2 className={style.contenedor2_h2}>Species: {species}</h2>
            <h2 className={style.contenedor2_h2}>Gender: {gender}</h2>
            <h2 className={style.contenedor2_h2}>Origin: {origin}</h2>
         </div>
         <div className={style.contenedor3}>
            <button onClick={onClose} className={boton.button_85}>Cerrar</button>
         </div>
         </div>
   );
};

export default Card