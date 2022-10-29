import React from 'react'
import { useState } from 'react';
import Modal from './Modal';
import "./Table.css";

const Table = (props) => {
    const { data } = props;
    const [isClicked,setIsClicked]=useState(false);
    const [selectedCrypto,setSelectedCrypto]=useState();
    function handleClick(id){
        let showData=data.filter(data=>{
            return data.market_cap_rank===id;
        })
        setSelectedCrypto(showData)
        setIsClicked(true)
    }
    function hideModal(){
        setIsClicked(false)
    }
    return (
        <>
            {isClicked && <Modal data={selectedCrypto} onClose={hideModal} />}
            <div className='showData'>
                <table class="table">
                    <thead>
                        <tr>
                            <th className='textInitial' scope="col"></th>
                            <th className='textInitial' scope="col">#</th>
                            <th className='textInitial' scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">24 <i class="fa-solid fa-arrow-down downArrow"></i></th>
                            <th scope="col" className='hide'>7D</th>
                            <th scope="col" className='hide'>MARKET CAP</th>
                            <th scope="col" className='hide'>VOLUME(24H)</th>
                            <th scope="col" className='hide'>CIRCULATING SUPPLY</th>
                            <th scope="col" className='hide'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(data => {
                            var cs;
                            if(data.max_supply===null){
                                cs='100%'
                            }else{
                                cs=(data.circulating_supply*100)/data.max_supply;
                            }
                            return (
                                <tr key={data.market_cap_rank} onClick={e=>handleClick(data.market_cap_rank)} className="CrytoDataCursor">
                                    <td className='textInitial'><i class="fa-regular fa-star starIcon"></i></td>
                                    <td className='textInitial'>{data.market_cap_rank}</td>
                                    <td className='textInitial'>
                                        <img className='cryptoImg' src={data.image} alt={data.name} />
                                        {data.name}
                                        <span className='grayFont'> {data.symbol.toUpperCase()}</span>
                                    </td>
                                    <td>$ {parseFloat(data.current_price.toFixed(2)).toLocaleString()}</td>
                                    <td className='redFont hide'><i class="fa-solid fa-sort-down"></i> {Math.abs(data.price_change_percentage_24h_in_currency.toFixed(2))}%</td>
                                    <td className='greenFont hide'><i class="fa-solid fa-sort-up"></i> {Math.abs(data.price_change_percentage_7d_in_currency.toFixed(2))}%</td>
                                    <td>$ {parseFloat(data.market_cap.toFixed(2)).toLocaleString()}</td>
                                    <td className='hide'>
                                        <span className='displayBlock'>
                                            $ {parseFloat(data.total_volume.toFixed(2)).toLocaleString()}
                                        </span>
                                        <span>
                                            {parseFloat(data.high_24h.toFixed(2)).toLocaleString()} {data.symbol.toUpperCase()}
                                        </span>
                                    
                                    </td>
                                    <td className='hide'>
                                        {parseFloat(data.circulating_supply.toFixed(2)).toLocaleString()} {data.symbol.toUpperCase()}
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" aria-valuenow={data.circulating_supply} aria-valuemin="0" aria-valuemax={data.max_supply} style={{width:cs}}></div>
                                        </div>
                                    </td>
                                    <td className='hide'><i class="fa-solid fa-ellipsis-vertical"></i></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table