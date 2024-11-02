import ContactsForm from './components/ContactsForm';
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';
import './App.css'

const App = () => {
    return (
        <div>
            <h1>Phonebook</h1>
            <ContactsForm />

            <h2>Contacts</h2>
            <SearchBox />
            <ContactList />
        </div>
    )
}

export default App
