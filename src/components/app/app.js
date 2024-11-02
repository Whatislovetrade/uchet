import './app.css'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

const App = () => {

    const data = [
        {name: 'Alex' , salary: 800, increase: true},
        {name: 'Max' , salary: 3300, increase: false },
        {name: 'Ivan' , salary: 1000, increase: false }
    ]

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList data ={data} />
            <EmployeesAddForm />
        </div>
    )
}

export default App