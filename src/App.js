import './App.css';
import Familias from './Components/Familias';
import Header from './Components/Header';
import Membros from './Components/Membros';

/** IMAGES */
import stark from './img/familias/Stark.png'
import lannister from './img/familias/lannister.png'
import baratheon from './img/familias/baratheon.png'
import targaryen from './img/familias/targaryen.png'
import greyjoy from './img/familias/greyjoy.png'
import tyrell from './img/familias/tyrell.png'
import martell from './img/familias/martell.png'
import tully from './img/familias/tully.png'
import arryn from './img/familias/arryn.png'


import axios from 'axios';
import { useEffect, useState } from 'react';



function App() {
  const [familias, setFamilias] = useState([]);
  const [clickData, setClickdata] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("https://thronesapi.com/api/v2/Characters");
        setFamilias(response.data)
        setClickdata(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    getUser()
  }, [])

  const handleButtonClick = (houseName) => {
    const filteredHouses = familias.filter(item => item.family === houseName);
    setClickdata(filteredHouses);
    console.log(clickData)
  };

  return (
    <div className="App">
      <Header className="container mx-auto mt-10" />
      <div className='flex container mx-auto mt-28'>
        <div className='w-[35%] mx-4'>
          <h6 className='text-zinc-400 text-sm my-8'>FAMILIAS</h6>
          <button className='w-full' onClick={() => handleButtonClick('House Stark')}>
          <Familias familyImg={stark} familyText={"House Stark"}/>
          </button>
          <button className='w-full' onClick={() => handleButtonClick('House Lannister')} >
          <Familias familyImg={lannister} familyText={"House Lannister"}/>
          </button>
          <button className='w-full' onClick={() => handleButtonClick('House Baratheon')}>
          <Familias familyImg={baratheon} familyText={"House Baratheon"} />
          </button>
          <button className='w-full' onClick={() => handleButtonClick('House Targaryen')} >
          <Familias familyImg={targaryen} familyText={"House Targaryen"}/>
          </button>
          <button className='w-full' onClick={() => handleButtonClick('House Greyjoy')}>
          <Familias familyImg={greyjoy} familyText={"House Greyjoy"} />
          </button>
          <button className='w-full' onClick={() => handleButtonClick('House Tyrell')} >
          <Familias familyImg={tyrell} familyText={"House Tyrell"}/>
          </button>
          <button className='w-full' onClick={() => handleButtonClick('House Martell')} >
          <Familias familyImg={martell} familyText={"House Martell"}/>
          </button>
          <button className='w-full' onClick={() => handleButtonClick('House Tully')}>
          <Familias familyImg={tully} familyText={"House Tully"} />
          </button>
          <button className='w-full'  onClick={() => handleButtonClick('House Arryn')}>
          <Familias familyImg={arryn} familyText={"House Arryn"} />
          </button>
        </div>
        <div className='w-[75%] mx-36'>
          <h6 className='text-zinc-400 text-sm my-8'>MEMBROS</h6>
          {
            clickData.map((clickData, index) => {
              return (
                <Membros key={index} membrosImg={clickData.imageUrl} membrosName={clickData.fullName} membrosTitle={clickData.title} />
              )
            })
          }
        </div>
      </div>
       
    </div>
  );
}

export default App;
