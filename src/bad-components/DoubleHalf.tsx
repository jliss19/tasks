import React, { useState } from "react";
import { Button } from "react-bootstrap";
<<<<<<< HEAD

function Doubler({ onDouble }: { onDouble: () => void }): React.JSX.Element {
    return <Button onClick={onDouble}>Double</Button>;
}

function Halver({ onHalf }: { onHalf: () => void }): React.JSX.Element {
    return <Button onClick={onHalf}>Halve</Button>;
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    const handleDouble = () => {
        setDhValue(dhValue * 2);
    };
    const handleHalf = () => {
        setDhValue(dhValue * 0.5);
    };
=======
import { dhValue, setDhValue } from "./DoubleHalfState";

function Doubler(): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(2 * dhValue);
            }}
        >
            Double
        </Button>
    );
}

function Halver(): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * dhValue);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
>>>>>>> upstream/task-components
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
<<<<<<< HEAD
            <Doubler onDouble={handleDouble} />
            <Halver onHalf={handleHalf} />
=======
            <Doubler></Doubler>
            <Halver></Halver>
>>>>>>> upstream/task-components
        </div>
    );
}
