import React from 'react';
import style from './App.module.css';
import FormularioProduto from '../FormularioProduto/FormularioProduto.jsx';
import ListaEstoque from '../ListaEstoque/ListaEstoque.jsx';
import AlertaEstoqueBaixo from '../AlertaEstoqueBaixo/AlertaEstoqueBaixo.jsx';

function App() {
    const [produtos, setProdutos] = React.useState([]);
    const [quantidade, setQuantidade] = React.useState(0);
    
    // criando função para adicionar produtos
    function adicionarProduto(produto) {
        setProdutos([...produtos, produto]);
    }

    // criando a função para comprar
    function comprar() {
        setQuantidade(quantidade + 1);
    }

    // criando a função para vender
    function vender() {
        setQuantidade(quantidade - 1);
    }

    return (
        <>
            <div className={style.aplicativo}>
                <h1 className={style.titulo}>Gerenciador de Estoque</h1>
                <h2 className={style.caixa}>Caixa: </h2>
                <FormularioProduto onAdd={comprar} />
                <div>
                    <ListaEstoque onAddQuant={comprar} onSubQuant={vender}/>
                    <AlertaEstoqueBaixo />
                </div>
            </div>
        </>
    );
}

export default App;
