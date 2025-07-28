import React, { Component } from 'react';
import './App.css';

class App extends Component {
  menuClick(){
    const navlist = document.getElementById("navlist");
    //navlist.style.display = "block";
    navlist.classList.toggle("active");
  }
  render() {
    return (
      <>
      <header>
        <nav> 
          <div className='logo'> Kohi club</div>
          <ul id="navlist">
            <li>Home</li>
            <li>About</li>
            <li>contact</li>
          </ul>
          <div className='menu' onClick={()=>this.menuClick()}>&#9776;
          </div>
        </nav>
      </header>
      <section>
       <h1> Welcome to explore my website </h1>
       <p> Explore the web..</p>
       <p>The story of mine...</p>
      </section>
      <footer>....All is well@Do it well....</footer>

        
      </>
    );
  }
}

export default App;