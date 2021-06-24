import React from 'react';
import { Item } from '../Item';

export const ItemList = () => {
    const [items,setItems] = React.useState([]);

    React.useEffect(()=>{
        new Promise ((resolver, rechazar) => {
            setTimeout(()=>{
                resolver([{id:1, title:"CATSKIER PINK", description:"Lovingly hand crafted from colored paper, with careful details on colored pencil and sparkling sequins. This bad boy is mounted on foam so he has dimension, he pops about 1/8 off the base.", price: 175, pictureUrl:"../media/catskier_pink.jpg"},
                {id:2, title:"CATSKIER YELLOW", description:"Lovingly hand crafted from colored paper, with careful details on colored pencil and shimmery watercolor. This bad boy is mounted on foam so he has dimension, he pops about 1/8 off the base.", price: 175, pictureUrl:"https://assets.bigcartel.com/product_images/269039864/yellow+1.jpg"},
                {id:3, title:"SHARING COOKIES", description:"Sometimes it's hard to be generous and share, not gonna lie. But it does do something special to your heart to give away something you know another person will like. Lovingly hand crafted from colored paper, patterned paper and careful details added on colored pencil. Also translucent and iridescent sequins for a touch of shimmer.", price: 152, pictureUrl:"https://assets.bigcartel.com/product_images/273068981/IMG_2488.jpg"}])
            },2000);
        })
        .then((resultado)=>{
            setItems(resultado)
        })
    }, [])    

    return (
        <div>
            {items.length === 0 ? <p>Cargando productos</p> : null}
            {items.map((item,indice)=>{
                return <Item item={item}/>
            })}
        </div>
    )
}