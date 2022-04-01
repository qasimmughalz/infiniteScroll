import logo from './logo.svg';
import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
import { CustomPagination } from './Components/CustomPagination';


function App() {

  const [mypokeman, setMyPokeman] = useState([])

  let offset = 10;
  const loadmore = ()=> {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=15&offset=${offset}`)
    .then(({data})=> {
        const temp = []
        data.results.forEach(p =>  temp.push(p.name))
        setMyPokeman( (val)=> [...val , ...temp])
    }) 
    offset +=10;
  }

  function handleScroll(e){
    
      if(e.target.documentElement.scrollTop + window.innerHeight >= e.target.documentElement.scrollHeight){
          loadmore()
      }
  }
  
  useEffect(()=>{
    loadmore()
    window.addEventListener("scroll", handleScroll)
  }, [])






  return (
    <div className="App">
        <CustomPagination></CustomPagination>
    </div>
  );
}

export default App;
