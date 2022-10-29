import React from 'react'
import "./Pagination.css";

const Pagination = ({cryptoDataPerPage,paginate,currentPage}) => {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(100/cryptoDataPerPage);i++){
        pageNumbers.push(i);
    }
    const length=pageNumbers.length;
    const startPageNumber=pageNumbers.splice(0,2)
    const endPageNumber=pageNumbers.splice(length-4,2)
    return (
        <nav aria-label="Page navigation example" className='pagination'>
            <ul class="pagination">
                {currentPage>1 && <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous" onClick={()=>paginate(currentPage-1)}>
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>}
                {startPageNumber.map(number=>{
                    return <li key={{number}} className="page-item">
                        <a onClick={()=>paginate(number)} href="!#" className='page-link'>
                            {number}
                        </a>
                    </li>
                })}
                <li key="0" className="page-item">
                        <a href="!#" className='page-link disabled'>
                            ...
                        </a>
                </li>
                {endPageNumber.map(number=>{
                    return <li key={{number}} className="page-item">
                        <a onClick={()=>paginate(number)} href="!#" className='page-link'>
                            {number}
                        </a>
                    </li>
                })}
                <li class={`page-item ${currentPage===length && 'disabled'}`}>
                    <a class="page-link" href="#" aria-label="Next" onClick={()=>paginate(currentPage+1)}>
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination