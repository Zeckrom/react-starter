/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

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

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>
        You are now connected and can go to the <Link to="/cats">Cats</Link>{' '}
        page
      </h1>
    </div>
  );
}
