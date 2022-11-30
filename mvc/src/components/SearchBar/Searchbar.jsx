import React from "react";
import "./Searchbar.css";
import { searchicon } from "../../assets";

const Searchbar = () => {
	/*const handdleSubmit = (e) => e.preventDefault()

    const handdleSearchChange = (e) => {
        if (!e.target.value) return searchResults(posts)

        const resultsArray = posts.filter(post => post.title.includes(e.target.value))
    }*/

	return (
		<header>
			<div className="search">
				<input
					className="search_term"
					type="text"
					placeholder="Type what you want"
				/>
				<button className="search_button">
					<img src={searchicon} alt="search icon" />
				</button>
			</div>
		</header>
	);
};

export default Searchbar;
