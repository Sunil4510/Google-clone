import React from 'react'
import "./Home.css";
import { Link } from 'react-router-dom'
import AppsIcon from "@material-ui/icons/Apps"
import { Avatar } from '@material-ui/core';
import google from "./google.png"
import SearchBar from '../Components/SearchBar';

const Home = () => {
    return (
        <React.Fragment>
        <div className="home">
            
            <div className="home_header">
                <div className="home_header_left">
                <Link to="/about">About</Link>
                <Link to="/store">Store</Link>

                    {/*link */}
                    {/*link */}
                </div>
                <div className="home_header_right">
                  {/*link */}
                    {/*link */}
                    {/*link */}
                    {/*link */}
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon/>
                    <Avatar/>
                </div>
            </div>

            <div className="home_body">
                    <img
                    alt="google"
                    src={google}
                    />

                    <div className="home_inputContainer">
                        {/*Search Input */}
                        <SearchBar/>
                    </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Home
