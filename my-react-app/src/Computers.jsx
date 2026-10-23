import "./index.css"
import { Link, Outlet } from 'react-router-dom'

export function Computers() {
    return (
        <div className="Computers">
            <h1>My Computers</h1>
            <nav>
                <Link to="/computers/desktops">Desktops</Link> |{" "}
                <Link to="/computers/laptops">Laptops</Link> |{" "}
                <Link to="/computers/phones&pdas">Mobile Phones and PDAs</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export function Desktop() {
    return (
        <div className="Desktops">
            <div className="Optiplex">
                <h3>Dell Optiplex (G4)</h3>
                <p>
                    A very boring business computer tbh. This is specifically the G4 model, which released between 2008 and 2014. 
                    They originally came with Windows 7 pre-installed. Pictured here is the standard ATX variant.
                </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Dell_Optiplex_7010_DT_(Front)_.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="Dell Optiplex G4" width="300" height="500" />
            </div>
            <div className="PowerMac-8100">
                <h3>Power Macintosh 8100</h3>
                <p>
                    One of the first Power Macintosh computers to be released. Not that special from regular Macs, but they came in cool towers at least.
                </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Power-Macintosh-8100-80av.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original" alt="Power Macintosh 8100" width="300" height="400" />
            </div>
            <div className="NeXTcube">
                <h3>NeXTcube</h3>
                <p>
                    A workstation computer released by NeXT between 1990 and 1995. You probably know this thing cuz of Tim-Burners Lee and the World Wide Web, but I just 
                    personally like it's cube design. Cubes are a pretty underrated desktop shape imo.
                </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/NEXT_Cube-IMG_7154.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original " alt="NeXTcube" width="600" height="400" />
            </div>
        </div>
    );
}

export function Laptop() {
    return (
        <div className="Laptops">
            <div className="ThinkPad T480">
                <h3>Thinkpad T480</h3>
                <p>
                    A series of business laptops originally made by IBM and later Lenovo since 2005. This model is the one I own, since I read it's the most popular of all
                    of the models. I mainly use it for college.
                </p>
                <img src="https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MzQxOTQ4fGltYWdlL3BuZ3xoZmEvaDA4LzE0MzMyNjkwMTM3MTE4LnBuZ3xjMjJjNmIyOGQxNTVkYzRiYThiNDVkNTViMGFiZmY3MDNjYzFkMzIzM2QyYTRhM2U4YTBiMDJmMjQ1NWNlOTVk/lenovo-laptop-thinkpad-t480-hero.png" alt="ThinkPad T480" width="550" height="400" />
            </div>
            <div className="iBook G3">
                <h3>iBook G3</h3>
                <p>
                    The laptop that set the foundation for the modern MacBook. It has a similar color scheme as the iMac G3 and PowerMac G3, since they were all released in the 
                    same year. It's known for its distinct clamshell design.
                </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/IBookG3_Palourde2.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original" alt="iBook G3" width="550" height="400" />
            </div>
        </div>
    );
}

export function Mobile() {
    return (
        <div className="Mobiles">
            <div className="HP iPAQ RX1955">
                <h3>HP iPAQ RX1955</h3>
                <p>
                    This was a PDA that came with Windows CE and has released by HP in 2003. I like the silver design on this one in particular.
                </p>
                <img src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/527385/527385_p_wipo/527385"/>
            </div>
        </div>
    );
}