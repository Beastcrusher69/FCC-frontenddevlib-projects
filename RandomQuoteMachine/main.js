
import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1"

const quoteAndAuthor = [
  {text:'“Be yourself; everyone else is already taken.”',
   author:'― Oscar Wilde'},
  
  {text:'“I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.”' ,
   author:'― Marilyn Monroe'},
  
  {text:'“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.”' ,
   author:'― Albert Einstein'},
  
  {text:'“So many books, so little time.”' ,
   author:'― Frank Zappa'},
  
  {text:'“A room without books is like a body without a soul.”' ,
   author:'― Marcus Tullius Cicero'},
  
  {text:'“Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.”' ,
   author:'― Bernard M. Baruch'},
  
  {text:'“You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.”' ,
   author:'― Dr. Seuss'},
  
  {text:'“You only live once, but if you do it right, once is enough.”' ,
   author:'― Mahatma Gandhi'},
  
  {text:'“In three words I can sum up everything I\'ve learned about life: it goes on.”' ,
   author:'― Robert Frost'},
  
  {text:'“If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.”' ,
   author:'― J.K. Rowling'},
  
  {text:'“If you tell the truth, you don\'t have to remember anything.”' ,
   author:'― Mark Twain'},
  
  {text:'“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”' ,
   author:'― C.S. Lewis'},
  
  {text:'“A friend is someone who knows all about you and still loves you.”' ,
   author:'― Elbert Hubbard'},
  
  {text:'“To live is the rarest thing in the world. Most people exist, that is all.”' ,
   author:'― Oscar Wilde'},
  
  {text:'“Without music, life would be a mistake.”' ,
   author:'― Friedrich Nietzsche'},
  
  {text:'“I am so clever that sometimes I don\'t understand a single word of what I am saying.”' ,
   author:'― Oscar Wilde'},
  
  {text:'“Let me live, love, and say it well in good sentences.”' ,
   author:'– Sylvia Plath'},
  
  {text:'“Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.”' ,
   author:'– Voltaire'},
  
  {text:'“Life is tough my darling, but so are you.”' ,
   author:'– Stephanie Bennett Henry'},
  
  {text:'“Amateurs sit and wait for inspiration, the rest of us just get up and go to work.”' ,
   author:'– Stephen King'}
]

const colors=[
  "#C39BD3",
  "#7FB3D5",
  "#76D7C4",
  "#F7DC6F",
  "#F5B041",
  "#CACFD2",
  "#2C3E50",
  "#F5B7B1"
]

let randNum = Math.floor(Math.random()*quoteAndAuthor.length);
let randNumForColor = Math.floor(Math.random()*colors.length);
document.body.style.backgroundColor=colors[randNumForColor];

class QuoteBox extends React.Component {
  constructor(props){
    super(props);
    
    this.state={
      currentQuote:quoteAndAuthor[randNum].text,
      currentAuthor:quoteAndAuthor[randNum].author
    }
    
    this.handleClick=this.handleClick.bind(this);
}
  handleClick(){
    randNum = Math.floor(Math.random()*quoteAndAuthor.length);
    
    this.setState({
    currentQuote:quoteAndAuthor[randNum].text,
    currentAuthor:quoteAndAuthor[randNum].author
    });
   randNumForColor = Math.floor(Math.random()*colors.length);
        
document.body.style.backgroundColor=colors[randNumForColor];
    
}
  render(){
    return (<div id="quote-box">
        <div id="text-box">
        <span id="text">{this.state.currentQuote}</span>
        <span id="author">{this.state.currentAuthor}</span>
    </div>
        <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet Quote</a>
        <button id="new-quote" onClick={this.handleClick}>New Quote</button>
      
    </div>);
}
} 

ReactDOM.render(<QuoteBox/>,document.getElementById('target'));