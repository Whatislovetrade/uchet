import { Component } from 'react'
import './employees-add-form.css'

export default class EmployeesAddForm extends Component {

    state = {
        name: '',
        salary: ''
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        const { name, salary } = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        name = 'name'
                        className="form-control new-post-label"
                        value={ name }
                        placeholder="Как его зовут?"
                        onChange={this.onValueChange}
                    />
                    <input type="number"
                        name = 'salary'
                        className="form-control new-post-label"
                        value={ salary }
                        placeholder="З/П в $?"
                        onChange={this.onValueChange}
                    />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }

}
