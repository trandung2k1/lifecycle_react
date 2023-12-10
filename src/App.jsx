import { Component } from 'react';
import ThemeContext from './context/ThemeContext';
import { createRef } from 'react';
import PropTypes from 'prop-types';
import Child from './components/Child';
//Component
class App extends Component {
  //Running after class component mounts
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    console.log('Create instance');

    //State
    // this.state = {};
  }

  //Ref
  inputRef = createRef();

  //State
  state = {
    name: 'Dung',
    count: 0,
  };

  // context
  static contextType = ThemeContext;

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', prevProps, prevState);
    console.log(this.inputRef.current.getBoundingClientRect());
    return null;
  }

  componentDidCatch(error, errorInfo) {
    console.log('componentDidCatch', error, errorInfo);
  }

  componentDidMount() {
    console.log('componentDidMount');
    // this.inputRef.current.focus();
    // fetch('http://localhost:3000/api/hello')
    //   .then((rs) => rs.json())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.error(error));
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState, snapshot);
    if (prevState.count == 5) {
      this.setState({ count: 0 });
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate', nextProps, nextState, nextContext);
    this.forceUpdate(); //
    return false;
  }

  handleChange(e) {
    console.log(this); // App
    this.setState({ name: e.target.value });
  }

  handleClick = () => {
    console.log(this); //App
  };

  // static default props
  static defaultProps = {
    color: 'blue',
  };

  static propTypes = {
    color: PropTypes.string,
  };

  //called after render(re-render)
  static getDerivedStateFromProps(props, state) {
    console.log(props, state);
    return {
      name: 'Dung',
      email: 'trandungksnb00@gmail.com',
    };
  }

  // UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
  //   console.log(nextProps, nextContext);
  // }

  // UNSAFE_componentWillUpdate() {}

  // call it immediately after the constructor
  // UNSAFE_componentWillMount() {
  //   console.log('UNSAFE_componentWillMount');
  // }
  render() {
    // console.log(this); //App
    // const theme = this.context;
    // console.log(theme); //  isBlack: true
    console.log('Render');
    //Props
    // console.log(this.props); // {}
    return (
      <div>
        <h1>App</h1>
        <input
          ref={this.inputRef}
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Click</button>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase Count
        </button>
        <Child />
      </div>
    );
  }
}

export default App;
