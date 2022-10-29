import React from 'react'
import "./RelatedToptics.css"

const RelatedToptics = () => {
  return (
    <div className='topics'>
        <span className="topic"><i class="fa-regular fa-star"></i> Favourites</span>
        <span className="topic blueFontColor">CrytoCurrencies</span>
        <span className="topic  grayFontColor">DeFi</span>
        <span className="topic  grayFontColor">NFTs & Collectibles</span>
    </div>
  )
}

export default RelatedToptics