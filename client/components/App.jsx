import React from 'react';
import { Button, Form, Modal } from 'react-tradeshift-ui/dist/components';
import Warning from './Warning';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    }
    this.submit = this.submit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  submit(e) {
    e.persist();
    e.preventDefault();
    const side1 = e.target.form[1].value;
    const side2 = e.target.form[3].value;
    const side3 = e.target.form[5].value;
    console.log(!!side3);
    if (!!side1 && !!side2 && !!side3) {
      fetch(`/sides/${side1}/${side2}/${side3}`, {
        method: 'GET',
      })
    } else {
      // this.openModal();
      window.alert('Triangles need 3 sides');
    }
  }

  closeModal() {
    this.setState({modal: false});
  }

  openModal() {
    this.setState({modal: true});
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
      <fieldset key="4" >
        <Button className="ts-primary" onClick={(e) => this.submit(e)}>
	        <span>Submit</span>
        </Button>
      </fieldset>,
    ];
    return (
      <div>
        <Form 
        children={formChildren} 
        style={{
          width: '300px',
          display: 'flex',
          flexDirection: 'column'
        }}
        />
        {/* <Modal 
          title="error"
          isOpen={this.state.modal}
          onClose={this.closeModal}
          style={{
            height: '200px',
            width: '300px',
          }}
        >
          <Warning closeModal={this.closeModal} />

        </Modal> */}
      </div>
      
    )
  }
}

export default App;