import React, { Component } from 'react'; // 클래스 방식 사용을 위한 클래스 로딩

class TOC extends Component {
    render() {
      console.log('TOC 렌더링 완료')
      var lists =[];
      var data = this.props.data;
      var i = 0;
      while( i < data.length){
        lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
        i = i + 1;
      }
      return (
        <nav>
            <ul>
              {lists}
            </ul>
        </nav>
      );
    }
  }

export default TOC; // 해당 파일을 import 했을 때 외부에서 이 페이지의 변수, 함수 등을 사용 가능하도록 허용