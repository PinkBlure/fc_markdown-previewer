import { marked } from "https://esm.sh/marked"

marked.setOptions({
  breaks: true
})

class Previewer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        collapsed: false,
        htmlContent: marked(props.content)
      };
      this.toggleCollapse = this.toggleCollapse.bind(this);
    }
  
    toggleCollapse() {
      this.setState({ collapsed: !this.state.collapsed });
    }
    
    componentDidUpdate(prevProps) {
      if(prevProps.content !== this.props.content) {
        const htmlContent = marked(this.props.content)
        this.setState({htmlContent})
      }
    }
  
    render() {
      return (
        <div className='p-0 border-line'>
          <div className='card-header d-flex justify-content-between align-items-center rounded-0'>
            <span>
              <i className="bi bi-emoji-smile-fill"></i>
              {' '}Previewer
            </span>
            <button type="button" onClick={this.toggleCollapse}>
              <i className={this.state.collapsed ? "fas fa-window-maximize" : "fas fa-window-minimize"}></i>
            </button>
          </div>
          <div 
            id='preview' 
            className={`card-body ${this.state.collapsed ? 'collapse' : ''} p-4`} 
            style={{ height: this.state.collapsed ? '0' : 'auto', overflow: 'hidden' }}
            dangerouslySetInnerHTML={{__html: this.state.htmlContent}}>
          </div>
        </div>
      );
    }
  }

export default Previewer