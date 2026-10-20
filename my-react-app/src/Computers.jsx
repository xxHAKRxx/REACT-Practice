import "./index.css"
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

function Desktop() {
    return (
        <div className="Desktops">
            <h2>Desktops</h2>
            <div className="Optiplex">
                <h3>Dell Optiplex (G4)</h3>
                <p>
                    A very boring business computer tbh. This is specifically the G4 model, which released between 2008 and 2014. 
                    They originally came with Windows 7 pre-installed. Pictured here is the standard ATX variant.
                </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Dell_Optiplex_7010_DT_(Front)_.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="Dell Optiplex G4" width="300" height="500"></img>
            </div>
            <div className="PowerMac-8100">
                <h3>Power Macintosh 8100</h3>
                <p>
                    One of the first Power Macintosh computers to be released. Not that special from regular Macs, but they came in cool towers at least.
                </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Power-Macintosh-8100-80av.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original" alt="Power Macintosh 8100" width="300" height="400"></img>
            </div>
            <div className="NeXTcube">
                <h3>NeXTcube</h3>
                <p>
                    A workstation computer released by NeXT between 1990 and 1995. You probably know this thing cuz of Tim-Burners Lee and the World Wide Web, but I just 
                    personally like it's cube design. Cubes are a pretty underrated desktop shape imo.
                </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/NEXT_Cube-IMG_7154.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original " alt="NeXTcube" width="600" height="400"></img>
            </div>
        </div>
    );
}

export default Desktop;