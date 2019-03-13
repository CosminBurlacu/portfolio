import React, { Component } from 'react'
import ComponentHeader from '../components/ComponentHeader';
// import { Link, NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";

class PageAbout extends Component {
  render() {
    return (
      <div className="page__about"> 
        <ComponentHeader></ComponentHeader>
        <div className="page__about--entry">
            <div className="page__about--entry--primary">
                <Fade bottom cascade><h2>Web</h2></Fade>
            </div>
            <div className="page__about--entry--secondary">
                <Fade bottom cascade><h2>Developer</h2></Fade>
            </div>
        </div>
        <div className="page__about--description">
            <Fade bottom><p>
              Hi, my name is Cosmin-Ionut Burlacu, but everyone calls me Cosmin. I was born in Romania, but currently living in Copenhagen, Denmark. Right now I'm studying Web Development at the university here in Copenhagen, and it is my last year. On the workfield I prefere working in groups instead of alone, because there is a different level of communication. But I have no problem working alone. It's just a personal preference. To get in touch with me just check the info down there. 
                {/* Pariatur in incididunt adipisicing id duis aliqua ullamco in sit elit. Mollit ad dolore elit mollit elit aliquip nostrud sit amet enim qui nisi nulla culpa. Qui irure dolor cupidatat aliqua ipsum laboris cillum ut mollit ex. Est labore aliquip id est duis dolore magna. Ipsum incididunt id aliquip magna aliquip Lorem. Ipsum est ex ex aliqua. Ut mollit nisi elit est enim proident nulla nostrud proident.
                Deserunt sit minim aliquip reprehenderit et excepteur ex exercitation amet. Sit commodo nulla esse eu ad aliqua eiusmod minim consequat labore eiusmod eiusmod enim. Non do ut esse sunt ullamco deserunt ullamco minim. Mollit qui qui officia deserunt nulla dolore aute ad deserunt do officia. */}
            </p></Fade>
        </div>
        <div className="page__about--contact">
            <Fade bottom cascade>
            <h2>Contact Me</h2>
            <p>email: cosmin.burlacu@yahoo.com</p>
            <p>phone: +40743214952</p>
            </Fade>
        </div>
        <div className="page__about--follow">
            <Fade bottom cascade>
            <h2>Follow</h2>
            <a href="https://www.linkedin.com/in/cosmin-burlacu-b31441138/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.facebook.com/cosmin.burlacu.980" target="_blank" rel="noopener noreferrer">Facebook</a>
            </Fade>
        </div>
        {/* PageAbout */}
      </div>
    )
  }
}

export default  PageAbout;