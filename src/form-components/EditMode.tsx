import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const handleSwitchChange = () => {
        setIsEditMode(!isEditMode);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleStudentChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setIsStudent(event.target.checked);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form>
                <Form.Check
                    type="switch"
                    id="edit-mode-switch"
                    label="Edit Mode"
                    checked={isEditMode}
                    onChange={handleSwitchChange}
                />
                {isEditMode ?
                    <div>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formStudent">
                            <Form.Check
                                type="checkbox"
                                label="Student"
                                checked={isStudent}
                                onChange={handleStudentChange}
                            />
                        </Form.Group>
                    </div>
                :   <div>
                        {name} is {isStudent ? "a student" : "not a student"}.
                    </div>
                }
            </Form>
        </div>
    );
}
