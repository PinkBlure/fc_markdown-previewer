import React, { useEffect, useRef, useState } from "react"
import { text } from "../assets/text"

function Editor(props) {
    const [content, setContent] = useState(text)
    const [collapsed, setCollapsed] = useState(false)

    const textAreaRef = useRef(null)

    const toggleCollapse = () => {
        setCollapsed(!collapsed)
    }

    const handleChange = (event) => {
      const newContent = event.target.value
      setContent(newContent)
      props.onContentChange(newContent)
      updateTextareaHeight()
    }

    useEffect(()=> {
      updateTextareaHeight()
    }, [collapsed])

    const updateTextareaHeight = () => {
      const textArea = textAreaRef.current;
      if (textArea) {
        textArea.style.height = 'auto'
        textArea.style.height = `${textArea.scrollHeight}px`
      }
    }

    return (
      <div className='p-0 border-line'>
        <div className='card-header d-flex justify-content-between align-items-center rounded-0'>
          <span>
            <i className="bi bi-emoji-smile"></i>
            {' '}Editor
          </span>
          <button type="button" onClick={toggleCollapse}>
            <i className={collapsed ? "fas fa-window-maximize" : "fas fa-window-minimize"}></i>
          </button>
        </div>
        <div 
          id='editor-card-body' 
          className={`card-body ${collapsed ? 'collapse' : ''}`} 
          style={{ height: collapsed ? '0' : 'auto', overflow: 'hidden' }}>
             <textarea id='editor' className='w-100 p-4' value={content} onChange={handleChange} ref={textAreaRef} style={{ height: 'auto', overflowY: 'hidden', resize: 'none' }}></textarea>
           </div>
         </div>
    )
}

// class Editor extends React.Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         collapsed: false,
//         content: text
//       }
//       this.textareaRef = React.createRef()
//       this.toggleCollapse = this.toggleCollapse.bind(this)
//       this.handleChange = this.handleChange.bind(this)
//     }
  
//     componentDidMount() {
//       this.updateTextareaHeight()
//     }
    
//     toggleCollapse() {
//       this.setState({ collapsed: !this.state.collapsed })
//     }
    
//     handleChange(event) {
//       const content = event.target.value
//       this.setState({content})
//       this.props.onContentChange(content)
//       this.updateTextareaHeight()
//     }
    
//     updateTextareaHeight() {
//       const textarea = this.textareaRef.current;
//       textarea.style.height = 'auto';
//       textarea.style.height = `${textarea.scrollHeight}px`;
//     }
  
//     render() {
//       return (
//         <div className='p-0 border-line'>
//           <div className='card-header d-flex justify-content-between align-items-center rounded-0'>
//             <span>
//               <i className="bi bi-emoji-smile"></i>
//               {' '}Editor
//             </span>
//             <button type="button" onClick={this.toggleCollapse}>
//               <i className={this.state.collapsed ? "fas fa-window-maximize" : "fas fa-window-minimize"}></i>
//             </button>
//           </div>
//           <div 
//             id='editor-card-body' 
//             className={`card-body ${this.state.collapsed ? 'collapse' : ''}`} 
//             style={{ height: this.state.collapsed ? '0' : 'auto', overflow: 'hidden' }}>
//             <textarea id='editor' className='w-100 p-4' value={this.state.content} onChange={this.handleChange} ref={this.textareaRef} style={{ height: 'auto', overflowY: 'hidden', resize: 'none' }}></textarea>
//           </div>
//         </div>
//       );
//     }
//   }

  export default Editor 