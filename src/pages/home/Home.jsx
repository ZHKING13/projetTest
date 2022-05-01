import { useEffect, useState } from "react";
import Feature from "../../components/features/Feature";
import List from "../../components/liste/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import { axiosInstance } from "../../config";
import axios from "axios";
function Home({type}) {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await axios.get(`getListe${type ? '?type' + type : ''}${genre ? '&genre=' + genre : ''
					}`);
        setLists(res.data);
      } catch (error) {
        console.log(error)

      }
    }
    getList()
  }, [genre, type])
  return ( 
    
    <div className='home'>
      <Navbar />
      <Feature type={type} setGenre={setGenre}/>
      {lists.map((list) => (
        <List list={list} />
      ))}
      
    </div>
  )
}
 
export default Home