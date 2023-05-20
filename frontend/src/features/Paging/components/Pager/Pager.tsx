import React from 'react'
import classnames from 'classnames'
import { DOTS } from './Pager.constants'
import { usePagination } from './Pager.hooks'
import PagerProps from './Pager.types'

export default function Pager({
    currentPage,
    handleSetCurrentPage,
    pageSize,
    totalCount,
}: PagerProps) {
    const pageRange = usePagination({
        currentPage,
        totalCount,
        siblingCount: 1,
        pageSize,
    })

    const handleIncrement = () => handleSetCurrentPage(currentPage + 1)
    const handleDecrement = () => handleSetCurrentPage(currentPage - 1)
    let lastPage = pageRange![pageRange!.length - 1]
    const isFirstPage = currentPage === 1
    const isLastPage = currentPage === lastPage
    if (currentPage === 0 || pageRange!.length < 2) {
        console.log('reset')
        return null
    }
    return (
        <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
            <div
                className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200"
                data-testid="pager"
            >
                <button
                    disabled={isFirstPage}
                    className={classnames(
                        'flex items-center pt-3 text-gray-600 hover:text-indigo-700',
                        {
                            'opacity-30': isFirstPage,
                            'cursor-pointer': !isFirstPage,
                        }
                    )}
                    key="prev"
                    onClick={handleDecrement}
                >
                    <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.1665 4H12.8332"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M1.1665 4L4.49984 7.33333"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M1.1665 4.00002L4.49984 0.666687"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <p className="text-sm ml-3 font-medium leading-none ">
                        Previous
                    </p>
                </button>
                <div className="sm:flex hidden">
                    {pageRange!.map((pageNumber, index) => {
                        // If the pageItem is a DOT, render the DOTS unicode character
                        if (pageNumber === DOTS) {
                            return (
                                <div
                                    className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2"
                                    key={`dots-${index}`}
                                >
                                    &#8230;
                                </div>
                            )
                        }
                        // Render our Page Pills
                        return (
                            <div
                                className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2"
                                key={pageNumber}
                                onClick={() =>
                                    handleSetCurrentPage(Number(pageNumber))
                                }
                            >
                                {pageNumber}
                            </div>
                        )
                    })}
                </div>
                <button
                    disabled={isLastPage}
                    className={classnames(
                        'flex items-center pt-3 text-gray-600 hover:text-indigo-700',
                        {
                            'opacity-30': isLastPage,
                            'cursor-pointer': !isLastPage,
                        }
                    )}
                    key="next"
                    onClick={handleIncrement}
                >
                    <p className="text-sm font-medium leading-none mr-3">
                        Next
                    </p>
                    <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.1665 4H12.8332"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9.5 7.33333L12.8333 4"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9.5 0.666687L12.8333 4.00002"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}
