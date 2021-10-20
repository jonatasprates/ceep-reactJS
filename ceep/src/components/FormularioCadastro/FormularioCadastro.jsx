import React, { Component } from "react";
import "../FormularioCadastro/estilo.css"

class FormularioCadastro extends Component {

    constructor(){
        super();
        this.titulo ="";
    }

    handlerMudancaTitulo(evento) {
        this.titulo = evento.target.value;
        console.log(this.titulo)
    }

    render() {
        return (
            <form className="form-cadastro">
                <input 
                    type="text" 
                    className="form-cadastro_input" 
                    placeholder="Título" 
                    name={this.titulo}
                    onChange={this.handlerMudancaTitulo}
                />
                <textarea className="form-cadastro_input" rows={15} placeholder="Escreva sua nota..."></textarea>
                <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
            </form>
        );
    }

}

export default FormularioCadastro;