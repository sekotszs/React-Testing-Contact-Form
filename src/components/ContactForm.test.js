import React from 'react';
import {render, fireEvent, getByTestId} from '@testing-library/react';
import ContactForm from './ContactForm';

test('test to render and if inputs are visible', () => {
    render(<ContactForm/>);
})
test('contact form will work', () => {
const {getByLabelText, getByTestId}= render(<ContactForm/>);


const firstNameInput = getByLabelText(/First Name/i);
const lastNameInput = getByLabelText(/Last/i);
const emailInput = getByLabelText(/Email/i); 
fireEvent.change(firstNameInput,{target: {name:'firstName', value:'zoe'}
});
fireEvent.change(lastNameInput,{target: {name:'lastName', value:'stokes'}
});
fireEvent.change(emailInput,{target: {name:'email', value:'sekotszs@gmail.com'}
});
const submitButton= getByTestId('submit');
fireEvent.click(submitButton);

})

