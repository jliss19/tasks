import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState(options[0]);
    const isCorrect = selectedChoice === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form>
                <Form.Group controlId="multipleChoiceQuestion">
                    <Form.Label>Select an answer:</Form.Label>
                    <Form.Control
                        as="select"
                        value={selectedChoice}
                        onChange={(e) => {
                            setSelectedChoice(e.target.value);
                        }}
                    >
                        {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
            </Form>
            <div>{isCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}
