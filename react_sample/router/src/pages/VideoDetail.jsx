import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideoDetail() {
  const {videoId} = useParams();
  // const params = useParams();
  return(
    <div>
      VideoDetail {videoId}
    </div>
  )
}