import './App.css';
import Profile from './components/Profile';

function AppProfile() {

  return (
    <>
      <Profile 
        image='https://i.pinimg.com/564x/f7/1d/60/f71d60f5abcf4d4cebc4dc33dd44c925.jpg'
        name='chanhyuk Jeon'
        title='프론트엔드 개발자'
        isNew={true}
      />
      <Profile 
        image='https://i.pinimg.com/564x/f7/1d/60/f71d60f5abcf4d4cebc4dc33dd44c925.jpg'
        name='전찬혁1'
        title='백엔드 개발자'
      />
      <Profile 
        image='https://i.pinimg.com/564x/f7/1d/60/f71d60f5abcf4d4cebc4dc33dd44c925.jpg'
        name='전찬혁3'
        title='풀스택 개발자'
      />
    </>
  );
}

export default AppProfile;
