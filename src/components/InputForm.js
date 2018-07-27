import React from 'react'

class InputForm extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
        }   
      }
    
      onSubmit = (e) => {
          e.preventDefault()
          e.target.reset()
          let text = document.querySelector("#message")
          document.querySelector('#application-preview').textContent = ""
          text.textContent = "Your application was submitted!"
      }

      updatePreview = () => {
        const preview = document.querySelector('#application-preview');
        const text = document.querySelector('#application-text').value;
        preview.textContent = text;
      } 

    render(props) {
        return (
            <div>
                <form id="application-input" onSubmit={this.onSubmit}>
                    <label>Apply Here: </label>
                    <textarea onChange={this.updatePreview} id="application-text" rows="8" cols="100"></textarea>
                    <input  id="submit" type="submit" value="Submit" />
                </form>
                <p id="message">&nbsp;</p>
            </div>
        )
    }

}
export default InputForm






