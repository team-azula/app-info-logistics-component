import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Info from './Info.jsx';
import Rating from './Rating.jsx';
import AdditionalInfo from './AdditionalInfo.jsx';

class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      app: {},
      id: this.props.id || 1
    }
  }

  componentDidMount() {
    axios.get(`http://ec2-3-23-61-11.us-east-2.compute.amazonaws.com/apps/${this.state.id}`)
      .then(res => {
        this.setState({
          app: res.data
        });
      })
      .catch(err => {
        if(err) {
          console.log('Error getting data', err);
        }
      })
  }

  render() {
    return (
      <div>
        <Info app={this.state.app} />
      </div>
    )
  }
}

export default App1;
