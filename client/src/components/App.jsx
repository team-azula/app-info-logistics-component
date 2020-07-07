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
    axios.get(`http://localhost:3004/apps/${this.state.id}`)
      .then(res => {
        this.setState({
          app: res.data[0]
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