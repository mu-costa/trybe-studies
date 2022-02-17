import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <>
      <div id='header'>
          <Header/>
      </div>
     
      <div className='main-cards'>
          <Content/>
      </div>

      <div id='footer'>
          <Footer/>
      </div>
      
    </>   
  );
}

export default App;
