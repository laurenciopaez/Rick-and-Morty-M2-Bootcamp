import React from 'react';
import style from '../styles/div.module.css';
import Font from '../styles/font.module.css';
import {Link} from 'react-router-dom';
import boton from '../styles/button.module.css';

class About extends React.Component{
    render(){
        return(
            <div className={style.fondo}>
                <div className={style.return}>
                    <button className={boton.button_85}>
                        <Link to='/' className={Font.estilo_link}>Home</Link>
                    </button>
                </div>
                <div className={style.aboutDiv}>
                    <div className={style.aboutDiv2}>
                        <h1 className={Font.h1}>Welcome to About Page</h1>
                    </div>
                    
                </div>
                <div className={style.aboutDiv}>
                    <div className={style.aboutDiv2}>
                        <p className={Font.p}>Here i should talk about the page. This is made in React. Im practising Routting with this about page. Thanks you!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;