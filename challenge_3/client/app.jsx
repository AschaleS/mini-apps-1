
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      name: '',
      email: '',
      password: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip_code: '',
      phone_number: '',
      cc_number: '',
      exp_date: '',
      cvv: '',
      billing_zip: ''
    }
  }
  nextStep() {
    this.setState({
      step: this.state.step + 1
    });
  }

  // finalStep() {
  //   render(){
  //     return (<Checkout />)
  //   }
  // }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handlePurchase() {
    this.setState({
      step: this.state.step - 4
    });
  }

  render() {
    const { step } = this.state;
    const { name, email, password, addressLine1, addressLine2, city, state, zip_code, phone_number, cc_number, exp_date, cvv, billing_zip } = this.state;
    const values = { name, email, password, addressLine1, addressLine2, city, state, zip_code, phone_number, cc_number, exp_date, cvv, billing_zip };
    switch (this.state.step) {
      case 1:
        return (<Checkout
          nextStep={this.nextStep.bind(this)}
          handleChange={this.handleChange}
          values={values} />)

      case 2:
        return (<Form1
          nextStep={this.nextStep.bind(this)}
          handleChange={this.handleChange}
          values={values} />)

      case 3:
        return (<Form2
          nextStep={this.nextStep.bind(this)}
          handleChange={this.handleChange}
          values={values} />)

      case 4:
        return (<Form3
          nextStep={this.nextStep.bind(this)}
          handleChange={this.handleChange}
          values={values} />)

      case 5:
        return (<Confirmation
          finalStep={this.handlePurchase.bind(this)}
          handleChange={this.handleChange}
          values={values} />)

    }
  }
}
class Checkout extends React.Component {
  constructor(props) {
    super(props);
  };

  checkout() {
    this.props.nextStep();
  }

  render() {
    return (
      <div>
        <h3> Checkout </h3>
        <button className="btn-checkout" onClick={this.checkout.bind(this)}> Proceed to Checkout</button>
      </div>
    )
  }
}

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }
  onNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  onEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }
  onPasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  }

  next() {
    this.props.nextStep();
  }


  render() {
    return (
      <div>
        <h3>Create Account</h3>
        <form>
          Name:
            <input name="name" value={this.state.name} onChange={this.onNameChange.bind(this)} /> <br />

           Email:
            <input name="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} /> <br />

          Password:
            <input name="password" value={this.state.password} onChange={this.onPasswordChange.bind(this)} /> <br />

          <button className="btn-next" onClick={this.next.bind(this)}>Next</button>
        </form>
      </div>
    )
  }
}

class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip_code: '',
      phone_number: ''
    }
  }

  onAddress1Change(e) {
    this.setState({
      addressLine1: e.target.value
    })
  }

  onAddress2Change(e) {
    this.setState({
      addressLine2: e.target.value
    })
  }
  onCityChange(e) {
    this.setState({
      city: e.target.value
    })
  }
  onStateChange(e) {
    this.setState({
      state: e.target.value
    })
  }
  onZipCodeChange(e) {
    this.setState({
      zip_code: e.target.value
    })
  }

  onPhoneChange(e) {
    this.setState({
      phone_number: e.target.value
    })
  }
  next() {
    this.props.nextStep();
  }


  render() {
    return (
      <div>
        <h3>Shipping Address</h3>

        <form>
          Address Line 1:
         <input name="address1" value={this.state.value} onChange={this.onAddress1Change.bind(this)} /> <br />

            Address Line 2:
         <input name="address2" value={this.state.value} onChange={this.onAddress2Change.bind(this)} /> <br />

            City:
         <input name="city" value={this.state.value} onChange={this.onCityChange.bind(this)} /> <br />

            State:
         <input name="state" value={this.state.value} onChange={this.onStateChange.bind(this)} /> <br />

            Zip Code:
         <input name="zipCode" value={this.state.value} onChange={this.onZipCodeChange.bind(this)} /> <br />

            Phone Number:
         <input name="phoneNumber" value={this.state.value} onChange={this.onPhoneChange.bind(this)} /> <br />

          <button className="btn-next" onClick={this.next.bind(this)}>Next</button>
        </form>
      </div>
    )
  }
}

class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cc_number: '',
      exp_date: '',
      cvv: '',
      billing_zip: ''
    }
  }

  onCCChange(e) {
    this.setState({
      cc_number: e.target.value
    })
  }
  onExpirationChange(e) {
    this.setState({
      exp_date: e.target.value
    })
  }

  onCVVChange(e) {
    this.setState({
      cvv: e.target.value
    })
  }

  onBillingChange(e) {
    this.setState({
      billing_zip: e.target.value
    })
  }
  next() {
    this.props.nextStep();
  }

  render() {
    return (
      <div>
        <h3>Billing Information</h3>
        <form>
          Credit Card Number:
            <input name="creditCard" value={this.state.value} onChange={this.onExpirationChange.bind(this)} /> <br />

            Card Expiration Date:
            <input name="exdate" value={this.state.value} onChange={this.onCCChange.bind(this)} /> <br />

            CVV:
            <input name="cvv" value={this.state.value} onChange={this.onCVVChange.bind(this)} /> <br />

            Billing Zip Code:
            <input name="billing" value={this.state.value} onChange={this.onBillingChange.bind(this)} /> <br />

          <button className="btn-next" onClick={this.next.bind(this)}>Next</button>

        </form>
      </div>

    )
  }
}

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 1
    }
  }

  next() {
    this.props.finalStep();
      // return (<Checkout />)
  }


  render() {
    const { values: {name, email, password, addressLine1, addressLine2, city, state, zip_code, phone_number, cc_number, exp_date, cvv, billing_zip } } = this.props;
    return (
      <div>
        <h3> Please Confirm Your Details Below Before Purchase </h3>
        <div>
          Name: {name} <br />
          Email: {email} <br />
          {/* <li>Password: {password}</li> */}
          Address Line 1: {addressLine1} <br />
          Address Line 2: {addressLine2} <br />
          City: {city} <br />
          State: {state} <br />
          Zip Code: {zip_code} <br />
          Phone Number: {phone_number} <br />
          Credit Card: {cc_number} <br />
          Expiration Date: {exp_date} <br />
          CVV: {cvv} <br />
          Billing Zip Code: {billing_zip} <br />
          <button className="btn-place-order" onClick={this.next.bind(this)}>Purchase</button>
        </div>

      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));