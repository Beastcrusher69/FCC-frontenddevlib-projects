import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

class EditorWrapper extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div id="editor-wrapper">
        <div className="toolbar"></div>
        <textarea id="editor"></textarea>
      </div>
    );
  }
}

class PreviewWrapper extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div id="preview-wrapper">
        <div className="toolbar"></div>
        <div id="preview">
        </div>
      </div>
    );
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div id="app">
        <EditorWrapper/>
        <PreviewWrapper/>
      </div>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('target'));