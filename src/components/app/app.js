import { Component } from 'react'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'
import nextId from "react-id-generator";

import './app.css'

export default class App extends Component {

    nextId = nextId()

    state = {
        data: [
            this.addNewItem('Alex', 800),
            this.addNewItem('Max', 3300),
            this.addNewItem('Ivan', 1000),
        ],
        name: '',
        salary: ''
    }

    addNewItem(name, salary) {
        return {
            name,
            salary,
            increase: false,
            star: false,
            id: nextId(1)
        }
    }       

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    addItem = (e) => {
        e.preventDefault()

        const { name, salary, data } = this.state

        if (name && salary) {
            const newEmployee = this.addNewItem(name, parseInt(salary))
            this.setState({
                data: [...data, newEmployee],
                name: '', 
                salary: '',
            })
        }
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }



 

    render() {
        const { data, name, salary } = this.state
        const employees = this.state.data.length
        const increased = this.state.data.filter(item => item.increase).length
        return (
                
            <div className="app">
                <AppInfo employees={employees} increased={increased} />
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
    
                <EmployeesList
                    data={ data }
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm
                    name={name}
                    salary={salary}
                    onValueChange={this.onValueChange}
                    onAdd={this.addItem} />
            </div>
        )
    }


}
