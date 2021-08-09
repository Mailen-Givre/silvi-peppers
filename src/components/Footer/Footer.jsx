import './Footer.css'

export const Footer = ()=> {

    return <div className="footer">
        <div className="footer_redes">
            <a href="https://www.behance.net/silvipeppers" target="_blank" rel="noreferrer"><img src= {process.env.PUBLIC_URL + "/multimedia/footer/behance.svg"} alt="behance" /></a>
            <a href="https://twitter.com/silvipeppers" target="_blank" rel="noreferrer"><img src= {process.env.PUBLIC_URL + "/multimedia/footer/twitter.svg"} alt="twitter" /></a>
            <a href="https://www.instagram.com/silvipeppers/" target="_blank" rel="noreferrer"><img src= {process.env.PUBLIC_URL + "/multimedia/footer/instagram.svg"} alt="instagram" /></a>
        </div> 
        <div className="footer_deco"></div>
    </div>
}