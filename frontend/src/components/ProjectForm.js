import React from 'react';

class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'name': '',
            'repository': '',
            'users': ''
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleProjectChange(event) {
        if (!event.target.selectedOptions) {
            return;
        }
        let project = []
        for (let i=0; i<event.target.selectedOptions.length; i++) {
            project.push(parseInt(event.target.selectedOptions.item(i).value))
        }
        this.setState({
            'project': project
        })
    }

    handleSubmit(event) {
        this.props.create_project(this.state.name, this.state.repository, this.state.users)
        event.preventDefault()
    }

    render() {

        return (
            <form onSubmit={(event) => this.handleSubmit(event)} >
                <input type='text' name='name' placeholder='Group' value={this.state.name} onChange={(event) => this.handleChange(event)} />
                <input type='text' name='repository' placeholder='Repository' value={this.state.repository} onChange={(event) => this.handleChange(event)} />
                    {this.props.projects.map((el) => <option value={el.id}></option>)}
                <input type='submit' value='Create' />
            </form>
        )
    }
}


export default ProjectForm;