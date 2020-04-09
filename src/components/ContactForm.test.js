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
const emailInput = getByLabelText(/Email/i); })
