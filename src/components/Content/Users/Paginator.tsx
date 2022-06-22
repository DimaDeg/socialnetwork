import s from "./Users.module.css";
import React,{useState,useEffect} from "react";


type PaginatorType = {
    totalCount: number
    pageSize: number
    onPageChanged: (p: number) => void
    currentPage: number
    partitionSize: number
}

export const Paginator: React.FC<PaginatorType> = ({
                                                       totalCount,
                                                       pageSize,
                                                       onPageChanged,
                                                       currentPage,
                                                       partitionSize = 10
                                                   }) => {
    let pagesCount = Math.ceil(totalCount / pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let partitionCount = Math.ceil(pagesCount/partitionSize);
    let [partitionNumber,setPartitionNumber] = useState(1);
    let leftPartitionPageNumber = (partitionNumber - 1 ) * partitionSize +1;
    let rightPartitionPageNumber = partitionNumber  * partitionSize

    useEffect(()=>
            setPartitionNumber(Math.ceil(currentPage/partitionSize)),
        [currentPage]);


    return <div className={s.back}>
        <div className={s.pages}>
            {partitionNumber > 1 && <button onClick={()=>setPartitionNumber(partitionNumber-1) }>Prev</button>}
            {pages.filter(p=> p>=leftPartitionPageNumber && p<=rightPartitionPageNumber).map(f => {
                return <span key={f} onClick={() => onPageChanged(f)}
                      className={currentPage === f ? s.selectPage : s.page}>
                            {f}
                </span>
            })}
            {partitionCount > partitionNumber && <button onClick={()=>setPartitionNumber(partitionNumber+1)}>Next</button>}
        </div>
    </div>
}