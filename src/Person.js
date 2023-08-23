import React, { Component } from 'react';

export default class PersonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'TestName',
        bio: 'Test description',
        imgSrc:
'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1222357475%2Fvector%2Fimage-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DKuCo-dRBYV7nz2gbk4J9w1WtTAgpTdznHu55W9FjimE%3D&tbnid=6_BE2Bv1oAkV1M&vet=12ahUKEwi01sSknPKAAxWtwwIHHcf1CjAQMygHegQIARB1..i&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fimage-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-gm1222357475-358652058&docid=qFtHIGFNU6ncnM&w=612&h=612&q=placeholder%20img&ved=2ahUKEwi01sSknPKAAxWtwwIHHcf1CjAQMygHegQIARB1',
        profession: 'test',
      },
      intervalId: null,
      elapsedTime: 0,
    };

    this.startTimer();
  }

  componentWillUnmount() {
    this.resetTimer();
  }

  startTimer() {
    const intervalId = setInterval(() => {
      this.setState(prevState => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1000);

    this.setState({ intervalId });
  }

  resetTimer() {
    clearInterval(this.state.intervalId);
    this.setState({
      intervalId: null,
      elapsedTime: 0,
    });
  }

  formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} min $ {remainingSeconds} sec` ;
  };

  render() {
    const { person, elapsedTime } = this.state;

    return (
      <div style={{ textAlign: 'center' }}>
        <h1>{person.fullName}</h1>
        <img alt="img" src={person.imgSrc} />
        <p>{person.bio}</p>
        <p>{person.profession}</p>
        <p>Elapsed Time: {this.formatTime(elapsedTime)}</p>
      </div>
    );
  }
}