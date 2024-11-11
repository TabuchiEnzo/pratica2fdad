import React from 'react';
import style from './FormularioProduto.module.css';

function FormularioProduto(props) {
    return (
        <>
            <div className={style.formulario}>
                <label className={style.label}>Nome do Produto:</label>
                <input className={style.input} type="text" />
                <label className={style.label}>Quantidade:</label>
                <input className={style.input} type="number" />
                <label className={style.label}>Valor Compra:</label>
                <input className={style.input} type="number" />
                <label className={style.label}>Valor Venda:</label>
                <input className={style.input} type="number" />
                <button className={style.botao} onClick={props.onAdd} >Adicionar</button>
            </div>
        </>
    );
}

export default FormularioProduto;
