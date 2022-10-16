import PropTypes from 'prop-types';

const ContactList = ({ items, deleteContact }) => {
  console.log(items);

  return (
    <ul>
      {items.map(({ name, number, id }) => (
        <li key={id}>
          {name}:{number}
          <button type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  items: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
