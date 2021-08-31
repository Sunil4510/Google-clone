import React from 'react'
import SearchBar from '../Components/SearchBar'
import { useStateValue } from '../Components/StateProvider'
import google from "./google.png"
import "./SearchPage.css";
import Response from "./response";
import useGoogleSearch from './useGoogleSearch';
import { Link } from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"
import ImageIcon from "@material-ui/icons/Image"
import DescriptionIcon from "@material-ui/icons/Description"
import RoomIcon from "@material-ui/icons/Room"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"
const SearchPage = () => {
    const [{term},dispatch] = useStateValue();
    const {data} = useGoogleSearch(term);
   // const data = Response;
    console.log(data);
    //console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage_Header">
                <Link to="/">
                    <img alt="google" src={google}/>
                </Link>
           
                <div className="searchPage_headerBody">
                    <SearchBar hideButton/>
                    <div className="searchPage_options">
                        <div className="searchPage_optionsLeft">
                            <div className="searchPage_option">
                                <SearchIcon/>
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage_option">
                                <DescriptionIcon/>
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage_option">
                                <ImageIcon/>        
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocalOfferIcon/>
                            <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPage_option">
                                <RoomIcon/>
                                <Link to="/maps">maps</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVertIcon/>
                                <Link to="/more">more</Link>
                            </div>
                        </div> 
                        <div className="searchPage_optionsRight">
                            <div className="searchPage_option">
                                <Link to="/settings">Settings</Link>
                            </div>  
                            <div className="searchPage_option">
                                <Link to="/tools">Tools</Link>
                            </div>  
                        </div>
                    </div>
                 </div>
            </div>
            {term && (
                <div className="searchPage_results">
                    <p className="searchPage_resultsCount">
                        About {data?.searchInformation.formattedTotalResults} results
                        ({data?.searchInformation.formattedSearchTime} seconds)
                        for {term}
                    </p>

                    {data?.items.map(item => (
                        <div
                        className="searchPage_result"
                        >
                            <a className="searchPage_result_link" href={item.link}>
                                {item.pagemap?.cse_image?.
                                length>0 && item.pagemap?.
                                cse_image[0]?.src && (
                                    <img
                                        className="searchPage_resultImage"
                                        src={
                                            item.pagemap?.cse_image[0]?.src
                                        }
                                    />   
                                )}   
                            
                            {item.displayLink} 🔽
                            </a>
                            <a classname="searchPage_result_title"
                            href={item.link}>
                                <h2 className="result_title">{item.title}</h2>
                            </a>
                            <p className = "searchPage_result_snippet">
                                {item.snippet}
                            </p>

                        </div>
                    ))}
                </div>
            )}
            
        </div>
    )
}

export default SearchPage
