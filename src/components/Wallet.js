import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Wallet extends Component {
  constructor() {
    super();
    this.state={balance: undefined};
  }
  updateBalance = event => this.setState({balance: parseInt(event.target.value,10)});

  render() {
    return (
      <div>
        <h3 className='balance'>Wallet Balance: {this.props.balance}</h3>
        <br />
        <input className='input-wallet' value={this.state.balance} onChange={this.updateBalance} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    balance: state,
  }
}

export default connect(mapStateToProps, null)(Wallet);
