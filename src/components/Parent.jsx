import React from 'react';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.callMe = this.callMe.bind(this);
  }
  // ParentClass function
  callMe() {
    return 'Parent';
  }
  render() {
    return false;
  }
}
export default Parent;
