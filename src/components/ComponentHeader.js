import React, { Component } from 'react'
import { Link, NavLink } from "react-router-dom";
import { withRouter } from 'react-router';
import PageProjects from "../pages/PageProjects";
// withRouter(PageProjects);
class ComponentHeader extends Component {
    constructor(props) {
        super(props)
        this.delay = this.delay.bind(this)
    }
    delay = (e) => {
        e.preventDefault()
        setTimeout(() => {
            this.props.history.push('/projects')
        },2100)
    }
    render() {
        return (
            <header className="header__element">
                <div className="header__element--logos">
                    <Link to="/">
                        <p>Cosmin Burlacu</p>
                    </Link>
                </div>        
                <div className="header__element--navigation">
                    <NavLink to="/projects">All work</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>        
            </header>
        )
    }
}

export default ComponentHeader;