import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'id': '',
            'title': '',
            'project': ''
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
        this.props.create_todo(this.state.id, this.state.title, this.state.project)
        event.preventDefault()
    }

    render() {

        return (
            <form onSubmit={(event) => this.handleSubmit(event)} >
                <input type='text' name='title' placeholder='title' value={this.state.title} onChange={(event) => this.handleChange(event)} />
                    <select multiple name='project' onChange={(event) => this.handleProjectChange(event)}>
                        {this.props.todos.map((el) => <option value={el.project}> {el.project}</option>)}
                    </select>
                <input type='submit' value='Create' />
            </form>
        )
    }
}


export default TodoForm;