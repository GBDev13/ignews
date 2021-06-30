import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import { Async } from "."

test('it renders correctly', async () => {
  render(<Async />)

  expect(screen.getByText('Hello World')).toBeInTheDocument();
  // expect(await screen.findByText('Button', {}, { timeout: 3000 })).toBeInTheDocument(); METODO 1
  // await waitFor(() => {
  //   return expect(screen.getByText('Button')).toBeInTheDocument();
  // }, { timeout: 3000 }); METODO 2

  // await waitForElementToBeRemoved(screen.queryByText('Button')); METODO 1 REMOÇAO

  await waitFor(() => {
    return expect(screen.queryByText('Button')).toBeInTheDocument();
  }, { timeout: 3000 }); // METODO 2 REMOÇAO
})