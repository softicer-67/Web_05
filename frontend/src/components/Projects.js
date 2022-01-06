import React from 'react'


const ProjectItem = ({ projects }) => {
    return (
        <tr>
            <td>{projects.name}</td>
            <td>{projects.repository}</td>
            <td>{projects.users}</td>
        </tr>
    )
}

const projectList = ({ projects }) => {
    return (
        <table className="table">
            <tr>
                <th>Name</th>
                <th>Repository</th>
                <th>Users</th>
            </tr>
            {projects.map((projects, index) => <ProjectItem key={index} projects={projects} />)}
        </table>
    )
}

export default projectList