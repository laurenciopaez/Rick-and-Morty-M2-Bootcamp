import React from "react";
import Font from '../styles/font.module.css';
import style from '../styles/div.module.css';
import input from '../styles/input.module.css';
import boton from '../styles/button.module.css';
import {Link} from "react-router-dom"

class Comentarios extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            lastname: "",
            mail: "",
            errors:{
                name: "",
                lastname: "",
                mail: "",
            },
            comment: "",
            disabled: true,
        };

        this.handleChange = this.handleChange.bind(this);
    }
/* 
    validateEmail(value) {
        var emailPatter = /\S+@\S+\.\S+/;

        if (!emailPatter.test(value)){
            this.setState({
                errors: "Debe ser un mail",
            })
        } else {
            this.setState({
                errors: "",
            })
        }
    } */

    validarForm(errors){
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false));
        if (valid) {
            this.setState({
                disabled:false
            })
        } else {
            this.setState({
                disabled: true
            })
        }
    }

    handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        // const {name, value} = e.target;

        let errors = this.state.errors;

        switch(name){
            case "name":
                errors.name = value.length < 3
                ? "Nombre debe tener al menos 3 caracters "
                : "";
                break;
            case "lastname":
                errors.lastname = value.length < 3 
                ? "Apellido debe tener al menos 3 caracteres" 
                : "";
                break;
            case "mail":
                //this.validateEmail(this.state.mail);
                var emailPattern = /\S+@\S+\.\S+/; // Expresion Regular para validar Emails.
                errors.mail = emailPattern.test(value)
                  ? ""
                  : "El usuario debe ser un email";
                break;
            default:
                break;
        }

        this.setState({
            [name]: value,
            errors,
        });

        this.validarForm(this.state.errors);
    }


    render()  {
        return( 
            <div className={style.fondo}>
                <div className={style.return}>
                    <button className={boton.button_85}>
                    <Link to='/' className={Font.estilo_link}>Home</Link>
                    </button>
                </div>
                <div className={style.aboutDiv}>
                    <h1 className={Font.h1}>Seccion de comentarios</h1>
                    <form className={style.aboutDiv2}>
                        <input name="name" type="name" value={this.state.name} onChange={this.handleChange} className={input.input_comment} placeholder="Nombre"/>
                        {!this.state.errors.name ? null : <div>{this.state.errors.name}</div>}

                        <input name="lastname" type="name" value={this.state.lastname} onChange={this.handleChange} className={input.input_comment} placeholder="Apellido" />
                        {!this.state.errors.lastname ? null : <div>{this.state.errors.lastname}</div>}

                        <input name="mail" type="name" value={this.state.mail} onChange={this.handleChange} className={input.input_comment} placeholder="ejemplo@gmail.com" />
                        {!this.state.errors.mail ? null : <div>{this.state.errors.mail}</div>}

                        <input name="comment" type="text" value={this.state.comment} onChange={this.handleChange} className={input.input_comment} placeholder="Su comentario aqui" />

                        
                        <input type="submit" value="Submit" className={boton.button_85}/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Comentarios;