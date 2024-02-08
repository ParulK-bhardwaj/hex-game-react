import { generateRandomHexColor, getRandomInt } from "../utlis";
import React, { useState } from "react";

export default function HexGame() {
    const [colors, setColors] = useState([generateRandomHexColor(), generateRandomHexColor(), generateRandomHexColor()])
    const [answerIndex, setAnswerIndex] = useState(getRandomInt(2))
    const [response, setResponse] = useState('')

    const handleBoxClick = (clickedBoxIndex) => {
        const howDidTheyDo = clickedBoxIndex === answerIndex ? 'You Got it!! 👏' : 'Uh oh, incorrect!! Try Again!!'
        setResponse(howDidTheyDo)
    }
    
    const resetGame = () => {
        const resetColors = [generateRandomHexColor(), generateRandomHexColor(), generateRandomHexColor()]
        const resetAnswerIndex = getRandomInt(2)
        setColors(resetColors)
        setAnswerIndex(resetAnswerIndex)
        setResponse('')
    }

    return (
        <div>
            <div className="boxes">
                {colors.map((color, i) => (
                    <div className={`box-${i + 1}`}
                        key={i}
                        style={{ backgroundColor: color }}
                        onClick={() => handleBoxClick(i)}
                    ></div>
                    ))}
            </div>
            <p>Which of the above is this color?: <span>{colors[answerIndex]}</span></p>
            <p className="response">{response}</p>
            <button className="reset-button" onClick={resetGame}>Play Again</button>
       </div>
    )
}