import React, { Component } from 'react';

import MainNav from 'Components/pages/MainNav';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }
  componentDidMount() {
    fetch('categories.json')
      .then(function (response) {
        return response.json();
      })
      .then((categories) => {
        console.log(categories);
        this.setState({ categories });
      });
  }
  render() {
    return (
      <div>
        <MainNav categories={this.state.categories}></MainNav>
      </div>
    );
  }
}

export default Main;