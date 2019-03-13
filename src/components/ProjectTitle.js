import React, { Component } from 'react'
import projects from "../projects";

class ProjectTitle extends Component {
  render(props) {
    return (
      <div>
        {
            projects.map((title, index) => {
                if(title.id == this.props.currentProject) {
                 // return title.id
                return (<h2 key={index}>{title.projectName}</h2>)
            }
            })
        }
      </div>
    )
  }
}

export default ProjectTitle;