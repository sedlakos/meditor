import './App.css';
import {EditorContainer} from "./model/EditorContainer";
import "./components/fields/TextField"
import "./components/fields/ContainerField"


import data from './data'
import {TextField} from "./components/fields/TextField";
import {Register} from "./model/registry/Register";
import {Provider} from "unstated";
import {Editor} from "./components/editor/Editor";


function App() {
    let editorContainer = new EditorContainer(data);
    return (
        <div className="App">
            <Provider inject={[editorContainer]}>
                <Editor/>
            </Provider>
        </div>
    );
}

Register.register('h1', 'Heading 1', TextField, {tag: 'h1'})
Register.register('h2', 'Heading 2', TextField, {tag: 'h2'})
Register.register('h3', 'Heading 3', TextField, {tag: 'h3'})
Register.register('h4', 'Heading 4', TextField, {tag: 'h4'})
Register.register('h5', 'Heading 5', TextField, {tag: 'h5'})
Register.register('h6', 'Heading 6', TextField, {tag: 'h6'})
Register.register('p', 'Paragraph', TextField, {tag: 'p'})


export default App;
