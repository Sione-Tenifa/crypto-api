import './App.css';
import {useEffect, useState} from 'react'
import Axios from 'axios'
import Coin from './components/Coin'

function App() {
  const [coins, setListCoins] = useState([])
  const [searchWord, setSearchWord] = useState([])

  useEffect(() =>{
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then((res)=>{
      setListCoins(res.data.coins)
    })
  }, [])

  const searchCoins = coins.filter((c) => {
    return c.name.toLowerCase().includes(searchWord.toLowerCase())
  })
  return (
  <div className="App">
    <div className="cryHead">
      <input type='text' placeholder='Bitcoin..' onChange={(e) => {setSearchWord(e.target.value)}}></input>
    </div>
    <div className="cryDisplay">{searchCoins.map((c) => {
      return <Coin name={c.name} icon={c.icon} price={c.price} symbol={c.symbol}/>
      })}</div>
  </div>
 )
}

export default App;
