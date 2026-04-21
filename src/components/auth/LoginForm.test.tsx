/// <reference types="vitest" />
/** @vitest-environment jsdom */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import * as reactRedux from 'react-redux';
import * as authSlice from '../../store/authSlice';
import LoginForm from './LoginForm';

const mockDispatch = vi.fn();
const mockNavigate = vi.fn();

vi.mock('react-redux', async () => {
  const actual = await vi.importActual<typeof import('react-redux')>('react-redux');
  return {
    ...actual,
    useDispatch: vi.fn(),
    useSelector: vi.fn(),
  };
});

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn(() => mockNavigate),
  };
});

vi.mock('../../store/authSlice', async () => {
  const actual = await vi.importActual<typeof import('../../store/authSlice')>('../../store/authSlice');
  const login = vi.fn();
  Object.defineProperty(login, 'fulfilled', {
    value: {
      type: 'auth/login/fulfilled',
      match: (action: any) => action?.type === 'auth/login/fulfilled',
    },
    writable: false,
  });

  return {
    ...actual,
    login,
  };
});

const mockedUseDispatch = vi.mocked(reactRedux.useDispatch, true);
const mockedUseSelector = vi.mocked(reactRedux.useSelector, true);
const mockedUseNavigate = vi.mocked(useNavigate, true);
const mockedLogin = vi.mocked(authSlice.login, true);

describe('LoginForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    mockedUseDispatch.mockReturnValue(mockDispatch);
    mockedUseSelector.mockImplementation((selector) =>
      selector({ auth: { loading: false, error: null } })
    );
    mockedUseNavigate.mockReturnValue(mockNavigate);
    mockedLogin.mockImplementation((payload) => (() =>
      Promise.resolve({ type: 'auth/login/fulfilled', payload: { role: 'visitor' } })
    ) as any);
    mockDispatch.mockImplementation(() =>
      Promise.resolve({ type: 'auth/login/fulfilled', payload: { role: 'visitor' } })
    );
  });

  it('dispatches login and navigates to profile for a visitor user', async () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    const user = userEvent.setup();
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    const submitButton = screen.getByRole('button', { name: /Login/i });

    await user.type(emailInput, 'user@example.com');
    await user.type(passwordInput, 'password123');
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockedLogin).toHaveBeenCalledWith({
        email: 'user@example.com',
        password: 'password123',
      });
    });

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('/profile');
  });
});
