import React, { Component } from 'react';
import projects from "../projects";
import ProjectTitle from "../components/ProjectTitle";
import ProjectElement from '../components/ProjectElement';
import ProjectsNumbers from './ProjectsNumbers';
import { NavLink, Link } from "react-router-dom";

class PageIndividual extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loader:true,
            currentProject:this.props.match.params.id
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({loader:false})
        }, 3200)
    }
    render() {
        return (
        <div className="page__individual">
            {
                this.state.loader 
                &&
                <div className="page__individual--loader">
                    <h2><ProjectTitle currentProject={this.state.currentProject}></ProjectTitle></h2>
                </div>
            }
            <div className="page__individual--content">
                <ProjectElement currentProject={this.state.currentProject}></ProjectElement>
                {/* lorem ipsum */}
            </div>
            <div className="page__individual--sider">
                <ProjectsNumbers currentProject={this.state.currentProject}></ProjectsNumbers>
            </div>
            <div className="close__pageIndividual">
                <NavLink to="/projects">
                <svg>
                    <use href="./image/sprite.svg#icon-cross"></use>
                </svg>
                </NavLink>
            </div>
        </div>
        )
    }
}

export default PageIndividual;