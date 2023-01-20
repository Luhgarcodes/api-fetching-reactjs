import React from 'react';
import {useEffect,useState}  from 'react';
import Form from './Form';
// import List from './List';
import Table from './Table';

function App (){

  const API_URL = 'https://jsonplaceholder.typicode.com/'
  // const API_URL = 'http://localhost:8000/';
  const [reqType, setReqType] = useState("users");
  const[items,setItems] = useState([]);
  // const[fetchError,setFetchError] = useState(null);

  useEffect(() =>{
    const fetchItems = async() =>{
      try{
        const response = await fetch (`${API_URL}${reqType}`);
        if(!response.ok) throw Error ("error-launched");
        const data = await response.json();        
        setItems(data);
      }catch(err){
        console.log(err.stack); 
      }      
    }
    fetchItems();
  },[reqType])     

  return(

      <div className="App">
        <Form reqType = {reqType} setReqType = {setReqType} />
        {/* <List items={items} /> */}
        <Table items={items} />
      </div>
      )}
export default App;

//mar 2006
//mar 2007
//aug 2008
//sep 2008 