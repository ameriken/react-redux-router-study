## react-reduxについて
* reactのコンポーネントの中でreduxを使えるようにしたい

## 流れ
1. import { Provider　｝from "react-redux"
ここでProviderを取得しreactコンポーネント上にラッピングし、storeを渡してあげる

2. ラッピングされると,reactコンポーネント内でも使えるようになって,
connectを使って、reactコンポーネントに渡していく 

例)
connect(mapStateToProps,mapDispatchToProps)(App);
AppというコンポーネントにmapStetetoProps,mapDispatchToPropsを紐づけます。

ここでは
mapStateToPropsはstateを私
mapDispatchToPropsはdispatchを渡しています

## reduxとreact-reduxの違い
reduxはstateに組み込んでいくもの
react-reduxはreactに組み込んでいくもの(Providerとか)
