import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="m-3">
       
        <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="d-flex">
              <input
               className="form-control"
               type="text"
               placeholder="Search for photos"
               style={{fontFamily: 'Roboto Condensed'}}
               value={this.state.term}
               onChange={e => this.setState({ term: e.target.value })}
            />
            <button className="btn btn-dark mx-3 "><i className="fas fa-search mx-5 m-3"></i></button>
          </div>
        </form>

      </div>
    );
  }
}

export default SearchBar;
