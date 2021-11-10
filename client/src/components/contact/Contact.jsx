import { useContext, useRef, useState } from "react"
import emailjs from "emailjs-com"
import "./contact.css"
import { DarkContext } from "../../context"

const Contact = () => {

    const dark = useContext(DarkContext)

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

    return (
        <div className="contact">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <h1 className="contact-title">Contactame</h1>
                <p className="contact-desc"></p>
                <form ref={formData} onSubmit={(e) => handleSubmit}>
                    <input style={{ backgroundColor: dark.state.darkmode && "#333", color: dark.state.darkmode && "white"}} type="text" placeholder="Nombre" name="user_name" /> 
                    <input style={{ backgroundColor: dark.state.darkmode && "#333", color: dark.state.darkmode && "white"}} type="text" placeholder="Asunto" name="user_object" /> 
                    <input style={{ backgroundColor: dark.state.darkmode && "#333", color: dark.state.darkmode && "white"}} type="text" placeholder="Email" name="user_email" />
                    <textarea style={{ backgroundColor: dark.state.darkmode && "#333", color: dark.state.darkmode && "white"}} name="user_message" cols="5" rows="5" placeholder="Introduzca su mensaje"> </textarea> 
                    <button>Enviar</button>
                    {sent && "Gracias, email enviado"}
                </form>
            </div>
        </div>
    )
}

export default Contact