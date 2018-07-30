import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit } from '../actions/balance';

export class Wallet extends Component {
  constructor() {
    super();
    this.state={balance: undefined};
  }
  updateBalance = event => this.setState({balance: parseInt(event.target.value,10)});

  deposit = () => this.props.deposit(this.state.balance);

  render() {
    return (
      <div>
        <h3 className='balance'>Wallet Balance: {this.props.balance}</h3>
        <br />
        <input className='input-wallet' value={this.state.balance} onChange={this.updateBalance} />
        <button className='btn-deposit' onClick={this.deposit}>Deposit</button>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    balance: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deposit
  }
}

export default connect(mapStateToProps, null)(Wallet);
