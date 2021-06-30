import { render, screen, fireEvent } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { SubscribeButton } from '.';

jest.mock('next-auth/client');
jest.mock('next/router');

describe('SubscribeButton component', () => {

  it('renders corretly', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])

    render(<SubscribeButton />)
  
    expect(screen.getByText('Subscribe now')).toBeInTheDocument();
  })

  it('redirects user to sign in when not authenticated', () => {
    const signInMocked = mocked(signIn);
    const useSessionMocked = mocked(useSession)
    
    useSessionMocked.mockReturnValueOnce([null, false])

    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe now');

    fireEvent.click(subscribeButton)

    expect(signInMocked).toHaveBeenCalled();
  });

  it('redirects user to posts when user already has a subscription', () => {
    const useRouterMocked = mocked(useRouter);
    const useSessionMocked = mocked(useSession);
    const pushMocked = jest.fn()

    useSessionMocked.mockReturnValueOnce([
      {
        user: {
          name: 'John Doe',
          email: 'john.doe@example.com'
        },
        activeSubscription: 'fake=active-subscription',
        expires: 'fake-expires'
      },
      false
    ])

    useRouterMocked.mockReturnValueOnce({
      push: pushMocked
    } as any)

    render (<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe now');

    fireEvent.click(subscribeButton)

    expect(pushMocked).toHaveBeenCalledWith('/posts');
  })
  
})

