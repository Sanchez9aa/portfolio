import "./about.css"
import atom from "../../img/atom.png"

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card">
                    <img src={atom} alt="" className="about-img" />
                </div>
            </div>
            <div className="about-rigth">
                <h2 className="about-title">Sobre Mi</h2>
                <p className="about-desc">
                Voy a ser algo directo, me gusta el SEO, la programación y los animales. <br/> <br/>

                He realizado un curso superior de desarrollo web y el Full Stack Open de la universidad de Helsinki. <br/> <br/> 
                
                Tengo 4 años de experiencia con Javascript, 3 con Reactjs y 2 con Nodejs. No tengo preferencia sobre el backend o el front end, de hecho, me encantan los dos :D.
                </p>
                
            </div>
        </div>
    )
}

export default About