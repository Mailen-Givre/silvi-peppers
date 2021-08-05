import React from 'react'
import './about.css'

export const About = () => {
    return (
        <div className="about">
            <img src={process.env.PUBLIC_URL + "/multimedia/about_me.jpg"} alt="Silvi" />
            <div className="about_text">
                <p>Hi!</p>

                <p>My name is <b>Silvi</b> and I'm a chilean illustrator and designer based in Santiago de Chile, nice to meet you.</p>

                <p>I specialize in hand-made items such as <i>embroidery</i> and <i>paper crafting</i>, all lovingly illustrated by yours truly! Each object is unique and carefully put together, always aiming for quality and beauty.</p>

                <p>If you have any questions, don't hesitate to reach out to me. I'll be glad to be of help!</p>
            </div>
        </div>
    )
}
