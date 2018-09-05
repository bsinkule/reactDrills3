import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import JobDetails from './components/JobDetails'
import InputForm from './components/InputForm'
import Preview from './components/Preview'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      text: '',
      isHidden: true,
      isToggleOn: false
    }   
  }
 
  componentDidMount() {
    let apiURL = "./listing.json"
    fetch(apiURL)
    .then(response => response.json())
    .then(response =>
      this.setState({ data: response})
    )
  }

  togglePreview = () => {
    this.setState(prevState => ({
      isHidden: !prevState.isHidden
    }))
  }

  inputHandler = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  onSubmit = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn,
      text: ''
    })    
  }

  render() {
    return (
      <div className="App">
       <Header />
       <main>
        <JobDetails list={this.state.data}/>
        <InputForm isToggleOn={this.state.isToggleOn} onSubmit={this.onSubmit} value={this.state.text} onInput={this.inputHandler}/>
        <button onClick={this.togglePreview}>Show Preview</button>
        {!this.state.isHidden ? <Preview value={this.state.text}/> : null}
       </main>
       <Footer />
      </div>
    )
  }
}

export default App

