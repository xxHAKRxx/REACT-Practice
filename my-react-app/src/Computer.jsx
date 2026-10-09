import "./index.css";

function Computer(desktop) {
    return (
        <>
            <div className="Desktops">
                <h2>Desktops</h2>
                <div className="Optiplex">
                    <h3>{desktop.model1}</h3>
                    <p>
                        A very boring business computer tbh. This is specifically the G4 model, which released between 2008 and 2014. 
                        They originally came with Windows 7 pre-installed. Pictured here is the standard Desktop Tower variant.
                    </p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Dell_Optiplex_7010_DT_(Front)_.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="Dell Optiplex G4" width="300" height="500"></img>
                </div>
                <div className="PowerMac-8100">
                    <h3>{desktop.model2}</h3>
                    <p>
                        One of the first Power Macintosh computers to be released. Not that special from regular Macs, but they came in cool towers at least.
                    </p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Power-Macintosh-8100-80av.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original" alt="Power Macintosh 8100" width="300" height="400"></img>
                </div>
            </div>
        </>
    );
}

export default Computer;