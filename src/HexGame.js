import { generateRandomHexColor } from "./utlis";
import React, { useState } from "react";

export default function HexGame() {
    const [colors, setColors] = useState([generateRandomHexColor(), generateRandomHexColor(), generateRandomHexColor()])
    return (
        <div className='boxes'>
          {colors.map((color, i) => (
            <div className={`box-${i + 1}`}
                key={i}
                style={{ backgroundColor: color }}
            ></div>
            ))}
       </div>
    )
}