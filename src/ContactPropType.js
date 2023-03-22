import PropTypes from 'prop-types';

export const ContactPropType = PropTypes.exact({
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
}).isRequired;
