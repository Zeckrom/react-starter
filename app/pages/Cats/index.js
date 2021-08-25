/**
 *
 * Cats
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCats from './redux/selectors';
import reducer from './redux/reducer';
import saga from './redux/saga';
import * as actions from './redux/actions';

const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    height: '100vh',
    padding: 100,
  },
  formWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid black',
    borderRadius: 25,
    padding: 80,
  },
  catsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '80px',
  },
  catCard: {
    border: '1px solid black',
    borderRadius: 25,
    marginRight: 25,
    marginBottom: 25,
    padding: 20,
  },
}));

export function Cats(props) {
  const {
    cats: { cats },
    fetchCats,
    addCat,
    deleteCat,
  } = props;
  const classes = useStyles();
  useInjectReducer({ key: 'cats', reducer });
  useInjectSaga({ key: 'cats', saga });

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [breed, setBreed] = useState('');

  const onAddCatClick = async () => {
    await addCat({
      name,
      age,
      breed,
    });
    setName('');
    setAge(0);
    setBreed('');
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.formWrapper}>
        <TextField
          onChange={e => setName(e.target.value)}
          value={name}
          label="Name"
        />
        <TextField
          onChange={e => setAge(e.target.value)}
          value={age}
          type="number"
          label="Age"
        />
        <TextField
          onChange={e => setBreed(e.target.value)}
          value={breed}
          label="Breed"
        />
        <Button variant="contained" color="primary" onClick={onAddCatClick}>
          Add cat
        </Button>
      </div>
      <div className={classes.catsWrapper}>
        {cats.map(cat => (
          <div className={classes.catCard}>
            <h4>Name: {cat.name}</h4>
            <h4>Age: {cat.age}</h4>
            <h4>Breed: {cat.breed}</h4>
            <Button
              variant="contained"
              color="secondary"
              // eslint-disable-next-line no-underscore-dangle
              onClick={() => deleteCat(cat._id)}
            >
              Delete cat
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

Cats.propTypes = {
  cats: PropTypes.object.isRequired,
  fetchCats: PropTypes.func.isRequired,
  addCat: PropTypes.func.isRequired,
  deleteCat: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cats: makeSelectCats(),
});

const mapDispatchToProps = {
  ...actions,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Cats);
