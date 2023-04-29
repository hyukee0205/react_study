import { Outlet } from 'react-router-dom';
import SeacrchHeader from './components/SeacrchHeader';

function App() {
  return (
    <>
      <SeacrchHeader />
      <Outlet />
    </>
  );
}

export default App;
