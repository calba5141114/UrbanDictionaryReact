import React, { Component } from 'react';
import './UrbanDictionaryList.css';

class UrbanDictionaryList extends Component {


    fetchAPIData(keyword) {
        fetch('https://api.urbandictionary.com/v0/define?term=' + keyword)
            .then(results => {
                return results.json();
            }).then(data => {

                let urbanDictItems = data.list.map((dictItem, value) => {
                    return (

                        <div key={value} className="card" >
                            <div className="card-body">
                                <h1 className="card-title">{dictItem.word}</h1>
                                <div className="w-75 mx-auto d-block" >
                                    <p className="card-text">{dictItem.definition}</p>
                                    <p className="card-text" >Example: {dictItem.example}</p>
                                </div>
                                <br />
                                <div className="row">
                                    <p className="col-sm text-primary ">Upvotes: {dictItem.thumbs_up} </p>
                                    <p className="col-sm text-danger" >Downvotes: {dictItem.thumbs_down}</p>
                                    <a className="col-sm" target="__blank" href={dictItem.permalink}>Source</a>
                                    <small className="col-sm text-muted">Created on {dictItem.written_on} by {dictItem.author}</small>
                                </div>
                            </div>

                        </div>

                    );
                });

                this.setState({
                    urbanDictionaryItems: urbanDictItems
                });

                console.log("state", this.state.urbanDictionaryItems);

            });
    }


    constructor() {
        super();
        this.state = {
            urbanDictionaryItems: [],
            value: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.fetchAPIData(this.state.value);
        event.preventDefault();
    }


    render() {
        return (
            <div className="UrbanDictionaryList" >
                <form onSubmit={this.handleSubmit}>

                        <input className="form-control w-50 mx-auto d-block" placeholder="Word" type="text" value={this.state.value} onChange={this.handleChange} />
                        <br/>
                        <input className="btn btn-dark mx-auto d-block " type="submit" value="Submit" />
            
                </form>
                <br/>
                {this.state.urbanDictionaryItems}
            </div>
        );
    }


}

export default UrbanDictionaryList;