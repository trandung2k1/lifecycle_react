import Parent from './Parent';

export default class Child extends Parent {
  constructor(props) {
    super(props);
    this.state = {
      msg: this.callMe(),
    };
  }
  render() {
    return (
      <div>
        <h1>Child Component</h1>
        <p>{this.state.msg}</p>
      </div>
    );
  }
}
