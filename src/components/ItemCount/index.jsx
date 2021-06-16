import './styles.css'


export const ItemCount = ({initial,onSubstract,onAdd}) => {
    return (
        <div className= "contadorContenedor">
            <div className="botonesCantidad">
                <button className='controladores' onClick= {onSubstract} >-</button>
                <p>{initial}</p>
                <button className='controladores' onClick= {onAdd}>+</button>
            </div>
                <button id='agregarCarrito'>Add to cart</button>
        </div>
    )
}