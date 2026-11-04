import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './components/Header';
import About from './components/About';
import Article from './components/Article';

describe('Blog Component Prop Rendering Tests', () => {
  
  test('Header renders the correct blog name via props', () => {
    const testName = 'My Test Blog';
    render(<Header name={testName} />);
    
    const headerElement = screen.getByRole('heading', { level: 1 });
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent(testName);
  });

  test('About renders image with correct src and alt attributes via props', () => {
    const testImg = 'https://example.com';
    const testAboutText = 'This is a test blog profile descriptor.';
    
    render(<About image={testImg} about={testAboutText} />);
    
    const imgElement = screen.getByAltText('blog logo');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', testImg);
    
    const paragraphElement = screen.getByText(testAboutText);
    expect(paragraphElement).toBeInTheDocument();
  });

  test('Article renders title, date, and preview content via props', () => {
    const testTitle = 'Testing React with Jest';
    const testDate = 'November 4, 2026';
    const testPreview = 'An introductory guide on validating props in functional components.';
    
    render(<Article title={testTitle} date={testDate} preview={testPreview} />);
    
    const headingElement = screen.getByRole('heading', { level: 3 });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(testTitle);
    
    const smallElement = screen.getByText(testDate);
    expect(smallElement).toBeInTheDocument();
    expect(smallElement.tagName).toBe('SMALL');
    
    const paragraphElement = screen.getByText(testPreview);
    expect(paragraphElement).toBeInTheDocument();
  });

});
