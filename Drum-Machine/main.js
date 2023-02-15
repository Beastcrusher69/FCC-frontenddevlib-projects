import React from "https://cdn.skypack.dev/react@17.0.1";
import reactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

class DrumMachine extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div id="drum-machine">
        <div id="keys">
          
          <button class="drum-pad" id="">
            <audio class="clip" src="">Q</audio>
          </button>
          
          <button class="drum-pad" id="">
            <audio class="clip" src=""></audio>
          </button>
          
          <button class="drum-pad" id="">
            <audio class="clip" src=""></audio>
          </button>
          
          <button class="drum-pad" id="">
            <audio class="clip" src=""></audio>
          </button>
          
          <button class="drum-pad" id="">
            <audio class="clip" src=""></audio>
          </button>
          
          <button class="drum-pad" id="">
            <audio class="clip" src=""></audio>
          </button>
          
          <button class="drum-pad" id="">
            <audio class="clip" src=""></audio>
          </button>
          
          <button class="drum-pad" id="">
            <audio class="clip" src=""></audio>
          </button>
          
          <button class="drum-pad" id="">
            <audio class="clip" src=""></audio>
          </button>
          
        </div> 
        <div id="display">
          djdjdj
        </div> 
      </div> 
    )
  }
}

ReactDOM.render(<jay/>,document.getElementById('target'));