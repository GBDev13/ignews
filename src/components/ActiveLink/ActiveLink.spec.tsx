import { render, screen } from '@testing-library/react';
import { ActiveLink } from '.';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
});

describe('ActiveLink component', () => {
  it('renders corretly', () => {
    render(
      <ActiveLink href="/" activeClassName="active" >
        <a>Home</a>
      </ActiveLink>
    )
  
    expect(screen.getByText('Home')).toBeInTheDocument();
  })
  
  it('adds active class if the link as currently', () => {
    render(
      <ActiveLink href="/" activeClassName="active" >
        <a>Home</a>
      </ActiveLink>
    )
  
    expect(screen.getByText('Home')).toHaveClass('active');
  })
})

