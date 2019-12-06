import React, { Component } from 'react';
import Menu from './Menu'

class App1 extends Component {
    constructor(props) {
    super(props);

    this.state = {
      isTop: true
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }

  render() {
    return (
  <div style={{ height: 'auto' }}>
<h2 style={{ position: 'fixed', top: 0,width:'100%',backgroundColor:'white','box-shadow': '0px 5px 10px 0px rgb(111, 111, 124)',
    zIndex:'999',}}>
           {this.state.isTop ? '' : <Menu/>}</h2>
      </div>
    );
  }
} 

export default App1;