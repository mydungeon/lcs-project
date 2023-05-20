export default interface PagerProps {
    currentPage: number
    handleSetCurrentPage: (page: number) => void
    pageSize: number
    totalCount: number
}
