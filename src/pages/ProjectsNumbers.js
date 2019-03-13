import React, { Component } from 'react'
import projects from "../projects";

class ProjectsNumbers extends Component {
    constructor(props) {
        super(props)
        this.scrollCheckProject = this.scrollCheckProject.bind(this)
    }
    scrollCheckProject = (ev) => {
        var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        console.log(scrollTop)
        // var winheight = window.innerHeight
        // let scrollNumber = window.pageYOffset;
    }
    componentDidMount() {
        window.addEventListener("scroll", (ev) => {
            this.scrollCheckProject()
        })
    }
    render(props) {
        return (
        <div onScroll={this.scrollCheckProject}>
            {
               projects.map((project, index) => {
                    if(this.props.currentProject == project.id) {
                        return project.projectListImage.map((image, index) => {
                            return(
                                <div key={index} className="projectsDotsNumerotation"></div>
                            );
                        })
                    }
               }) 
            }
        </div>
        )
    }
}

export default ProjectsNumbers;