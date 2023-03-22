import './App.css';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './Contactlist';
import Section from './Section';

export function App() {
  return (
    <div className="app">
      <Section title="Phonebook" childrenClassName="phonebook">
        <ContactForm className="phonebook" />
      </Section>
      <Section title="Contacts" childrenClassName="contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
}
