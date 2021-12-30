import React from 'react';
import logo from './logo.svg';

import './bootstrap/css/bootstrap.min.css'
import './bootstrap/css/sticky-footer-navbar.css'
import LoginForm from './components/LoginForm.js'
import Footer from './components/Footer.js'
import Navbar from './components/Menu.js'
import TodoList from './components/Todos.js'
import UserList from './components/User.js'
import axios from 'axios'

import { Link, Routes, Route } from 'react-router-dom'


const DOMAIN = 'http://127.0.0.1:8000'
const get_url = (url) => `${DOMAIN}${url}`


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navbarItems: [
                { name: 'Users', href: '/users' },
                { name: 'Todos', href: '/todos' },
                { name: 'Login', href: '/login' }
            ],
            users: [],
            todos: [],
            login: []
        }
    }

    render() {

        return (
            <div>
                <header>
                    <Navbar navbarItems={this.state.navbarItems} />
                </header>

                <main role="main" className="flex-shrink-0">
                    <div className="container">

                        <Routes>
                            <Route path={'/todos'} element={<TodoList todos={this.state.todos} />} />
                            <Route path={'/users'} element={<UserList users={this.state.users} />} />
                            <Route path={'/login'} element={<LoginForm />} />
                        </Routes>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    componentDidMount() {
        axios.get(get_url('/api/users/'))
            .then(response => {
                this.setState({ users: response.data })
                console.log(this.state.users)
            })
            .catch(error => console.log(error))

        axios.get(get_url('/api/todos/'))
            .then(response => {
                this.setState({ todos: response.data.results })
                console.log(this.state.todos)
            })
            .catch(error => console.log(error))
    }
}


export default App;
