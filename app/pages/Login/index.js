/**
 *
 * Login
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as actions from 'shared/redux/user/actions';
import saga from 'shared/redux/user/saga';
import userReducer from 'shared/redux/user/reducer';
import { makeSelectUser } from './redux/selectors';

// import saga from './redux/saga';

const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 350,
    border: '1px solid black',
    borderRadius: 25,
    padding: 80,
  },
}));

export function Login(props) {
  const { login } = props;
  useInjectReducer({ key: 'user', reducer: userReducer });
  useInjectSaga({ key: 'user', saga });
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const onLoginClick = () => {
    login({
      name: userName,
      password,
    });
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <div className={classes.formWrapper}>
        <TextField
          onChange={e => setUserName(e.target.value)}
          value={userName}
          id="standard-basic"
          label="Username"
        />
        <TextField
          onChange={e => setPassword(e.target.value)}
          value={password}
          type="password"
          id="standard-basic"
          label="Password"
        />
        <Button onClick={onLoginClick} variant="contained" color="primary">
          Login
        </Button>
      </div>
    </div>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const mapDispatchToProps = {
  ...actions,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Login);
