/*global React*/
/*global ReactDOM*/

//Part One: Implement the TODO App from here: https://goo.gl/vySbPk
//Part Two: Add a delete button to each list element.

var DeleteButton = React.createClass({
  deleteItem: function() {
    //TODO: call the props.onDelete function.
    this.props.onDelete(this.props.index)
  },
  render: function() {
    //TODO: Render delete button and set onClick to deleteItem.
    return (
      <button onClick={this.deleteItem}>Delete</button>
    );
  }
});

function List(props) {
  //TODO: Create list from props.
  return (<ul>
        {
      props.items.map(function(item, index) {
        return <li id={index} key={index}>
          {item}
          <DeleteButton index={index} onDelete={props.onDelete}/>
        </li>;
      })}
    </ul>);
};

var App = React.createClass({
  getInitialState: function() {
    //TODO: Set the initial state.
    return {
      term: '',
      items: []
    };
  },
  onChange: function(event) {
    //TODO: Save current value in input field.
    this.setState({ term: event.target.value });
  },
  onSubmit: function(event) {
    //TODO: Add to list.
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.term]
    });
  },
  onDelete: function(index) {
    //TODO: Delete index from items and setState to new value.
    var newArray = this.state.items.splice(index, 1);
    console.log(newArray, index)
    this.setState({items: this.state.items})
  },
  render: function() {
    //TODO: Add event handlers to input and button.
    return (
      <div>
        <h2>Todo List</h2>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange}/>
          <button>Add</button>
        </form>
        <List items={this.state.items} onDelete={this.onDelete} />
      </div>
    );
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('container')
);
