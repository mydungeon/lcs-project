import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import TableHeader from './TableHeader'

test('loads and displays TableHeader component', async () => {
    const { getByTestId } = render(
        <TableHeader dataFields={['']} handleClick={() => {}} />
    )
    expect(getByTestId('tableheader')).toBeTruthy()
})
