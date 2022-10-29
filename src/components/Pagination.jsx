import React from 'react'
import "./Pagination.css";

const Pagination = ({cryptoDataPerPage,paginate,currentPage}) => {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(100/cryptoDataPerPage);i++){
        pageNumbers.push(i);
    }
    return (
        <nav aria-label="Page navigation example" className='pagination'>
            <ul class="pagination">
                {currentPage>1 && <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous" onClick={()=>paginate(currentPage-1)}>
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>}
                {pageNumbers.map(number=>{
                    return <li key={{number}} className="page-item">
                        <a onClick={()=>paginate(number)} href="!#" className='page-link'>
                            {number}
                        </a>
                    </li>
                })}
                {currentPage<pageNumbers.length && <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next" onClick={()=>paginate(currentPage+1)}>
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>}
            </ul>
        </nav>
    )
}

export default Pagination