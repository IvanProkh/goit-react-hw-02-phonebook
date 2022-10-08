import React, { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNameChange = event => {
    this.setState({
      name: event.currentTarget.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>

        <form className="App">
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              onChange={this.handleNameChange}
              required
            />
          </label>
          <button>Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          <li>contact</li>
        </ul>
      </div>
    );
  }
}

export default App;
