import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Pager from './Pager'

test('loads and displays Pager component', async () => {
    const { getByTestId } = render(
        <Pager
            currentPage={1}
            handleSetCurrentPage={() => {}}
            pageSize={10}
            totalCount={100}
        />
    )
    expect(getByTestId('pager')).toBeTruthy()
})
