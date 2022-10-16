import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
  return (
    <form>
      Filter name
      <input type="text" value={filter} onChange={onChange} />
    </form>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
