import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as IncDecActions, selectors as IncDecSelectors } from './duck';

class IncDec extends PureComponent {
  static propTypes = {
    incrementAction: PropTypes.func.isRequired,
    decrementAction: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
  };

  static defaultProps = {};

  _handleDecrement = event => {
    event.stopPropagation();
    const { decrementAction } = this.props;
    decrementAction();
  };

  _handleIncrement = event => {
    event.stopPropagation();
    const { incrementAction } = this.props;
    incrementAction();
  };

  render() {
    const { value } = this.props;
    return (
      <>
        {value}
        <button type="button" onClick={this._handleIncrement}>
          Increment
        </button>
        <button type="button" onClick={this._handleDecrement}>
          Decrement
        </button>
      </>
    );
  }
}

const mapStateToProps = state => ({
  value: IncDecSelectors.getValue(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      incrementAction: IncDecActions.increment,
      decrementAction: IncDecActions.decrement,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncDec);
