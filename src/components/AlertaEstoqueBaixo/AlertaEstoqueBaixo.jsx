import style from './AlertaEstoqueBaixo.module.css';
function AlertaEstoqueBaixo() {
    return (
        <>
            <div className={style.alerta}>
                <h2>Alerta de Estoque Baixo</h2>
                <p>Produto little waterfall: Quantidade </p>
            </div>
        </>
    )
}

export default AlertaEstoqueBaixo;