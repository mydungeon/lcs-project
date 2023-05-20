import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import DataTable from './DataTable'

test('loads and displays DataTable component', async () => {
    const { getByTestId } = render(<DataTable data={{}} />)
    expect(getByTestId('datatable')).toBeTruthy()
})
