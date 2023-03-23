import PropTypes from 'prop-types';
import { ContactPropType } from 'ContactPropType';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contactsThunks';

const ContactItem = ({ contact: { name, phone, id } }) => {
  const dispatch = useDispatch();

  return (
    <li className="list-item">
      {name}: {phone}
      <button
        type="button"
        className="button-delete"
        onClick={() => dispatch(deleteContactThunk(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: ContactPropType,
  onDeleteContact: PropTypes.func,
};

export default ContactItem;
