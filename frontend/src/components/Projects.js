import React from 'react'


const ProjectItem = ({ projects, delete_projects }) => {
    return (
        <tr>
            <td>{projects.name}</td>
            <td>{projects.repository}</td>
            <td>{projects.users}</td>
            <td><button onClick={()=>delete_projects(projects.id)} type='button'>Delete</button></td>
        </tr>
    )
}

const ProjectList = ({ projects, delete_projects }) => {
    return (
        <table className="table">
            <tr>
                <th>Name</th>
                <th>Repository</th>
                <th>Users</th>
            </tr>
            {projects.map((projects, index) => <ProjectItem key={index} projects={projects} delete_projects={delete_projects} />)}
        </table>
    )
}

export default ProjectList