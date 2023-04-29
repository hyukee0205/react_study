import React from 'react';
import {useParams} from 'react-router-dom';

export default function Videos() {
  const {keyword} = useParams();
  return (
    <div>
      Videos {keyword ? `검색결과:${keyword}` : '키워드가 없습니다. 핫트렌드를 보여드릴게요!'}
    </div>
  );
}
