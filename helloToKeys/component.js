function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Timothy" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
