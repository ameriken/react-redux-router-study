import React,{ Component } from 'react';


export default class MyArticle extends Component {
    render() {
        const id = this.props.match.params.id;
        return (
            <div>No. {id}の記事情報です！</div>
        );
    }
}