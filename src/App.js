import React, {Component} from 'react';
//import logo from './logo.svg';
import './assets/css/App.css';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import UserProfile from './components/UserProfile';
import Hero from './components/Hero';
import TitleList from './components/TitleList';

class App extends Component {
    apiKey = '05a75c50bbefa5ce43c9858bef8d4883';

    constructor(props) {
        super(props);
        this.state = {searchTerm: "", searchUrl: ""};
        //return {searchTerm:"", searchUrl:""};
    }

    handleKeyUp  = (e) => {
        if (e.key === 'Enter' && this.state.searchTerm !== '') {
            var searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + this.apiKey;
            console.log(searchUrl);
            this.setState({searchUrl: searchUrl});
        }
    }
    handleChange = (e) => {
        this.setState({searchTerm: e.target.value});
    }

    render() {
        return (
            <div>
                <header className="Header">
                    <Logo/>
                    <Navigation/>
                    <div id="search" className="Search">
                        <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="search"
                               placeholder="Search for a title..." value={this.state.searchTerm}/>
                    </div>
                    <UserProfile/>
                </header>
                <Hero/>
                <TitleList title="Search Results" url={this.state.searchUrl}/>
                <TitleList title="Top TV picks for Jack" url='discover/tv?sort_by=popularity.desc&page=1'/>
                <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1'/>
                <TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1'/>
                <TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1'/>
                <TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1'/>
            </div>

        );
    }
}

export default App;
