import { createRoot } from 'react-dom/client'
import Computer from './Computer'
import RandomObscureFact from './Facts'
import './index.css'

function Main() {
  return (
    <>
      <div className="Header">
        <h1>COMPUTER WORLD</h1>
        <p>This website showcases a collection of my computers! Feel free to look around and learn about computer history!</p>
      </div>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <>
    <Main />
    <RandomObscureFact />
    <Computer model1="Dell Optiplex (G4)" model2="Power Macintosh 8100" />
  </>
)