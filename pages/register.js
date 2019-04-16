export default class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password:''
    };
  
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handlePassChange = this.handlePassChange.bind(this);
      this.handleCountryChange = this.handleCountryChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleNameChange(event) {
      this.setState({username: event.target.value});
    }
    handlePassChange(event) {
        this.setState({password: event.target.value});
    }
    handleCountryChange(event) {
        this.setState({country: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.username + this.state.password + this.state.country);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" value={this.state.username} onChange={this.handleNameChange} />
          </label>
          <br></br>
          <label>
            Password:
            <input type="password" value={this.state.password} onChange={this.handlePassChange} />
          </label>
          <br></br>
          <label>
            Country:
            <input type="text" value={this.state.country} onChange={this.handleCountryChange} />
          </label>
          <br></br>
          <input type="submit" value="Register" />
        </form>
      );
    }
  }