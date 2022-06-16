import s from "./Users.module.css";
import React from "react";


type PaginatorType = {
    totalCount: number
    pageSize: number
    onPageChanged: (p: number) => void
    currentPage: number
}

export const Paginator: React.FC<PaginatorType> = ({totalCount, pageSize,onPageChanged,currentPage}) => {

    let pagesCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={s.back}>
        <div className={s.pages}>
            {pages.map(f =>
                <span onClick={() => onPageChanged(f)}
                      className={currentPage === f ? s.selectPage : s.page}>
                            {f}
                        </span>
            )}

        </div>
    </div>
}