import React from 'react';
import {format} from 'timeago.js';
import {useNavigate} from 'react-router-dom';

export default function VideoCard({ video }) {
  const {title, thumbnails, channelTitle, publishedAt} = video.snippet;
  const navigate = useNavigate();

  return (
    <li onClick={() => {
      navigate(`videos/watch/${video.id}`, {state:{video}});
    }}>
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{format(publishedAt)}</p>
      </div>
    </li>
  );
}
