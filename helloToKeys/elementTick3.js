class Clock extends React.Component {
  constructor(props) {                           //We will move the date from props to state in three steps
    super(props);                                //1) Replace this.props.date with this.state.date in the render() method:
    this.state = {date: new Date()};            //2) Add a class constructor that assigns the initial this.state:
  }                                             //Class components should always call the base constructor with props
                                                //3) Remove the date prop from the <Clock /> element:
  render() {                                   //We will later add the timer code back to the component itself.             
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
