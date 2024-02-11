import { text } from "../assets/text"
import Editor from "./Editor"
import Previewer from "./Previewer"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: text
    }
    
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(content) {
    this.setState({content})
  }
  
  render() {
    return (
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-lg-6'>
            <Editor onContentChange={this.handleChange} />
          </div>
          <div className='col-lg-6 mt-lg-0 mt-3'>
            <Previewer content={this.state.content}/>
          </div>
        </div>
      </div>
    )
  }
  
}

export default App