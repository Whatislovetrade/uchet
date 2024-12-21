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
        salary: '',
        term: '',
        filter: ''
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

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        } 

        return items.filter(item => {
            return item.name.toLowerCase().includes(term.toLowerCase())
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term })
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'star':
                return items.filter(item => item.star)
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000)
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

 

    render() {
        const { data, name, salary, term, filter } = this.state
        const employees = this.state.data.length
        const increased = this.state.data.filter(item => item.increase).length
        const visibleData = this.filterPost(this.searchEmp(data, term), filter)
        return (
                
            <div className="app">
                <AppInfo employees={employees} increased={increased} />
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={ this.onUpdateSearch } />
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
    
                <EmployeesList
                    data={ visibleData }
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
