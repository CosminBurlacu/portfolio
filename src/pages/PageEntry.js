import React, { Component } from 'react'
import ComponentHeader from '../components/ComponentHeader';
import { Link, NavLink } from "react-router-dom";
import projects from "../projects";
import Fade from "react-reveal/Fade";

const projectElement = (name, image, url, id) => {
    return(
        <NavLink to={`/${url}`}>
        <div className="entry__content--element" key={id} data-id={id}>
                <div className="project__image">
                    <img src={image} alt=""/>
                </div>
                <div className="project__names">
                    <Fade left cascade><p>{name}</p></Fade>
                </div>
        </div>
        </NavLink>
    );
}

class PageEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeProject:1
        }
        // this.scrollChangeProject = this.scrollChangeProject.bind(this)
        this.handleChangeProjects = this.handleChangeProjects.bind(this)
        // this.handleChangeProjectsTests = this.handleChangeProjectsTests.bind(this)
    }
    // scroll products
    handleChangeProjects = (ev) => {
        let arrow = ev.keyCode;
        switch(arrow) {
            case 38:
                return this.setState((prevState) => {
                        if(this.state.activeProject < 4) {
                            return {
                                activeProject:prevState.activeProject + 1
                            }
                        } else {
                            return { activeProject: 1 }
                        }
                    });
            case 40:
                return this.setState((prevState) => {
                    if(this.state.activeProject > 1) {
                        return {
                            activeProject:prevState.activeProject - 1
                        }
                    } else {
                        return { activeProject: 4 }
                    }
                });  
        }
        // if(ev.keyCode === 38) {
        //     this.setState((prevState) => {
        //         if(this.state.activeProject < 4) {
        //             return {
        //                 activeProject:prevState.activeProject + 1
        //             }
        //         } else {
        //             return { activeProject: 1 }
        //         }
        //     })
        //     // console.log(this.state.activeProject)
        // }
    }
    // handleChangeProjectsTests = () => {
    //         this.setState((prevState) => {
    //             return {
    //                 activeProject:!prevState.activeProject + 1
    //             }
    //         })
    //         // console.log(this.state.activeProject)
    // }
        // console.log("pressed")
        // console.log("you pressed", ev.keyCode)
        // switch(ev.keyCode) {
        //     // up arrow
        //     case 38:
        //     if(this.state.activeProject >= 4) {
        //         return this.setState({activeProject: 1})
        //     } else {
        //         return this.setState((prevState) => {
        //             return {
        //                 activeProject:!prevState.activeProject + 1
        //             }
        //         })
        //     }
        //     // down arrow
        //     case 40:
        // }
    // scrollChangeProject = (ev) => {
    //     // console.log("scrolled")
    //     let yDirection = ev.deltaY;
    //     if (yDirection < 0) {
    //         console.log('scrolling up');
    //         this.setState((prevState) => {
    //             return {
    //                 activeProject: !prevState.activeProject + 1
    //             }
    //         })
    //     }
    //     if (yDirection > 0) {
    //         console.log('scrolling down');
    //         this.setState((prevState) => {
    //             return {
    //                 activeProject: !prevState.activeProject - 1
    //             }
    //         })
    //     }
    // }
    componentDidMount() {
        window.onkeydown = this.handleChangeProjects;
    }
    render() {
        return (
        <div className="page__entry">
            <div className="page__entry--wrapper">
                <div className="page__entry--wrapper--indication">
                    <p>Arrow up/down</p>
                </div>
                <ComponentHeader></ComponentHeader>
                {/* <header className="header__element"></header> */}
                <div className="entry__content">
                    {
                        projects.map((project) => {
                            if(project.id === this.state.activeProject) {
                                return projectElement(project.projectName, project.projectImage, project.projectUrl, project.id)
                            }
                        })
                    }
                    <div className="entry__content--counter">
                        <Fade left>
                        <span className="entry__content--counter--active">{this.state.activeProject}</span>
                        </Fade>
                        <div className="entry__content--counter--limit"></div>
                        <span className="entry__content--counter--global">4</span>
                    </div>
                </div>
                <div className="entry__extra">
                    <div className="entry__extra--profession">
                        <p>Web Developer / Front-end</p>
                    </div>
                    <div className="entry__extra--contact">
                        <a href="https://www.linkedin.com/in/cosmin-burlacu-b31441138/" target="_blank">LinkedIn</a>
                        <a href="https://www.facebook.com/cosmin.burlacu.980" target="_blank">Facebook</a>
                    </div>
                </div>
            </div>
            {/* PageEntry */}
        </div>
        )
    }
}

export default PageEntry;