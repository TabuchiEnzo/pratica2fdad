import style from './ItemEstoque.module.css';
function ItemEstoque() {
    return (
        <>
            <li className={style.produtoItem}>
                <div className={style.nomeProduto}></div>
                <div className={style.quantidadeProduto}></div>
                <div className={style.valorProduto}></div>
                <div className={style.botoesAcoes}>
                    <button className={style.botaoComprar}>+</button>
                    <button className={style.botaoVender}>-</button>
                </div>
            </li>
        </>
    )
}

export default ItemEstoque;