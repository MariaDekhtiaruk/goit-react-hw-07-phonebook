import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import { ContactPropType } from 'ContactPropType';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/contactsThunks';

const isSubstringPresentInString = (string, substring) => {
  return string.toLowerCase().includes(substring.toLowerCase());
};

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const errorMessage = useSelector(state => state.error);
  const isLoading = useSelector(state => state.isLoading);
  const contactsFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return contacts && !isLoading ? (
    <ul className="list">
      {errorMessage}
      {contacts
        .filter(item => isSubstringPresentInString(item.name, contactsFilter))
        .map(contactItem => (
          <ContactItem contact={contactItem} key={contactItem.id}></ContactItem>
        ))}
    </ul>
  ) : null;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(ContactPropType),
  filter: PropTypes.string,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
