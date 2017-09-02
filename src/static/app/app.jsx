import Service from './service';
import AddTask from './addTask';
import TaskList from './taskList';

export default class App extends React.Component {
  constructor() {
    super();

    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.update = this.update.bind(this)
    this.service = new Service()

    this.state = {
      taskList: []
    };
  }

  componentDidMount() {
    this.update()
  }

  render() {
    return (
      <div className="content">
        <AddTask addTask={this.addTask} />
        <TaskList taskList={this.state.taskList} deleteTask={this.deleteTask} />
      </div>
    )
  }

  addTask(text) {
    if (text === '') {
      alert('Plese enter some text.')
    }

    const index = this.state.taskList.indexOf(text);
    
    if (index === -1) {
      this.service.addTask(text).then(this.update)
    } else {
      alert('Task already exists.')
    }
  }

  deleteTask(task) {
    if (confirm('Are you sure')) {
      this.service.deleteTask(task).then(this.update)
    }
  }

  update() {
    this.service.getTasks().then((results) => {
      this.setState({
        taskList: results
      });
    });
  }
}