import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import EmptyPage from './component/EmptyPage';
import styles from './App.module.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path="/" element={<DayList/>} />
        <Route path="/day/:day" element={<Day/>}/>
        <Route path="/create_word" element={<CreateWord/>}/>
        <Route path="/create_day" element={<CreateDay/>}/>
        <Route path="*" element={<EmptyPage/>}/>
      </Routes>
    </div>      
    </BrowserRouter>
  );
}

export default App;
