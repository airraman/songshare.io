import logo from "/Users/Raman/Desktop/Development/personal/songshare.io/src/songshare.io logo.001.jpeg"

function Logo() {
    return (
      <div className="logocontainer">
        {/* <h1>songshare.io BETA</h1> */}
        <img className="logo" src={logo}/>
      </div>
    );
  }
  
  export default Logo;