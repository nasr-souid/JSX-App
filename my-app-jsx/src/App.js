
import './App.css';
import "./style.css";
import myimageinsrc from "./imageInSrc.jpg"

function App() {
  return(
    <div className="App">
      <header className="App-header">
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}/>
      <h1 className="title-red">Nasr SOUID</h1>
      <br/>
      <img src={myimageinsrc} width="320" height="240" alt= "imageInSrc"/>
      <br/>
      <img src="/imageInPublic.jpg" alt = "imageinpublic"/>
      <video width="320" height="240" controls/>
      <source src="myVideo.mp4" type="video/mp4"/>
      </header>
   </div>
 );
}
    

export default App;
