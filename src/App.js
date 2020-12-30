// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react';
import './styles/App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import ContentFragment from './components/ContentFragment/ContentFragment'



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      progress: 'content-fragment',
    }
  }

  showContentFragments(){
    this.setState({progress:"content-fragment"})
  }

  showAbout(){
    this.setState({progress:"about"})
  }

  PickView(props){
    let progress = this.state.progress;

    if (progress === 'content-fragment'){
      return <ContentFragment/>
    }

    if (progress === 'about'){
      return <About/>
    }
  }

  render() {
    return (
      <div className="wrapper">
          <Header showContentFragments={this.showContentFragments.bind(this)} showAbout={this.showAbout.bind(this)}/>

          {this.PickView()} 

          <Footer/>
      </div>
    )
  }
}

export default App;
