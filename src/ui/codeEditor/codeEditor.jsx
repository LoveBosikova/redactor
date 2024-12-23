import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { useRef } from 'react';

function CodeEditor (props) {

    console.log('re');

    const editorRef = useRef();

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    }

    return (
        <Editor 
        onChange={props.handleEditorChange} 
        onMount={onMount}
        defaultValue="// some comment" 
        value={props.value}
        language={props.language} 
        />
    )
}

export default CodeEditor;