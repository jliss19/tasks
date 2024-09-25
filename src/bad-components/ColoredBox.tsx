import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

<<<<<<< HEAD
function ChangeColor({
    onChangeColor,
}: {
    onChangeColor: () => void;
}): React.JSX.Element {
    return <Button onClick={onChangeColor}>Next Color</Button>;
}

function ColorPreview({
    colorIndex,
}: {
    colorIndex: number;
}): React.JSX.Element {
=======
function ChangeColor(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <Button
            onClick={() => {
                setColorIndex((1 + colorIndex) % COLORS.length);
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview(): React.JSX.Element {
>>>>>>> upstream/task-components
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
<<<<<<< HEAD
                backgroundColor: COLORS[colorIndex],
=======
                backgroundColor: COLORS[DEFAULT_COLOR_INDEX],
>>>>>>> upstream/task-components
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
<<<<<<< HEAD
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    const handleChangeColor = () => {
        setColorIndex((1 + colorIndex) % COLORS.length);
    };

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor onChangeColor={handleChangeColor}></ChangeColor>
                <ColorPreview colorIndex={colorIndex}></ColorPreview>
=======
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor></ChangeColor>
                <ColorPreview></ColorPreview>
>>>>>>> upstream/task-components
            </div>
        </div>
    );
}
