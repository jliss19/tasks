import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Control
                type="text"
                value={userAnswer}
                onChange={handleChange}
                placeholder="Enter your answer"
            />
            <div>{expectedAnswer === userAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
