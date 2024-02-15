import React, {useState} from "react"
import { text } from "../assets/text"
import Editor from "./Editor"
import Previewer from "./Previewer"

function App(){
  const [content, setContent] = useState(text)

  const handleChange = (newContent) => {
    setContent(newContent)
  }
  
  return (
    <div className='container-fluid mt-3 mb-3'>
      <div className='row justify-content-center'>
        <div className='col-lg-6 mt-lg-0 mt-3'>
          <Editor onContentChange={handleChange} content={content}/>
        </div>
        <div className='col-lg-6 mt-lg-0 mt-3'>
          <Previewer content={content}/>
        </div>
      </div>
    </div>
  )

}

export default App