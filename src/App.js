import './App.css';
import { JitsiMeeting } from '@jitsi/react-sdk';
import { useState, useEffect } from 'react';
import { Readability } from '@mozilla/readability'
// const ReactJSDOM = require('react-jsdom');
import axios from 'axios';

function App() {

  const [newsContent,setNewsContent] = useState([])

  useEffect(() => {
    getNews();
    console.log(newsContent)
  }, [])
  
  const getNews = async() => {
    return await axios.get('https://newsapi.org/v2/everything?q=autism&language=en&searchIn=title&apiKey=13d38e5b8a7342019d4fb51073faacba').then(result =>{
      setNewsContent(result.data.articles);
    } )
  }
  const handleClick = (value) => {
    // window.location.replace(value)
    window.open(value, "_blank", "noreferrer");
  }
  return (
    <div className="App">
        {/* <JitsiMeeting roomName={ 'test room' }
          getIFrameRef = { node => node.style.height = '800px'}></JitsiMeeting> */}
          <div>
            <ul>
            {newsContent.map((news,index) => {
              return <li key={index} onClick={()=>handleClick(news.url)} target="_blank" style={{cursor: 'pointer', marginBottom: '10px'}}>{news.content}</li>
            })}
            </ul>
          </div>
    </div>
  );
}

export default App;
