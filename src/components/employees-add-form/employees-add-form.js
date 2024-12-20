import { Component } from 'react'
import './employees-add-form.css'

export default class EmployeesAddForm extends Component {


    render() {
        const { name, salary, onValueChange, onAdd } = this.props
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={onAdd}
                    className="add-form d-flex">
                    <input type="text"
                        name = 'name'
                        className="form-control new-post-label"
                        value={ name }
                        placeholder="Как его зовут?"
                        onChange={onValueChange}
                    />
                    <input type="number"
                        name = 'salary'
                        className="form-control new-post-label"
                        value={ salary }
                        placeholder="З/П в $?"
                        onChange={onValueChange}
                    />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }

}
