import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClientList from './ClientList';

describe('<ClientList />', () => {
  test('it should mount', () => {
    render(<ClientList />);
    
    const clientList = screen.getByTestId('ClientList');

    expect(clientList).toBeInTheDocument();
  });
});