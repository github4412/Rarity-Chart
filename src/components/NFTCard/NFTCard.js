// src/components/NFTCard/NFTCard.js
// src/components/NFTCard/NFTCard.js
import React from 'react';
import './NFTCard.css';

const NFTCard = ({ nft, rank, rarityScore, rarityTier }) => {
  return (
    <div className="nft-card">
      <div className="nft-image-container">
        <img src={nft.image} alt={nft.name} />
        <span className="nft-rank">#{rank}</span>
      </div>
      <h3>{nft.name}</h3>
      <p>Rarity Score: {rarityScore.toFixed(2)}</p>
      <p>Rarity Tier: {rarityTier}</p>
    </div>
  );
};

export default NFTCard;