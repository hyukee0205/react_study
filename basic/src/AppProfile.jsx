import './App.css';
import Avartar from './components/Avartar';
import Profile from './components/Profile';


function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert('버튼이 클릭됨!');
  };
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Avartar
        image='https://i.pinimg.com/564x/57/0a/2f/570a2fe0774be36997a2851e1046887b.jpg'
        isNew='true'
      />
      <Profile
        image='https://i.pinimg.com/564x/57/0a/2f/570a2fe0774be36997a2851e1046887b.jpg'
        name='chan hyuk'
        title='프론트엔드 개발자'
        isNew='true'
      />
      <Profile
        image='https://i.pinimg.com/736x/1b/a6/5c/1ba65cce32ca5b4b612e3a80fe5d42c3.jpg'
        name='jeon hyuk'
        title='엔지니어' />
      <Profile
        image='https://i.pinimg.com/564x/52/d3/bd/52d3bd56d6059d2f4ff0b27dbcb81177.jpg'
        name='hyuk'
        title='백엔드 개발자' />
    </>
  );
}

export default AppProfile;
