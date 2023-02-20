import React, {useState} from "react";
import styles from './Paginator.module.css';
import cn from 'classnames';

function Paginator({currentPage, onPageChange, totalItemsCount, pageSize, portionSize = 100}) {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
            {pages
                .filter((page => page >= leftPortionPageNumber && page <= rightPortionPageNumber))
                .map(page => {
                    return <span onClick={(e) => {
                        onPageChange(page)
                    }} className={cn({[styles.selectedPage]: currentPage === page}, styles.pageNumber)}> {page}  </span>
                })}
            {portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}

        </div>
    );
}

export default Paginator;