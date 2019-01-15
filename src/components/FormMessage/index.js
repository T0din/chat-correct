import React from 'react';
import { Form } from 'semantic-ui-react';

const FormMessage = ({ input, messageChange, messageSubmit }) => {
    const handleInputChange = (event) => {
        messageChange(event.target.value);
    };
    const handleMessageSubmit = (event) => {
        event.preventDefault();
        messageSubmit();
    };
    return (
        <div id="form-message">
            <Form onSubmit={handleMessageSubmit}>
                <Form.Input 
                    value={input}
                    onChange={handleInputChange} 
                    placeholder="Saisissez votre message" 
                />
            </Form>
        </div>
        
    );
};
export  default FormMessage;