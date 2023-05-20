export async function getPages(pageSize: number, totalCount: number) {
    return Math.ceil(totalCount / pageSize)
}

export function range(start: number, end: number) {
    let length = end - start + 1
    return Array.from({ length }, (_, idx) => idx + start)
}
