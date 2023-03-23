import './App.css';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './Contactlist';
import Section from './Section';
import { useSelector } from 'react-redux';

export function App() {
  const isLoading = useSelector(state => state.isLoading);

  return (
    <div className="app">
      <Section title="Phonebook" childrenClassName="phonebook">
        <ContactForm className="phonebook" />
      </Section>
      <Section title="Contacts" childrenClassName="contacts">
        {isLoading ? <h2>Loading...</h2> : null}
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
}
