import React, { useState } from 'react';
import Editor from "rich-markdown-editor";

function App(){
    const [text, setText] = useState("Hello World");
    const uploadImage = async (file) => {
        try {
          const { data } = await axios.post("/upload-image", { image });
          return data;
        } catch (err) {
          console.log(err);
        }
      };
    return(
        <div>
        <input  type="text" />
        <Editor 
        onChange={v=>setText(v())}
        placeholder={text}
        uploadImage={uploadImage}
        />
        </div>
    )
}

export default App;
