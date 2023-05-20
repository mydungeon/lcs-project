import React, { useEffect, useState } from 'react'
import { DATA_FIELDS, PAGE_SIZE, TABLE_HEADER } from './DataTable.constants'
import DataTableProps from './DataTable.types'
import TableHeader from './components/TableHeader'
import Paging from 'src/features/Paging'
import Pager from 'src/features/Paging/components/Pager'
import { sortData } from './DataTable.utils'

export default function DataTable({ data }: DataTableProps) {
    const [currentPage, setCurrentPage] = useState(1)
    const [sortKey, setSortKey] = useState('')
    const [sorted, setSorted] = useState([])
    const handleSetSortKey = (key: string) => {
        setSortKey(key)
    }
    const handleSetCurrentPage = (page: number) => setCurrentPage(page)

    useEffect(() => {
        async function handleSort() {
            setSorted(await sortData(data, sortKey))
        }
        handleSort()
        setCurrentPage(1)
    }, [data, sortKey])
    return (
        <div className="overflow-x-auto">
            <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                <div className="w-full lg:w-5/6">
                    <div className="bg-white shadow-md rounded my-6">
                        <table
                            className="min-w-max w-full table-auto"
                            data-testid="dataTable"
                        >
                            <TableHeader
                                dataFields={TABLE_HEADER}
                                handleClick={handleSetSortKey}
                            />
                            <Paging
                                currentPage={currentPage}
                                data={sorted}
                                pageSize={PAGE_SIZE}
                            />
                        </table>
                        <Pager
                            currentPage={currentPage}
                            handleSetCurrentPage={handleSetCurrentPage}
                            pageSize={PAGE_SIZE}
                            totalCount={sorted.length}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
