import React from 'react'

class InputForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
        }   
      }
    
      handleSubmit = (e) => {
          e.preventDefault()
          this.props.onSubmit()
      }

    render() {
        return (
            <div>
                <form id="application-input" onSubmit={(e)=> this.handleSubmit(e)}>
                    <label>Apply Here: </label>
                    <textarea value={this.props.value} onChange={this.props.onInput} id="application-text" rows="8" cols="100"></textarea>
                    <input  id="submit" type="submit" value="Submit" />
                    {this.props.isToggleOn ? <p>Your application was submitted!</p> : ""}
                </form>
            </div>
        )
    }
}
export default InputForm






