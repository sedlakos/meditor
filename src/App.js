import './App.css';
import {Editor} from "./components/editor/Editor";


function App() {
    return (
        <div className="App">
            <Editor blocks={[
                {
                    name: 'Heading1',
                    key: 'heading1',
                    type: 'text',
                    tag: 'h1',
                    placeholder: 'This is my Awesome Editor',
                    actions: [],
                },
                {
                    name: 'Paragraph',
                    key: 'paragraph',
                    type: 'text',
                    tag: 'p',
                    placeholder: 'Start writing',
                    actions: ['bold'],
                },
                {
                    name: 'Paragraph',
                    key: 'paragraph',
                    type: 'text',
                    tag: 'p',
                    placeholder: 'Start writing',
                    actions: ['bold', 'italic'],
                }
            ]
            }/>
        </div>
    );
}

export default App;
