import React, { Component } from 'react'
// import projects from "../projects";
import Fade from "react-reveal/Fade";

const projects = [
    {
        projectName:"Iulia Burlacu",
        projectImage:"./image/project1/project1__iulia2.jpg",
        projectUrl:"projects/1",
        projectListImage:[
            "./image/project1/jennie1.png",
            "./image/project1/jennie2.png",
            "./image/project1/jennie3.png",
            "./image/project1/jennie4.png",
            "./image/project1/jennie5.png"
        ],
        id:1
    },
    {
        projectName:"Backpacker",
        projectImage:"./image/project2/project2__travelio.jpg",
        projectUrl:"projects/2",
        projectListImage:[
            "image/project2/profile__page.png",
            "image/project2/feed__page.png",
            "image/project2/stories__page.png",
            "image/project2/menu__notifications.png",
        ],
        id:2
    },
    {
        projectName:"Travel.io",
        projectImage:"./image/project3/project3__tourism.jpg",
        projectUrl:"projects/3",
        projectListImage:[
            // "./image/project3/profile__page.png",
            // "./image/project3/feed__page.png",
            "image/project3/travel1.png",
            "image/project3/travel2.png",
            "image/project3/travel3.png"
        ],
        id:3
    },
    {
        projectName:"HandWatch",
        projectImage:"./image/project4/project4__wristwatch.jpg",
        projectUrl:"projects/4",
        projectListImage:[
            "image/project4/handwatch1.png",
            "image/project4/handwatch2.png",
            "image/project4/handwatch3.png"
        ],
        id:4
    }
];

class ProjectElement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentProject: this.props.currentProject
        }
    }

    componentDidMount() {
        projects.map((project) => {
            if(project.id == this.state.currentProject) {
                return project.projectListImage.map((image) => {
                    return console.log(image)
                })
            }
        })
    }
    render(props) {
        return (
        <div className="projectIndividualElement">
            {
                projects.map((project, index) => {
                    if(project.id == this.props.currentProject) {
                        return project.projectListImage.map((image, index) => {
                            return(
                                <Fade bottom key={index}>
                                <div className="individualProject" style={{
                                    height:"100vh", 
                                    display:"grid",
                                    alignItems:"center",
                                    justifyItems:"center"
                                }}>
                                    <img src={process.env.PUBLIC_URL+"/"+image} alt=""/>
                                </div>
                                </Fade>
                            );
                        })
                    }
                })
            }        
        </div>
        )
    }
}

export default ProjectElement;