import { useEffect, useState } from "react";
import { Search } from "../components/Search"
import {Songs} from "../components/Songs";
import {getSongs} from "../services/api-client";
import { Player } from "../components/Player";
import { Song } from "../components/Song";

export const SearchPage =()=>{
    const [allSongs, setSongs] = useState([]);
    const[flag, setFlag] = useState(false);
    const[Song, setPlayerSong] = useState([]);


    const loadSongs =  async ()=>{
        setSongs(await getSongs('Latest Songs'));
    }
    useEffect( ()=>{
        loadSongs();
       

    },[])

    const togglePlayer =(flag, songarg)=>{
        console.log('Flag', flag, 'Song Object', songarg);
        setPlayerSong(songarg);
        setFlag(flag);

    }
    const  getArtistName = async (artistName)=>{
        console.log('Rec Artist NAme', artistName);
        setSongs(await getSongs(artistName));

    }
    const jsx =<> <Search fn ={getArtistName}/>
    <Songs fn ={togglePlayer} allSongs = {allSongs} />
    </>
   return (
    <div className ="container">
        <h1 className= "alert alert-primary text-center">Music Store</h1>
        
        {flag?<Player fn={togglePlayer} song= {Song} />:jsx}
   
   
   </div>);
}