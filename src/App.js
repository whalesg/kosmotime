import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {

    constructor(props) {
        super(props);
     
        this.state = {
            isFormValid: false,
        };
    }

    isFormValid(valid) {
        this.setState({
            isFormValid: valid
        })
    }

    render() {
        const { isFormValid } = this.state

        return (<div>
            <Form isFormValid={this.isFormValid}></Form>
            <Message isFormValid={isFormValid}></Message>
        </div>);
    }
}

export default App;
