import React from 'react';
import { Form } from 'react-tradeshift-ui/dist/components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    e.persist();
    e.preventDefault();
    const side1 = e.target.form[1].value;
    const side2 = e.target.form[3].value;
    const side3 = e.target.form[5].value;
    console.log(side3);
   
    fetch(`/sides/${side1}/${side2}/${side3}`, {
      method: 'GET',
    })
  }

  render() {
    const formChildren = [
      <fieldset key="1">
        <label>
          <span>Side One</span>
          <input type="number" name="side-one" required />
        </label>
      </fieldset>,
      <fieldset key="2">
        <label>
          <span>Side Two</span>
          <input type="number" name="side-two" required />
        </label>
      </fieldset>,
      <fieldset key="3">
        <label>
          <span>Side Three</span>
          <input type="number" name="side-three" required />
        </label>
      </fieldset>,
      <fieldset key="4" style={{
        display: 'flex',
        justifyContent: 'flex-end'
      }} >
        {/* <input 
        type="submit" 
        value="Sumbit" 
        onClick={(e) => this.submit(e)}
        style={{
          width: '50%'
        }}
        /> */}
        <button data-ts="Button" className="ts-primary" onClick={(e) => this.submit(e)}>
	        <span>Submit</span>
        </button>
      </fieldset>,
    ];
    return (
      <Form 
      children={formChildren} 
      style={{
        width: '300px',
        display: 'flex',
        flexDirection: 'column'
      }}
      />
    )
  }
}

export default App;