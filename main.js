import React from 'react';
class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img src={this.props.src} alt={this.props.title} />
        <p> {this.props.description} </p>
      </>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <HornedBeasts
          title="String"
          src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
          description="A norwhal horned beast."
        />

        <HornedBeasts
          title="String"
          src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
          description="A norwhal horned beast."
        />

        <HornedBeasts
          title="String"
          src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
          description="A norwhal horned beast."
        />
      </>
    );
  }
}

export default Main;