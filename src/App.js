import React, { Component } from 'react';

// 4. ルーティング 関連 の 機能 を イン ポート
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

// ルーティング で 利用 する コンポーネント を イン ポート
import MyTop from './MyTop';
import MyHello from './MyHello';
import MyArticle from './MyArticle';

export default class App extends Component {
    render() {
// 1. Router（ BrowserRouter） で ルーティング 機能 を 有効 化
        return (
            <Router>
                <div>
                    {/*3. ルーティング 経由 の リンクリスト を 準備*/}
                    <ul>
                        <li>
                            <Link to="/"> トップ </Link>
                        </li>
                        <li>
                            <Link to="/hello">Hello</Link>
                        </li>
                        <li>
                            <Link to="/article">公開記事</Link>
                        </li>
                    </ul>
                    <hr/>
                    {/*2. ルーティング 設定（ 条件 に マッチ し た コンポーネント を 出力）*/}
                    <Switch>
                        {/* exactは完全一致で判定といういみ */}
                        < Route exact path="/" component={MyTop}/>
                        < Route path="/hello" component={MyHello}/>
                        {/*パラメータを含めます :id */}
                        < Route path="/article/" component={MyArticle}/>
                    </Switch>
                </div>
            </Router>
        );
    };
}
