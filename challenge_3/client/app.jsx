

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      order_id: '',
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
  handleAccount(e) {
    const orderId = this.generateGuid();
    console.log('This is the order id', orderId)
    this.setState({
      order_id: orderId
    });

    fetch('http://localhost:4000/account', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        order_id: orderId
      })
    })
      .then((response) => {
        return response.json();
      });
  }

  handleShipping(e) {
    fetch('http://localhost:4000/shipping', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        addressLine1: this.state.addressLine1,
        addressLine2: this.state.addressLine2,
        city: this.state.city,
        state: this.state.state,
        zip_code: this.state.zip_code,
        phone_number: this.state.phone_number,
        order_id: this.state.order_id
      })
    })
      .then((response) => {
        return response.json();
      });
  }

  handleBilling(e) {
    fetch('http://localhost:4000/billing', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cc_number: this.state.cc_number,
        exp_date: this.state.exp_date,
        cvv: this.state.cvv,
        billing_zip: this.state.billing_zip,
        order_id: this.state.order_id
      })
    })
      .then((response) => {
        return response.json();
      });
  }

  generateGuid() {
    var result, i, j;
    result = '';
    for(j=0; j<32; j++) {
      if( j == 8 || j == 12 || j == 16 || j == 20)
        result = result + '-';
      i = Math.floor(Math.random()*16).toString(16).toUpperCase();
      result = result + i;
    }
    return result;
  }

  render() {
    const { step } = this.state;
    const { order_id, name, email, password, addressLine1, addressLine2, city, state, zip_code, phone_number, cc_number, exp_date, cvv, billing_zip } = this.state;
    const values = { order_id, name, email, password, addressLine1, addressLine2, city, state, zip_code, phone_number, cc_number, exp_date, cvv, billing_zip };

    switch (this.state.step) {
      case 1:
        return (
          <Checkout
            nextStep={this.nextStep.bind(this)}
            handleChange={this.handleChange}
            values={values} />)

      case 2:
        return (<Form1
          nextStep={this.nextStep.bind(this)}
          handleChange={this.handleChange.bind(this)}
          handleAccount={this.handleAccount.bind(this)}
          values={values} />)

      case 3:
        return (<Form2
          nextStep={this.nextStep.bind(this)}
          handleChange={this.handleChange.bind(this)}
          handleShipping={this.handleShipping.bind(this)}
          values={values} />)

      case 4:
        return (<Form3
          nextStep={this.nextStep.bind(this)}
          handleChange={this.handleChange.bind(this)}
          handleBilling={this.handleBilling.bind(this)}
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

  next() {
    this.props.nextStep(),
      this.props.handleAccount();
  }
  handle(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.props.handleChange(e);
  }

  render() {
    return (
      <div>
        <h3>Please Create Account</h3>
        <form>
          Name:
            <input name="name" value={this.state.name} onChange={this.handle.bind(this)} /> <br />

           Email:
            <input name="email" value={this.state.email} onChange={this.handle.bind(this)} /> <br />

          Password:
            <input name="password" value={this.state.password} onChange={this.handle.bind(this)} /> <br />

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

  next() {
    this.props.nextStep(),
      this.props.handleShipping();
  }

  handle(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.props.handleChange(e);
  }

  render() {
    return (
      <div>
        <h3>Shipping Address</h3>

        <form>
          Address Line 1:
         <input name="addressLine1" value={this.state.value} onChange={this.handle.bind(this)} /> <br />

            Address Line 2:
         <input name="addressLine2" value={this.state.value} onChange={this.handle.bind(this)} /> <br />

            City:
         <input name="city" value={this.state.value} onChange={this.handle.bind(this)} /> <br />

            State:
         <input name="state" value={this.state.value} onChange={this.handle.bind(this)} /> <br />

            Zip Code:
         <input name="zip_code" value={this.state.value} onChange={this.handle.bind(this)} /> <br />

            Phone Number:
         <input name="phone_number" value={this.state.value} onChange={this.handle.bind(this)} /> <br />

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

  next() {
    this.props.nextStep(),
    this.props.handleBilling();
  }

  handle(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.props.handleChange(e);
  }

  render() {
    return (
      <div>
        <h3>Billing Information</h3>
        <form>
          Credit Card Number:
            <input name="cc_number" value={this.state.cc_number} onChange={this.handle.bind(this)} /> <br />

            Card Expiration Date:
            <input name="exp_date" value={this.state.exp_date} onChange={this.handle.bind(this)} /> <br />

            CVV:
            <input name="cvv" value={this.state.cvv} onChange={this.handle.bind(this)} /> <br />

            Billing Zip Code:
            <input name="billing_zip" value={this.state.billing_zip} onChange={this.handle.bind(this)} /> <br />

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
  }

  render() {
    const { values: { name, email, password, addressLine1, addressLine2, city, state, zip_code, phone_number, cc_number, exp_date, cvv, billing_zip } } = this.props;
    return (
      <div>
        <h3> Please Confirm Your Details Below Before Purchase </h3>
        <div>
          Name: {name} <br />
          Email: {email} <br />
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