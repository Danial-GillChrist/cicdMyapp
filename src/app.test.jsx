import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import { vi } from 'vitest';

test('fetches and displays users', async () => {

  // ✅ MOCK fetch
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          users: [
            { id: 1, firstName: 'Danial', lastName: 'Kumar' }
          ]
        })
    })
  );

  render(<App />);

  // ✅ wait for UI (async)
  const firstName = await screen.findByText('Danial');
  const lastName = await screen.findByText('Kumar');

  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
});