## reduxとは
* stateの管理（保持、変更）を担当するもの
* reduxではstoreというオブジェクトのようなもので、それらを管理します。

## コードベースで見てみます。
createstoreで、storeを作成します。引数にreducersを渡します。
reducerを見てみます。

```
export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
```

ここの地点ではaction.typeに該当するものを渡さないの,defaultが呼ばれていて0が帰ってきています。
なので今の状態は,state=0で,reducerが登録されているという状態です。

ここまでがcreateStoreまでの挙動です。

※図でやるとこんな感じです。セットされている状態

![Untitled Diagram-Page-1.jpg](.\img\Untitled Diagram-Page-1.jpg)

## render内容の確認
<Counter>というのの中に3つの引数を渡しています。
このCounterが意味するのは`import Counter from './components/Counter'`でComponents/Counter.jsに内容を渡す
という意味になります。`value`、`onIncrement`、`onDecrement`となります。

一応コードの例を示す
```
const render = () => ReactDOM.render(
  <Counter
      /*ここの内容がCouter.jsへ渡される。Couter.js内でthis.props.valueとなる*/
    value={store.getState()}
      /*ここの内容がCouter.jsへ渡される。Couter.js内でthis.props.onIncrementとなる*/
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      /*ここの内容がCouter.jsへ渡される。Couter.js内でthis.props.onDecrementとなる*/
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)
```
## Components/couter.jsをみてみると

ここでは、value,onIncrement,onDecrement3つの引数が渡っているためCounter．js上では
`this.props.value`、`this.props.onIncrement`、`this.props.onDecrement`、
この書き方で、src/index.jsで定義した関数が使えるようになります。

ただし、
```
const { value, onIncrement, onDecrement } = this.props
```
上述のコードで、this.propsを事前に変数にいれてるため、省略できています。

## ビルドしてみます。
ビルドしてみるとわかるのですが、Counter.jsでレンダリングされている内容がでてるはずです。

※実際に出ている内容
```
<div id="root">
<p>Clicked: 0 times // 0に該当する部分が{value}
<button>+</button>  // +に該当する部分がonIncrement
button>-</button> // -に該当する部分がonDecrement
```

「+」を押してみると。。。

src/index.jsで定義した
```
onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
```
dispatchが呼ばれると、reducerにその内容が行きます。
```
export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
```

stateは現在持っているstate値(この場合だと0)を渡します。
今回キーにtypeとして,INCREMENTを渡しているので、action.type=INCREMENTとして処理されます。

この場合だと
```
case 'INCREMENT':
```

に該当されるので+1された状態でstateが更新されます。

※dipatchが起こったらreducerにアクションが行き、stateを更新します。
![Untitled Diagram-Page-2.jpg](.\img\Untitled Diagram-Page-2.jpg)

※注意点1
redux で管理した state を変更するためには、かならず aciton を dispatch することで行うこと。(this.setState()は使わない)

※注意点2
ここで気をつける必要の概念として、既存のステートを直接上書きするのではなく、
一度新しくつくって、それを上書きするという仕組みを取ります。

更新されたら、もう一度renderを読み込み治すので、
更新された内容が表示されることになります。

基本的にこの流れで一周していきます。