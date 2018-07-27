import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import JobDetails from './components/JobDetails';
import InputForm from './components/InputForm';
import Preview from './components/Preview';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
    }   
  }
 
  componentDidMount() {
    let apiURL = "./listing.json";
    fetch(apiURL)
    .then(response => response.json())
    .then(response =>
      this.setState({ data: response})
    )
  }

  tog = () => {
    const preview = document.querySelector('#application-preview');
    preview.classList.toggle('hidden');
  }

  render() {
    return (
      <div className="App">
       <Header />
       <main>
        <JobDetails list={this.state.data}/>
        <InputForm />
        <Preview tog={this.tog}/>
       </main>
       <Footer />
      </div>
    );
  }
}

export default App;
