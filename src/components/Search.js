import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "" };
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.title} onChange={this.handleChange} />
                    <input type="submit" value="Find Your GIFs" />
                </form>
            </div>
        );
    }

    handleChange = event => {
        const title = event.target.value;
        this.setState({ title: title });
    };

    h
    handleSubmit = event => {
        // connect で与えられたメソッドを受け取る
        const { getUrls } = this.props;
        event.preventDefault();
        // 使用する
        getUrls(this.state.title);
        this.setState({ title: "" });
    };
}

export default Search;