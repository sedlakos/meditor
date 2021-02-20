import './App.css';
import {Editor} from "./components/editor/Editor";
import {Provider} from "unstated";
import {EditorContainer} from "./model/EditorContainer";
import {ContainerField} from "./components/fields/ContainerField";
import "./components/fields/TextField"
import "./components/fields/ContainerField"

function App() {
    let editorContainer = new EditorContainer();
    return (
        <div className="App">
            <Provider inject={[editorContainer]}>
                <Editor/>
            </Provider>
        </div>
    );
}

export default App;
