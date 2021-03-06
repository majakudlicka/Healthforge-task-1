import React, {Component} from 'react';
import {Link} from 'react-router';

//NotFound component
class NotFound extends Component {
  render() {
    return (
      <article className="flex-container">
        <h1>Page not found.</h1>
        <Link to="/" className="btn">
          Home
        </Link>
      </article>
    );
  }
}

export default NotFound;
