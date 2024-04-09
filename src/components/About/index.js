import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faHtml5, faJsSquare, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders'

const About = () =>{

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timer); // Cleanup function
        };
    }, []);
      

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']}
                        idx = {15}
                    />
                </h1>
                <p>
                I'm a very ambitious Web developer looking for a role in an
                established IT company with the opportunity to work with the latest
                technologies on challenging and diverse projects.
                </p>
                <p>
                I'm quiet confident, naturally curious, and perpetually working on
                improving myself by learning new technologies and solving complex puzzles.
                </p>
                <p>
                To define myself in one line I would say I am Ambitious, Dedicated, Confident, a sports fanatic, and tech-obsessed!!!
                </p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                    <FontAwesomeIcon icon={faNodeJs} color="green" />
                    </div>
                <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face3">
                <FontAwesomeIcon icon={faDocker} color="#28A4D9" />
                </div>
                <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face6">
                 <FontAwesomeIcon icon={faLeaf} color="green" />
                </div>
            </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About