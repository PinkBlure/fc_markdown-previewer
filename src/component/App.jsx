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
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-lg-6'>
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