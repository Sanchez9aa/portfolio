import { useRef, useState } from "react"
import "./contact.css"

const Contact = () => {

    const formData = useRef()
    const [sent, setSent] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_ce9cx3k', 'template_e2s9cbj', formData.current, 'user_IiSgbF2LPopusdRj4VKcp')
            .then((result) => {
                console.log(result.text);
                setSent(true)
            }, (error) => {
                console.log(error.text);
            });
        };
    }

    return (
        <div className="contact">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title"></h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img src="phone" alt="" className="contact-icon"/>
                        </div>
                        <div className="contact-info-item">
                            <img src="email" alt="" className="contact-icon"/>
                        </div>
                    </div>
                </div>
                <div className="contact-rigth">
                    <p className="contact-desc"></p>
                    <form ref={formData} onSubmit={(e) => handleSubmit}>
                        <input type="text" placeholder="Nombre" name="user_name" /> 
                        <input type="text" placeholder="Asunto" name="user_object" /> 
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea name="user_message" cols="5" rows="5" placeholder="Introduzca su mensaje"> </textarea> 
                        <button>Enviar</button>
                        {done && "Gracias, email enviado"}
                    </form>
                </div>
            </div>
        </div>
    )
}