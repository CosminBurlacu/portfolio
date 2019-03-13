import React, { Component } from "react";
import Slide from "react-reveal/Slide";
import { NavLink, Link } from "react-router-dom";
import ComponentHeader from "../components/ComponentHeader";
// import projects from "../projects";

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
            "./image/project2/profile__page.png",
            "./image/project2/feed__page.png",
            "./image/project2/stories__page.png",
            "./image/project2/menu__notifications.png",
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
            "./image/project3/travel1.png",
            "./image/project3/travel2.png",
            "./image/project3/travel3.png"
        ],
        id:3
    },
    {
        projectName:"HandWatch",
        projectImage:"./image/project4/project4__wristwatch.jpg",
        projectUrl:"projects/4",
        projectListImage:[
            "./image/project4/handwatch1.png",
            "./image/project4/handwatch2.png",
            "./image/project4/handwatch3.png"
        ],
        id:4
    }
];

class PageProjects extends Component {
    render() {
        return(
            <div className="page__projects">
            <ComponentHeader></ComponentHeader>
            <div className="portfolio__page">
                <div className="animated__panel"></div>
                    <div className="portfolio__page--wrapper">
                    <Slide right cascade distance="400px">
                    <div className="main__content">
                        {
                        projects.map((items, index) => {
                            return(
                            <NavLink 
                                // to={items.url} 
                                to={`/projects/${items.id}`}
                                className="main__content--links"
                                onClick={this.individualProjectHandler}
                                key={items.id}>
                                <div className="portfolio__projects">
                                <img src={process.env.PUBLIC_URL + "/" + items.projectImage} alt={items.projectImageName} className="portfolio__projects--image"/>
                                </div>
                            </NavLink>
                            );
                        })
                        }
                    </div>
                        </Slide>
                    </div>  
                </div>
                PageProjects
            </div>
        );
    }
}

export default PageProjects;