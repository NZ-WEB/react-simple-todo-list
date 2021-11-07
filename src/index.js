import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';
import reportWebVitals from './reportWebVitals';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 26,
      nationality: 'ru'
    }
    // this.nextYear = this.nextYear.bind(this);

    // this.nextYear = () => {
    //   this.setState(state => ({
    //         years: ++state.years
    //     }))
    // }

  }

  nextYear = () => {
    this.setState(state => ({
      years: ++state.years
    }))
  }

  // nextYear() {
  //   console.log(1);
  //   // this.state.years++
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  // }

  render() {
    const {name, surname, link} = this.props;
    const {years} = this.state
    return (
      <>
        <button onClick={this.nextYear}> ++ </button>
        <h1>My name is {name}, surname — {surname}, years — {years}</h1>
        <a href={link}>My Profile</a>
      </>
    )
  }
}

const All = () => {
  return (
    <>
      <WhoAmI name="John" surname="Lennon" linl="facebook.com"/>
      <WhoAmI name="Knigga" surname="aWfw" linl="vk.com"/>
      <WhoAmI name="Awgust" surname="Pennis" linl="facebook.com"/>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
