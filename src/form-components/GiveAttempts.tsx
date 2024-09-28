import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleGainAttempts = () => {
        const parsedAttempts = parseInt(requestedAttempts, 10);
        if (!isNaN(parsedAttempts)) {
            setAttemptsLeft(attemptsLeft + parsedAttempts);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequestedAttempts(event.target.value);
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Left: {attemptsLeft}</div>
            <Form>
                <Form.Group controlId="formAttempts">
                    <Form.Label>Enter number of attempts</Form.Label>
                    <Form.Control
                        type="number"
                        value={requestedAttempts}
                        onChange={handleChange}
                        placeholder="Enter number of attempts"
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    onClick={handleUseAttempt}
                    disabled={attemptsLeft === 0}
                >
                    Use
                </Button>
                <Button variant="success" onClick={handleGainAttempts}>
                    Gain
                </Button>
            </Form>
        </div>
    );
}
