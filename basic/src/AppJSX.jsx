import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = '찬혁';
  const list = ['우유', '딸기', '바나나', '요거트'];

  return (
    <>
      <h1>hello!</h1>
      <p>{name}</p>
      <ul>
        {
          list.map((item) => (
            <li>{item}</li>
          ))}
      </ul>
    </>
  );
}

export default AppJSX;
