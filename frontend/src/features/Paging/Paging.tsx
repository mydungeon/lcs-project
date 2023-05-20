import React, { useEffect, useMemo, useState } from 'react'
import PagingProps from './Paging.types'

function TR(member: any) {
    const info = Object.values(member['member-info'])
    return (
        <tr
            className="border-b border-gray-200 hover:bg-gray-100"
            key={member.statedistrict}
            data-testid={member.statedistrict}
        >
            {info.map((v: any, i: number) => (
                <td className="py-5 px-6 text-justify" key={i}>
                    {v}
                </td>
            ))}
        </tr>
    )
}

export default function Paging({ currentPage, data, pageSize }: PagingProps) {
    const [pagedData, setPagedData] = useState([])
    async function handlePagedData() {
        const firstPageIndex = (currentPage - 1) * pageSize
        const lastPageIndex = firstPageIndex + pageSize
        setPagedData(await data.slice(firstPageIndex, lastPageIndex))
    }
    useEffect(() => {
        handlePagedData()
    }, [pagedData])
    return (
        <tbody
            className="text-gray-600 text-sm font-light"
            data-testid="paging"
        >
            {pagedData.map((member: any, i: number) => {
                return <TR key={i} {...member} />
            })}
        </tbody>
    )
}
