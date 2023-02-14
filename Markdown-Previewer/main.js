import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

class EditorandPreview extends React.Component{
  constructor(props){
    super(props);
    
    this.state={
      text:""
    }
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event){
    this.setState({
      text:event.target.value
  });
 }
 
  render(){
    const { text } = this.state;
    
    const markdown=marked.parse(text);
    return(
      <div id="app">
      <div id="editor-wrapper">
        <div className="toolbar">Editor</div>
        <textarea id="editor" onChange={this.handleChange}>
          # this is h1 
          ## this is h2
          [a link](www.facebook.com)
          - list item
          &gt; block quote
          `inline code`
          ```
          multiline code
          ```
          **bold**
          ![alternate text](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)</textarea>
      </div>
      
      <div id="preview-wrapper">
        <div className="toolbar"></div>
        <div id="preview" dangerouslySetInnerHTML={{ __html : markdown}}></div>
      </div>
       </div> 
    );
  }
}

ReactDOM.render(<EditorandPreview/>,document.getElementById('target'));