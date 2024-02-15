import { marked } from "https://esm.sh/marked"
import React, {useState, useEffect} from "react"

marked.setOptions({
  breaks: true
})

function Previewer(props) {
  const [collapsed, setCollapsed] = useState(false)
  const [htmlContent, setHtmlContent] = useState('')

  useEffect(() => {
    const generateHtmlContent = () => {
      setHtmlContent(marked(props.content));
    };

    generateHtmlContent();
  }, [props.content]);

  const toggleCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className='p-0 border-line'>
      <div className='card-header d-flex justify-content-between align-items-center rounded-0'>
        <span>
          <i className="bi bi-emoji-smile-fill"></i>
          {' '}Previewer
        </span>
        <button type="button" onClick={toggleCollapse}>
          <i className={collapsed ? "fas fa-window-maximize" : "fas fa-window-minimize"}></i>
        </button>
      </div>
      <div 
        id='preview' 
        className={`card-body ${collapsed ? 'collapse' : ''} p-4`} 
        style={{ height: collapsed ? '0' : 'auto', overflow: 'hidden' }}
        dangerouslySetInnerHTML={{__html: htmlContent}}>
      </div>
    </div>
  );
}

export default Previewer