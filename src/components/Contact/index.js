import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Marker } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timer); // Cleanup function
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()
        
        emailjs
        .sendForm(
            'service_bzo2ulp',
            'template_59xf2mm',
            refForm.current,
            'I5tquJ8ulavGoOCyT'
        )
        .then(
            () => {
                alert('Message successfully sent')
                window.location.reload(false)
            },
            () => {
                alert('Flaid to send the message. Please try again later')
            }
        )
    }

    return (
        <>
    <div className="contact-page">
        <div className="text-page">
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}
                />
            </h1>
            <p>
                I am interested in Software Development opportunities - especially on 
                ambitious and large projects. However, if you have any other requests or
                questions, don't hesitate to contact me.
            </p>
            <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
            Aditya Lather,
            <br />
            Orris Aster Court Sector 85, 
            <br />
            Gurugram <br />
            <span> adityalather7e@gmail.com</span>
    </div>
    <div className="map-wrap">
    <MapContainer center={[28.401480, -0.09]} zoom={10} scrollWheelZoom={false}>
            <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
             />
            <Marker position={[28.401480, 76.954270]}>
            </Marker>
          </MapContainer>
        </div>
    </div>
    <Loader type="pacman" />
</>

    )
}

export default Contact