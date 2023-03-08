import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClientDetail from './ClientDetail';

describe('<ClientDetail />', () => {
  test('it should mount', () => {
    render(<ClientDetail />);
    
    const clientDetail = screen.getByTestId('ClientDetail');

    expect(clientDetail).toBeInTheDocument();
  });
});