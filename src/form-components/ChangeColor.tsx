import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "Red",
        "Green",
        "Blue",
        "Yellow",
        "Purple",
        "Orange",
        "Pink",
        "Brown",
    ];
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <Form.Check
                    key={color}
                    type="radio"
                    inline
                    label={color}
                    name="colorOptions"
                    value={color}
                    checked={selectedColor === color}
                    onChange={() => {
                        setSelectedColor(color);
                    }}
                />
            ))}
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: selectedColor,
                        color: "white",
                        padding: "2px 5px",
                        borderRadius: "3px",
                    }}
                >
                    {selectedColor}
                </span>
            </div>
        </div>
    );
}
