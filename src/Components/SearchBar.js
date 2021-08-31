import React, { useState } from 'react'
import SearchIcon from "@material-ui/icons/Search"
import MicIcon from "@material-ui/icons/Mic"
import "./SearchBar.css"
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'
const SearchBar = ({hideButton = false}) => {

//https://cse.google.com/cse/create/new
//https://developers.google.com/custom-search/v1/

    const [{},dispatch] = useStateValue();
    const [input, setinput] = useState('');
    const histroy = useHistory();

    const search = (e)=>{
        e.preventDefault();
        console.log("you hit the search >>", input);
        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term : input,
        });
        histroy.push("/search");
            
    }
    return (
        <form className="search">
            <div className="search_input">
                <SearchIcon className="search_inputIcon"/>
                <input type="text" value={input} onChange={(e)=>{setinput(e.target.value)}}/>
                <MicIcon/>
            </div>
                {!hideButton?(
                    <div className="search_buttons">
                    <Button type="submit" variant="outlined" onClick={search}>Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
                ):(
                    <div className="search_buttons">
                    <Button className="search_buttonsHidden" type="submit" variant="outlined" onClick={search}>Google Search</Button>
                    <Button className="search_buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
                </div>
                )}
            
        </form>
       
    )
}

export default SearchBar
