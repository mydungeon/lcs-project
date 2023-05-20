const { REACT_APP_API_URL } = process.env

export async function fetchMemberData() {
    const response = await fetch(REACT_APP_API_URL!)
    const data = await response.json()
    return data
}
