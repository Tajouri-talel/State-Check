import React,{Component} from "react";
import './App.css';

class App extends Component {

  state = {
    Person: {
      fullName : "TAJOURI Talel",
      bio : "I just like football",
      imgSrc : "TheMe.jpg",
      profession : "futur developper"
    },
    shows : true,
    seconds: 1
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
 
  handleClick=()=>{
    this.setState({...this.state,
      shows: !this.state.shows
    });
  };


  render() {
    return (
      <div className="App">
        {this.state.shows && (
          <div>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="ItiZMe"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
        </div>
        )}

        <button className="button4" onClick={this.handleClick}>Show Person</button>
        <h5>Number of seconds is {this.state.seconds}</h5>
        </div>
    );
  }
}

export default App;
