import { useState, useEffect} from 'react';
import { LoadImages, SearchImages } from './components/api';
import './App.css';
import Image from './components/image';


function App() {
const [query, setQuery ] = useState()
const [searchQ, setSearch ] = useState()
 const data =  LoadImages();
 const search =() => {
    setSearch(query)
 }
 const searchData = SearchImages(searchQ);
 console.log(searchData)
  return (
    <div className="App">
      
      <div>
        <center>
         <input type="text" onChange={(e) => setQuery(e.target.value)} /> 
         <button id="btn" onClick = {search} >Submit </button>
          
         </center>  
      </div>
      <br />
      <div className="contain">
       
        {searchQ ? searchData.map((img, key) => (
            <Image src={img.urls.thumb} key={key}></Image>
        )) : data.map((img, key) => (
            <Image src={img.urls.thumb} key={key}></Image>
        ))}
      </div>
    </div>
  );
}

export default App;
