import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Paging from './Paging'

test('loads and displays Paging component', async () => {
    const { getByTestId } = render(
        <Paging currentPage={0} data={{}} pageSize={10} />
    )
    expect(getByTestId('paging')).toBeTruthy()
})
