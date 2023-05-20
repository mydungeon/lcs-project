function flattenObject(input: any, keyName: any) {
    var result: any = {}
    for (const key in input) {
        const newKey = keyName ? `${keyName}.${key}` : key
        if (typeof input[key] === 'object' && !Array.isArray(input[key])) {
            result = { ...result, ...flattenObject(input[key], newKey) }
        } else {
            result[newKey] = input[key]
        }
    }
    return result
}

export async function extractFields(data: any, fields: string[]) {
    return data.map((d: any, i: number, array: any) => {
        const memberData = data[i]
        const memberInfo = flattenObject(memberData['member-info'], '')
        let extracted: any = {
            stateddistrict: memberData.statedistrict,
            'member-info': {},
        }
        fields.forEach((field) => {
            extracted['member-info'][field] = memberInfo[field]
        })
        return extracted
    })
}

export async function sortData(data: any, key: string) {
    function compare(a: any, b: any) {
        a = a['member-info'][key]
        b = b['member-info'][key]
        if (a < b) {
            return -1
        }
        if (a > b) {
            return 1
        }
        return 0
    }
    return data.sort(compare)
}
