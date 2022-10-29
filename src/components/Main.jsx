import React from 'react';
import axios from 'axios';
import "./Main.css";
import RelatedToptics from './RelatedToptics';
import Table from './Table';
import { useState } from 'react';
import { useEffect } from 'react';
import Pagination from './Pagination';

const Main = () => {
    const [cryptoData,setCryptoData]=useState([]);
    const [rowsPerPage,setRowsPerPage]=useState(10);
    const [currentPage,setCurrentPage]=useState(1);

    async function getData(){
        const res=await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&amp;order=market_cap_desc&amp;per_page=${rowsPerPage}&amp;page=${currentPage}&amp;sparkline=false&amp;price_change_percentage=24h%2C7d`);

        if(res.data && res.data.length>0){
            const sortedData=res.data.sort((a,b)=>{
                return a.market_cap_rank - b.market_cap_rank;
            })    
            setCryptoData(sortedData);
        }
    }
    useEffect(()=>{
        getData();
    },[rowsPerPage,currentPage])

    function handleSelectorChange(event){
        setRowsPerPage(event.target.value)
    }

    const paginate=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }

  return (
    <div className='main'>
        <h5 className='heading'>Top 100 Crytocurrencies by Market Cap</h5>
        <div className='main-section'>
            <RelatedToptics />
            <div className="showRows">
                <p className="title">Show rows</p>
                <select onChange={handleSelectorChange}>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="100">100</option>
                </select>
            </div>
        </div>
        <Table data={cryptoData} />
        <Pagination cryptoDataPerPage={rowsPerPage} paginate={paginate} currentPage={currentPage} />
    </div>
  )
}

export default Main