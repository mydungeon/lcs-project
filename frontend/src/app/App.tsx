import React, { useEffect, useState } from 'react'
import DataTable from 'src/features/DataTable'
import { fetchMemberData } from 'src/app//App.actions'
import { getMembers } from 'src/app/App.selectors'
import { extractFields, sortData } from 'src/features/DataTable/DataTable.utils'
import { DATA_FIELDS } from 'src/features/DataTable/DataTable.constants'

export default function App() {
    const [data, setData] = useState<any>([])

    async function fetchData() {
        let fetched = await fetchMemberData()
        fetched = await getMembers(fetched)
        fetched = await extractFields(fetched, DATA_FIELDS)
        setData(fetched)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <main className="app">
            <h1 className="text-3xl font-bold underline">
                LCS Programming Exercise
            </h1>
            <DataTable data={data} />
        </main>
    )
}
