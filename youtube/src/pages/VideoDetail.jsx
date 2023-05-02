import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
  const {state:{video}} = useLocation();
  const {title, channelId, channelTitle, description} = video.snippet;
  
  return (
    <section>
      <article>
        <iframe
          width='100%'
          height={640}
          type='text/html'
          id='player' 
          src={`http://www.youtube.com/embed/${video.id}`} 
          frameBorder="0" 
        />
        <div>
          <h2>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre>{description}</pre>
        </div>
        <section>
          <RelatedVideos id={video.id} />
        </section>
      </article>
    </section>
  )
}
