import './App.css';
import {BrowserRouter, Routes, Route, NavLink, useParams} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
      <h1>Hello, React Router Dom</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="topics">Topics</NavLink></li>
        <li><NavLink to="contact">Contact</NavLink></li>
      </ul>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="topics/*" element={<Topics />} />
        <Route path="contact/*" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}


var contents = [
  {id:1, title:'HTML', comp:<Topics1 />},
  {id:2, title:'JS', comp:<Topics2 />},
  {id:3, title:'React', comp:<Topics3 />},
]


function Topics() {
  var lis = [];
  for(var i=0; i < contents.length; i++) {
    lis.push(
      <li key={contents[i].id}>
        <NavLink to={"topics/" + contents[i].id}>
        {contents[i].title}
        </NavLink>
      </li>
    )
  }


  return (
    <div>
      <h2>Topics</h2>
      Topics...
      <ul>
        {lis}
      </ul>
      <Routes>
        <Route path="topics/:topic_id" element={<Topic />} />
      </Routes>
    </div>   
  );
}


function Topic() {
  var params = useParams();
  console.log(params);
  
  var topic_id = params.topic_id;
  var selected_comp = {
    comp:<NotFound />
  };

  for(var i=0; i < contents.length; i++) {
    if(contents[i].id === Number(topic_id)){
      selected_comp = contents[i];
      break;
    } 
  }

  return (
    <div>
      {selected_comp.comp}
    </div>
  )
}






function Topics1() {
  return (
    <div>
      <h2>HTML</h2>
      HTML is ...
    </div>
  );
}

function Topics2() {
  return (
    <div>
      <h2>JS</h2>
      JS is...
    </div>
  );
}

function Topics3() {
  return (
    <div>
      <h2>React</h2>
      React is...
    </div>
  );
}



function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

const NotFound = () => {
  return (
    <div>
      <h2>NotFound</h2>
      NotFound...
    </div>
  );
}



export default App;
