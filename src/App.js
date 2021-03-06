import React, {Component} from 'react';
import './App.css'

class App extends Component{
  render(){
    const text = '당신은 어썸한가요?';
    const condition = true;
    const style = {
      backgroundColor: 'gray',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: 'all',
      MozTransition: 'all',
      msTransition : 'all'
    };
    
    return(
      <div className="my-div">
        {/* 요소 밖에서는 이렇게 작성해요. */}
        <h1>리액트 안녕!</h1>
        <h2>{text}</h2>
        {condition && '보여주세요'}
        <div style={style}
        // self-closed 태그에서만 작동하는 주석
        // 마지막 />가 꼭 새줄에 있어야 합니다.
        /* 이렇게 작성할 수 도 있음 */
        ></div>
        // 여기 쓰는건 그대로 렌더링 됩니다.
        /* 여기에선 주석 못써요 */
      </div>
    );
  }
}

export default App;