import { render, screen } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render hello', () => {
    render(<App />);
    const helloElement = screen.getByText(/hello/i);
    expect(helloElement).toBeInTheDocument();
  });
});
