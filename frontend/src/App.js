import React from 'react'
import './bootstrap/css/bootstrap.min.css'
import './bootstrap/css/sticky-footer-navbar.css'
import UserList from './components/User.js'
import TodoList from './components/Todos.js'
import Navbar from './components/Menu.js'
import Footer from './components/Footer.js'
import LoginForm from './components/LoginForm.js'
import {Route, Routes} from 'react-router-dom'
import axios from 'axios'
import Cookies from 'universal-cookie';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navbarItems: [
                { name: 'Users', href: '/users' },
                { name: 'Todos', href: '/todos' },
                { name: 'Login', href: '/login' },
            ],
            users: [],
            todos: [],
            login: '',
            token: ''
        }
    }

  set_token(token) {
    const cookies = new Cookies()
    cookies.set('token', token)
    this.setState({'token': token})
  }

  is_authenticated() {
    return this.state.token !== ''
  }

  logout() {
    this.set_token('')
    this.setState({
                navbarItems: [
                    { name: 'Users', href: '/users' },
                    { name: 'Todos', href: '/todos' },
                    { name: 'Login', href: '/login' },
                ]
            })
  }

  get_token_from_storage() {
    const cookies = new Cookies()
    const token = cookies.get('token')
    this.setState({'token': token})
  }

  get_token(login, password) {
    axios
        .post('http://127.0.0.1:8000/api-token-auth/', { username: login, password: password })
        .then(response => {
            const token = response.data.token
            this.setState({token})
            this.setState({
                navbarItems: [
                    { name: 'Users', href: '/users' },
                    { name: 'Todos', href: '/todos' }
                ]
            })
        })
        .catch(error => {
            alert('Неверный логин или пароль')
        })
    }

    componentDidMount() {
        this.get_token_from_storage()
        this.load_data()
    }

  load_data() {
    axios
    .get('http://127.0.0.1:8000/api/users/')
    .then(response => {
        const users = response.data
        this.setState({
            'users': users
            })
        })
    .catch(error => console.log(error))

    axios
    .get('http://127.0.0.1:8000/api/todos/')
    .then(response => {
        const todos = response.data.results
        this.setState({
            'todos': todos
        })
    })
    .catch(error => console.log(error))
  }

  render() {

    return (
        <div>
            <header>
                <Navbar navbarItems={this.state.navbarItems} login={this.is_authenticated()} exit={() => this.logout()} />
            </header>

            <main role="main" className="flex-shrink-0">
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={<UserList users={this.state.users} />} />
                        <Route exact path='/todos' element={<TodoList todos={this.state.todos} />} />
                        <Route exact path='/users' element={<UserList users={this.state.users} />} />
                        <Route exact path='/login' element={<LoginForm get_token={(login, password) => this.get_token(login, password)} />} />
                        <Route exact path='/users:id' element={() => <LoginForm get_token={(login, password) => this.get_token(login, password)} />} />
                        <Route exact path='/login' element={<LoginForm get_token={(login, password) => this.get_token(login, password)} />} />
                    </Routes>
                </div>
            </main>
            <Footer />
        </div>
    )
  }
}

export default App