/**
 *
 * Finance
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectFinance from './redux/selectors';
import reducer from './redux/reducer';
import * as actions from './redux/actions';
import saga from './redux/saga';
import messages from './messages';

export function Finance() {
  useInjectReducer({ key: 'finance', reducer });
  useInjectSaga({ key: 'finance', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Finance.propTypes = {
  financeAction: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  finance: makeSelectFinance(),
});

const mapDispatchToProps = {
  ...actions,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Finance);
