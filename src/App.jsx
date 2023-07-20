import React from 'react';
import './App.css';

function App() {
    const [light, toggleLight] = React.useState(false);
    console.log(light)

    return (
        <main className={light === true ? 'on' : "off"}>
            <section>
                <div className="dot"></div>
                <button type="button" onClick={() => toggleLight(!light)}>
                    {light === false ? 'Turn on' : 'Turn off'}
                </button>
            </section>
        </main>
    );
}

export default App;
