import style from './ListaEstoque.module.css';
import ItemEstoque from '../ItemEstoque/ItemEstoque.jsx';

function ListaEstoque() {
    return (
        <>
            <div className={style.listaEstoque}>
                <h2>Lista de Produtos</h2>
                <ul>
                    <ItemEstoque className={style.produtoItem} />
                </ul>
            </div>
        </>
    )
}

export default ListaEstoque;