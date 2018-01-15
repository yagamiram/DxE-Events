import React, { Component } from 'react';
import HelloWorld from './HelloWorld'
import FB from './FB'

class App extends Component {
  render() {
    return (
      <div>
          <p> Berkeley Animal Rights Center </p>
          <FB id={171904216553096}/>
          <p> DxE Los Angeles </p>
          <FB id={153660568381244}/>
          <p> Direct Action Everywhere </p>
          <FB id={515856298444724}/>
          <p> Berkeley Coalition For Animals </p>
          <FB id={1241870835861939}/>
          <p> DxE - SF Bay Area </p>
          <FB id={1377014279263790}/>
      </div>
    );
  }
}

export default App;
