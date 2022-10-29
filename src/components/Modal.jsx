import React from 'react'
import "./Modal.css";

const Modal = (props) => {
    const {data}=props;
    console.log(data[0].image)
    var cs;
    if(data[0].max_supply===null){
        cs='100%'
    }else{
        cs=(data[0].circulating_supply*100)/data[0].max_supply;
    }
    return (
        <div className="backdrop" onClick={props.onClose}>
            <div class="modal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title"><img className='cryptoImg' src={data[0].image} alt={data[0].name} />{data[0].name}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.onClose}></button>
                        </div>
                        <div class="modal-body">
                            <div className='inner'>
                                <span className='spanInner'>PRICE <br />$ {parseFloat(data[0].current_price.toFixed(2)).toLocaleString()}</span>
                                <span className='spanInner'>24H <br /><span className='redFont'><i class="fa-solid fa-sort-down"></i> {Math.abs(data[0].price_change_percentage_24h_in_currency.toFixed(2))}%</span></span>
                                <span className='spanInner'>7D <br /><span className='greenFont'><i class="fa-solid fa-sort-up"></i> {Math.abs(data[0].price_change_percentage_7d_in_currency.toFixed(2))}%</span></span>
                            </div>
                            <div className='inner2'>MARKET CAP <br />$ {parseFloat(data[0].market_cap.toFixed(2)).toLocaleString()}</div>
                            <div className='inner3'>VOLUME (24H) <br />$ {parseFloat(data[0].total_volume.toFixed(2)).toLocaleString()} <span className='grayFont'>({parseFloat(data[0].high_24h.toFixed(2)).toLocaleString()} {data[0].symbol.toUpperCase()})</span></div>
                            <div className='inner4'>
                                CICULATING SUPPLY <br />
                                {parseFloat(data[0].circulating_supply.toFixed(2)).toLocaleString()} {data[0].symbol.toUpperCase()}
                                <div class="progress prog">
                                    <div class="progress-bar" role="progressbar" aria-valuenow={data[0].circulating_supply} aria-valuemin="0" aria-valuemax={data[0].max_supply} style={{width:cs}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal