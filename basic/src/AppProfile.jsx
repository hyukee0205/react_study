import './App.css';
import Avarta from './components/Avarta';
import Profile from './components/Profile';

function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert('버튼이 출력됨');
  };

  return (
  <>
    <button onClick={handleClick}>버튼</button>
    <Profile image="https://i.pinimg.com/564x/43/a8/dd/43a8dd566b3b0d4fe59e9869bfb40b9b.jpg"
    name='찬혁'
    title='프론트엔드 개발자'
    state={true}
    />
    <Profile image="https://i.pinimg.com/564x/43/a8/dd/43a8dd566b3b0d4fe59e9869bfb40b9b.jpg"
    name='찬혁2'
    title='프론트엔드 개발자2'
    />
    <Profile image="https://i.pinimg.com/564x/43/a8/dd/43a8dd566b3b0d4fe59e9869bfb40b9b.jpg"
    name='찬혁3'
    title='프론트엔드 개발자3'
    />
    <Avarta image="https://i.pinimg.com/564x/43/a8/dd/43a8dd566b3b0d4fe59e9869bfb40b9b.jpg" state={true}/>
    <Avarta image="https://i.pinimg.com/564x/43/a8/dd/43a8dd566b3b0d4fe59e9869bfb40b9b.jpg" state={true}/>
    <Avarta image="https://i.pinimg.com/564x/43/a8/dd/43a8dd566b3b0d4fe59e9869bfb40b9b.jpg" state={true}/>
  </>
  );
}

export default AppProfile;
