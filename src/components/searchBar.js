 import React, { Component } from 'react';


class SearchBar extends Component {

    constructor(props) {

        super(props);

        this.state = { term: '' };
    }

    render() {

        // return <input onChange={this.onInputChange} type="text"/>;
        
        return (
            <div className="search-bar">
                 <input 
                 value={this.state.term}
                 onChange={event => this.onInputChange(event.target.value)} 
                 placeholder="   Search.....  "
                 />
                 

                 {/* Value of the input : {this.state.term} */}

            </div>
    
    
        
         );

    }

    onInputChange(term) {
        
        this.setState({term});
        this.props.onSeachTermChange(term);


    }

}

 export default SearchBar;