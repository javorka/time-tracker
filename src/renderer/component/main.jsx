/* eslint-disable class-methods-use-this */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../action/login';

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.login();
  }


  render() {
    const { user } = this.props;
    return (
      <div>
        <button type="button" onClick={this.onClick}>ClICL</button>
        <div>COOL!!!! We have React here {user.name}</div>
      </div>
    );
  }
}

Main.propTypes = {
  login: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

Main.defaultProps = {
  user: {
    name: 'Anonymous',
  },
};

function mapStateToProps(state) {
  return state.login;
}

export default connect(mapStateToProps, {
  login,
})(Main);
