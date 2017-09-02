import axios from 'axios'

class AddTask extends React.Component {
  constructor() {
    super()
    
    this.state = {
      taskText: ''
    };
    
    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    return (
      <div className="top">
        <span>Add a task</span>
        <input type="text" value={this.state.taskText} onChange={this.handleChange} />
        <button onClick={this.props.addTask.bind(this, this.state.taskText)}>Add</button>
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      taskText: event.target.value
    });
  }
}

export default AddTask