import React, {Component} from 'react';

class App extends Component{

  render(){
    const text = '당신은 어썸한가요?';
    const condition = true;

    return(
      <div>
        <h1>리액트 안녕!</h1>
        <h2>{text}</h2>
        {
          // condition ? '참' : '거짓'
          // condition ? '보여주세요': null
          condition && '보여주세요'
        }
      </div>
    );
  }
}

export default App;