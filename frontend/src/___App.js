import React from 'react';
import './bootstrap/css/bootstrap.min.css'
import './bootstrap/css/sticky-footer-navbar.css'
import './App.css'
import UserList from './components/User.js'
import ProjectList from './components/Projects.js'
import TodoList from './components/Todos.js'
import Navbar from './components/Menu.js'
import Footer from './components/Footer.js'
import LoginForm from './components/LoginForm.js'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'universal-cookie';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navbarItems: [

            ],
            users: [],
            projects: [],
            todos: [],
            token: ''
        }
    }

    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({ 'token': token })
    }

    is_authenticated() {
        return !!this.state.token
    }

    logout() {
        localStorage.removeItem('token', '')
        this.setState({
            'token': '',
            users: [],
            projects: [],
            todos: []
        }, this.load_data)
    }

    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({ 'token': token })
    }

    create_header() {
        if (!this.is_authenticated())
            return {};

        return {
            'Authorization': 'Token ' + this.state.token
        }
    }

    load_data() {
        let headers = this.create_header();
        axios
            .get('http://127.0.0.1:8000/api/users/', { headers })
            .then(response => {
                const users = response.data
                this.setState({ 'users': users })
            })
            .catch(error => console.log(error))

        axios
            .get('http://127.0.0.1:8000/api/projects/', { headers })
            .then(response => {
                const projects = response.data.results
                this.setState({ 'projects': projects })
            })
            .catch(error => console.log(error))

        axios
            .get('http://127.0.0.1:8000/api/todos/', { headers })
            .then(response => {
                const todos = response.data.results
                this.setState({ 'todos': todos })
            })
            .catch(error => console.log(error))
    }

    get_token(login, password) {
        axios
            .post('http://127.0.0.1:8000/api-token-auth/', { username: login, password: password })
            .then(response => {
                const token = response.data.token
                localStorage.setItem('token', token)
                this.set_token(token)
                this.load_data()
            })
            .catch(error => {
                alert('Неверный логин или пароль')
            })
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        this.setState({ 'token': token, }, this.load_data)
    }

    render() {

        return (
            <div>
                <header>
                    <Navbar login={this.is_authenticated()} exit={() => this.logout()} />
                </header>

                <main role="main" className="flex-shrink-0">
                    <div className="container">
                        <Routes>
                            <Route exact path='/' element={<UserList users={this.state.users} />} />
                            <Route exact path='/todos' element={<TodoList todos={this.state.todos} />} />
                            <Route exact path='/users' element={<UserList users={this.state.users} />} />
                            <Route exact path='/projects' element={<ProjectList projects={this.state.projects} />} />
                            <Route exact path='/login' element={<LoginForm get_token={(login, password) => this.get_token(login, password)} />} />
                            <Route exact path='/users:id' element={() => <LoginForm get_token={(login, password) => this.get_token(login, password)} />} />
                        </Routes>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default App