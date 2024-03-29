import React from 'react';
import { Button, Form } from 'react-tradeshift-ui/dist/components';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      triangle: undefined,
    }
    this.submit = this.submit.bind(this);
    
  }

  submit(e) {
    e.persist();
    e.preventDefault();

    const side1 = e.target.form[1].value;
    const side2 = e.target.form[3].value;
    const side3 = e.target.form[5].value;

    if (!!side1 && !!side2 && !!side3) {
      
      axios.get('/triangle/type', {
        params:{
          side1,
          side2,
          side3
        }
      }).then(response => {
        this.setState({triangle: response.data})
      })
      .catch(error => console.log(error));

    } else {
      window.alert('Triangles need 3 sides');
    }
  }

  render() {
    const { triangle } = this.state;
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
      <fieldset key="4" >
        <Button className="ts-primary" onClick={(e) => this.submit(e)}>
	        <span>Submit</span>
        </Button>
      </fieldset>,
    ];

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'row',
      }}>

        <Form 
        children={formChildren} 
        style={{
          width: '300px',
          marginRight: '50px'
        }}
        />

        {triangle && 
          <h2>{`${triangle}`}</h2>
        }

      </div>
      
    )
  }
}

export default App;