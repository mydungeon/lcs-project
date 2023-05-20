import React from 'react'
import TableHeaderProps from './TableHeader.types'
import { SORT_KEYS } from '../../DataTable.constants'

export default function TableHeader({
    dataFields,
    handleClick,
}: TableHeaderProps) {
    const handleSort = (field: string) =>
        handleClick((SORT_KEYS as any)[field.toLowerCase()])
    return (
        <thead
            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            data-testid="tableheader"
        >
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                {dataFields.map((field: string) => (
                    <th
                        className="py-3 px-6 text-center"
                        key={field.toLowerCase()}
                        onClick={() => handleSort(field)}
                    >
                        {field}
                    </th>
                ))}
            </tr>
        </thead>
    )
}
