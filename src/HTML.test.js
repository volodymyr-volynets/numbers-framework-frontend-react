import React from "react";
import { HTML } from './HTML.js';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

test('HTML.div tests', async () => {
	// ARRANGE
	render(<HTML.Div className="test_class" role="div">Hello World</HTML.Div>);
	// ASSERT
	expect(screen.getByRole('div')).toHaveTextContent('Hello World');
});

test('HTML.tag tests', async () => {
	// ARRANGE
	render(<HTML.Tag className="test_class" tag="span" role="span" have_html={true} value="<span>Inner Span</span>" />);
	// ASSERT
	expect(screen.getByRole('span')).toBeInTheDocument();
	expect(screen.getByRole('span')).toHaveTextContent('Inner Span');
});
