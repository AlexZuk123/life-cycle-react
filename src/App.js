import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currDate: new Date()
    };
  }
  /*
  Ставим таймер. Он будет срабатывать каждую секунду
  Каждую секунду будет вызываться функция timerAction
  */
  componentDidMount() {
    this.handlerOfTimer = setInterval(() => this.timerAction(), 1000);
  }
  /*
  Обработчик таймера. Изменяем состояние
  */
  timerAction() {
    this.setState({ currDate: new Date() });
  }
  componentWillUnmount() {
    clearInterval(this.handlerOfTimer);
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.currDate.toLocaleTimeString()}</h1>
      </div>
    );
  }
}