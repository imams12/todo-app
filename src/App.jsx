import { useRef } from 'react';
import './App.css'
import Home from './pages/Home/Home';

function App() {
  // const nameRef = useRef(null);
  // const nameListRef = useRef(null);

  // const handleSubmit = () => {
  //   const name = nameRef.current.value;
    
  //   if (name === '') return;
      
  //   document.getElementById('nameDisplay').textContent = name;
    
  //   const newListItem = document.createElement('li');
  //   const deleteButton = document.createElement('button')
    
  //   newListItem.textContent = name;
  //   deleteButton.textContent = 'delete'
    
  //   deleteButton.onclick = function (){
  //     // newListItem.parentNode.removeChild(newListItem);
  //     nameListRef.current.removeChild(newListItem);
  //   }

  //   nameListRef.current.appendChild(newListItem)
  //   newListItem.appendChild(deleteButton)

  //   //membersihkan inputan
  //   nameRef.current.value = '';
  // }

  // // function sayHello(name){
  // //   return `welcome ${name}`
  // // }

  // // const name = 'enigmacamp'

  // // function getButtonText(){
  // //   return 'Kirim'
  // // }

  // // const buttonText = {
  // //   text: 'Send'
  // // }

  // const buttonStyle ={
  //   color: 'blue',
  //   backgroundColor:'pink'
  // }

  return (
      // <div className='App'>
      //   <h1 id='nameDisplay'> Enter Name</h1>
      //   <label htmlFor='name' className='name'> Enter Name </label>
      //   <input typeof='text' name='name' ref={nameRef}></input>
      //   {/* <button  style={buttonStyle} onClick={handleSubmit}>{'Send'}</button> */}
      //   {/* <button  className='my-button' onClick={handleSubmit}>{'Send'}</button> */}
      //   <button  type="button" class="btn btn-primary" onClick={handleSubmit}>{'Send'}</button>
      //   <ul ref={nameListRef}></ul>
      // </div>

      <Home/>
  )
}

export default App
