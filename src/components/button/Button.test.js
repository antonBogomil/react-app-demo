import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from "./Button";

test('renders a button', () => {
  const {container} = render(<Button>Click me</Button>)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <button>Click her</button>
  `)
})
