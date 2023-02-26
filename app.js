/*class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }
    
    componentDidMount(){
        this.timerID=setInterval(
            ()=>this.tick(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date:new Date()
        });
    }

    render(){
        return(
            <div>
                <h1>Witaj cwelu</h1>
                <h2>
                    Aktualny czas: {this.state.date.toLocaleTimeString()}
                </h2>
            </div>
        )
    }
}


const root =ReactDOM.createRoot(document.getElementById('app'));
root.render(<Clock/>)
*/
/*function UserGreeting(props) {
    return <h1>Witamy ponownie!</h1>;
  }
  
function GuestGreeting(props) {
    return <h1>Proszę się zalogować.</h1>;
  }
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  function LoginButton(props){
    return <button onClick={props.onClick}>
                Zaloguj sie
            </button>
  }
  function LogoutButton(props){
    return <button onClick={props.onClick}>
                Wyloguj sie
            </button>
  }
  class LoginControll extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick=this.handleLoginClick.bind(this);
        this.handleLogoutClick=this.handleLogoutClick.bind(this);
        this.state={isLoggedIn:false};
    }
    handleLoginClick(){
        this.setState({isLoggedIn:true});
    }
    handleLogoutClick(){
        this.setState({isLoggedIn:false});
    }
    render()
    {
        const isLoggedIn=this.state.isLoggedIn;
        let button;
        if(isLoggedIn){
            button=<LogoutButton onClick={this.handleLogoutClick}/>
        }
        else{
            button=<LoginButton onClick={this.handleLoginClick}/>
        }
        return(
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }
  }
  
  const root = ReactDOM.createRoot(document.getElementById('app')); 
  // Spróbuj zmienić na isLoggedIn={true}:
  root.render(<LoginControll/>);
*/
/*function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <div className="warning">
        Ostrzeżenie!
      </div>
    );
  }
  
  class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: true};
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(state => ({
        showWarning: !state.showWarning
      }));
    }
  
    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Ukryj' : 'Pokaż'}
          </button>
        </div>
      );
    }
  }
  
  const root = ReactDOM.createRoot(document.getElementById('app')); 
  root.render(<Page />);*/
  /*class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Proszę napisać wypracowanie o swoim ulubionym elemencie DOM'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Wysłano następujące wypracowanie: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Wypracowanie:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Wyślij" />
        </form>
      );
    }
  }*/

  class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const targettt = event.target;
      const value = targettt.type === 'checkbox' ? targettt.checked : targettt.value;
      const name = targettt.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
          <label>
            Wybiera się:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Liczba gości:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }


  const root = ReactDOM.createRoot(document.getElementById('app')); 
  root.render(<Reservation />);