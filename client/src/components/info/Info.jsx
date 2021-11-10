import "./info.css"
import atom from "../../img/test.png"

const Info = () => {
    return (
         <div className="info">
             <div className="info-left">
                 <div className="info-left-wrapper">
                     <h2 className="info-intro">Hola, me llamo</h2>
                     <h1 className="info-name">Jesús Sánchez</h1>
                     <div className="info-title">
                         <div className="info-title-wrapper">
                             <div className="info-title-item">Web developer</div>
                             <div className="info-title-item">Front end</div>
                             <div className="info-title-item">Full Stack</div>
                             <div className="info-title-item">Seo</div>
                         </div>
                     </div>
                     <p className="info-desc">
                     Diseño y desarrollo servicios para clientes de todos los tamaños, especializándome en la creación de sitios web elegantes y modernos, servicios web y tiendas online.
                     </p>
                 </div>
                 {/* Crear svg pegar y dar la clase info-scroll */}
             </div>
             <div className="info-rigth">
                 <div className="info-bg"></div>
                 <img src={atom} alt="" className="info-img" />
             </div>
         </div>
    )
}

export default Info