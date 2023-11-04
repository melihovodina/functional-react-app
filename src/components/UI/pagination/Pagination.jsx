import React from 'react'
import '../../../styles/style.css';
import { getPagesArray } from '../../../utils/pages';
function Pagination({totalPages, page, setPage}) {
  //Массив страниц
  let pagesArray = getPagesArray(totalPages)
  return (
    <div class="container">
        <i 
          class="arrow left" 
          onClick={() => {if(page > 1) setPage(page-1)}}
        />
        <p>{page}</p>
        <i 
          class="arrow right"
          onClick={() => {if(page < 10) setPage(page+1)}}
        />
      </div>
  )
}

export default Pagination