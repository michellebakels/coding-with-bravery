import React, {useState} from 'react';
import './App.css';
import {braveFigures} from "./utils";

const generateFigure = (displayedFigure, setFigure) => {
    const figureIndex = displayedFigure !== undefined ?
        braveFigures.findIndex(figure => figure.name === displayedFigure.name) : 0

    const newFigure = figureIndex === braveFigures.length - 1 ? braveFigures[0] : braveFigures[figureIndex + 1]

    return setFigure(newFigure)
}

function App() {

    const [figure, setFigure] = useState(undefined)

  return (
    <>
        <h1>Inspirational Bravery</h1>
        <h2>Explore the stories of brave women and men throughout history and around the world</h2>
        {figure &&
            <div className="container">
                <div className="card">
                    <section>
                        <div id="image-item" className="item">
                            <img src={figure?.image} alt={figure?.alt} className="card-img"/>
                        </div>
                        <div id="name" className="name">{figure?.name}</div>
                        <p>
                            {figure.role}<br/><br/>
                            {figure.story}<br/>
                        </p>
                        <a href={figure.link} target="_blank" className="card-tag"><button className="learn-more">Learn More</button></a>
                    </section>
                </div>
            </div>
        }
        <button onClick={() => generateFigure(figure, setFigure)} className="explore">EXPLORE</button>
        <footer>Thank you to Nicholas Mohnacky for contributing to <a href="http://coding-with.web.app/" target="_blank">Coding with Bravery</a></footer>
    </>
  );
}

export default App;
