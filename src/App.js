import './App.css';
import {EditorContainer} from "./model/EditorContainer";
import "./components/fields/TextField"
import "./components/fields/ContainerField"


import {Provider} from 'react-redux'
import reducer from './reducers/EditorReducer'
import {createStore} from "redux";
import data from './data'
import A from "./components/Test";

const store = createStore(reducer, data)

function App() {
    let editorContainer = new EditorContainer();
    return (
        <div className="App">
            {/*<Provider inject={[editorContainer]}>*/}
            {/*    <Editor/>*/}
            {/*</Provider>*/}
            <Provider store={store}>
                <A ></A>
            </Provider>
        </div>
    );
}


export default App;
