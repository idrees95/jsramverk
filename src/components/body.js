import React from 'react';
import './App.scss';
import {useState} from 'react';
// import parse from 'html-react-parser'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import logoUrl from '../../assets/logo.svg';

function Editor () {
    const [text, setText] = useState('')

    const retreiveDatabtn = () => {
        console.log(text)
    }
    return (
    <div>
     
      <div className="center">
        <div className="editor">
          <CKEditor
          editor={ClassicEditor}
          data={text}
          onChange={(event, editor) => {
            const data = editor.getData()
            setText(data)
            }}
          />  
        
        </div>
      </div>  
      <button className="btnclass" onClick={retreiveDatabtn}>Save</button>
      {/* <div>
        <h2>Content</h2>
        <p>{parse(text)}</p>
      </div> */}
    </div>
    )
}
export default Editor;