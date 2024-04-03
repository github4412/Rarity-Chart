// //RarityCalculator
// import React, { useState, useEffect } from 'react';
// import { calculateRarity } from '../../utils/calculateRarity';
// import metadata from '../../data/metadata.json';
// import './RarityCalculator.css';

// const RarityCalculator = () => {
//   const [rarityInfo, setRarityInfo] = useState(null);

//   useEffect(() => {
//     const fetchRarityData = async () => {
//       const { nftRarities, nftTiers, nftData } = calculateRarity(metadata);
//       setRarityInfo({ nftRarities, nftTiers, nftData });
//     };
//     fetchRarityData();
//   }, []);

//   return (
//     <div className="rarity-calculator">
//       <h2>NFT Rarity Information</h2>
//       {rarityInfo ? (
//         <div className="nft-grid">
//           {Object.values(rarityInfo.nftData).map((nft, index) => (
//             <div key={index} className="nft-card">
//               <img src={nft.image} alt={nft.name} />
//               <h3>{nft.name}</h3>
//               <p>Rarity Score: {rarityInfo.nftRarities[index].toFixed(2)}</p>
//               <p>Rarity Tier: {rarityInfo.nftTiers[index] || 'Common'}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>Loading rarity data...</p>
//       )}
//     </div>
//   );
// };

// export default RarityCalculator;


/**********************************************************************rANKING + fILTER CODE****************************** */

// import React, { useState, useEffect } from 'react';
// import { calculateRarity } from '../../utils/calculateRarity';
// import metadata from '../../data/metadata.json';
// import RarityFilter from '../RarityFilter/RarityFilter';
// import './RarityCalculator.css';

// const RarityCalculator = () => {
//   const [rarityInfo, setRarityInfo] = useState(null);
//   const [filteredNFTs, setFilteredNFTs] = useState([]);
//   const [filter, setFilter] = useState('all');

//   useEffect(() => {
//     const fetchRarityData = async () => {
//       const { nftRarities, nftTiers, rankedNFTs, nftData } = calculateRarity(metadata);
//       setRarityInfo({ nftRarities, nftTiers, rankedNFTs, nftData });
//       filterNFTs(nftTiers, rankedNFTs, filter);
//     };
//     fetchRarityData();
//   }, []);

//   useEffect(() => {
//     if (rarityInfo) {
//       const { nftTiers, rankedNFTs } = rarityInfo;
//       filterNFTs(nftTiers, rankedNFTs, filter);
//     }
//   }, [filter, rarityInfo]);

//   const filterNFTs = (nftTiers, rankedNFTs, filterValue) => {
//     let filteredNFTs = [];

//     if (filterValue === 'all') {
//       filteredNFTs = rankedNFTs;
//     } else if (filterValue === 'common') {
//       filteredNFTs = rankedNFTs.filter((nft) => nftTiers[nft.hash] === 'Common');
//     } else if (filterValue === 'uncommon') {
//       filteredNFTs = rankedNFTs.filter((nft) => nftTiers[nft.hash] === 'Uncommon');
//     } else if (filterValue === 'rare') {
//       filteredNFTs = rankedNFTs.filter((nft) => nftTiers[nft.hash] === 'Rare');
//     } else if (filterValue === 'legendary') {
//       filteredNFTs = rankedNFTs.filter((nft) => nftTiers[nft.hash] === 'Legendary');
//     } else if (filterValue === 'rank') {
//       filteredNFTs = rankedNFTs;
//     }

//     setFilteredNFTs(filteredNFTs);
//   };

//   const handleFilterChange = (filterValue) => {
//     setFilter(filterValue);
//   };

//   return (
//     <div className="rarity-calculator">
//       <h2>NFT Rarity Information</h2>
//       <RarityFilter onFilterChange={handleFilterChange} />
//       {rarityInfo ? (
//         <div className="nft-grid">
//           {filteredNFTs.map((nft, index) => (
//             <div key={index} className="nft-card">
//               <img src={nft.image} alt={nft.name} />
//               <h3>{nft.name}</h3>
//               <p>Rarity Score: {rarityInfo.nftRarities[index].toFixed(2)}</p>
//               <p>Rarity Tier: {rarityInfo.nftTiers[nft.hash] || 'Common'}</p>
//               {filter === 'rank' && <p>Rank: {nft.rank}</p>}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>Loading rarity data...</p>
//       )}
//     </div>
//   );
// };

// export default RarityCalculator;

/*************************************iMPORTANT CODE **************************************** */
// import React, { useState, useEffect } from 'react';
// import { calculateRarity } from '../../utils/calculateRarity';
// import metadata from '../../data/metadata.json';
// import RarityFilter from '../RarityFilter/RarityFilter';
// import './RarityCalculator.css';

// const RarityCalculator = () => {
//   const [rarityInfo, setRarityInfo] = useState(null);
//   const [filteredNFTs, setFilteredNFTs] = useState([]);
//   const [filter, setFilter] = useState('all');

//   useEffect(() => {
//     const fetchRarityData = async () => {
//       const { nftRarities, nftTiers, rankedNFTs, nftData } = calculateRarity(metadata);
//       setRarityInfo({ nftRarities, nftTiers, rankedNFTs, nftData });
//       filterNFTs(nftTiers, rankedNFTs, filter);
//     };
//     fetchRarityData();
//   }, []);

//   useEffect(() => {
//     if (rarityInfo) {
//       const { nftTiers, rankedNFTs } = rarityInfo;
//       filterNFTs(nftTiers, rankedNFTs, filter);
//     }
//   }, [filter, rarityInfo]);

//   const filterNFTs = (nftTiers, rankedNFTs, filterValue) => {
//     let filteredNFTs = [];

//     if (filterValue === 'all') {
//       filteredNFTs = rankedNFTs;
//     } else if (filterValue === 'common') {
//       filteredNFTs = rankedNFTs.filter((nft) => nftTiers[nft.hash] === 'Common');
//     } else if (filterValue === 'uncommon') {
//       filteredNFTs = rankedNFTs.filter((nft) => nftTiers[nft.hash] === 'Uncommon');
//     } else if (filterValue === 'rare') {
//       filteredNFTs = rankedNFTs.filter((nft) => nftTiers[nft.hash] === 'Rare');
//     } else if (filterValue === 'legendary') {
//       filteredNFTs = rankedNFTs.filter((nft) => nftTiers[nft.hash] === 'Legendary');
//     } else if (filterValue === 'rank') {
//       filteredNFTs = rankedNFTs;
//     }

//     setFilteredNFTs(filteredNFTs);
//   };

//   const handleFilterChange = (filterValue) => {
//     setFilter(filterValue);
//   };

//   return (
//     <div className="rarity-calculator">
//       <h2>NFT Rarity Information</h2>
//       <RarityFilter onFilterChange={handleFilterChange} />
//       {rarityInfo ? (
//         <div className="nft-grid">
//           {filteredNFTs.map((nft, index) => (
//             <div key={index} className="nft-card">
//               <img src={nft.image} alt={nft.name} />
//               <h3>{nft.name}</h3>
//               <p>Rarity Score: {rarityInfo.nftRarities[index].toFixed(2)}</p>
//               <p>Rarity Tier: {rarityInfo.nftTiers[nft.hash] || 'Common'}</p>
//               {filter === 'rank' && <p>Rank: #{nft.rank}</p>}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>Loading rarity data...</p>
//       )}
//     </div>
//   );
// };

// export default RarityCalculator;

/*****************************************iMPORTANT*********************************************** */
//RarityCalculator
// src/components/RarityCalculator/RarityCalculator.js
import React, { useState, useEffect } from 'react';
import { calculateRarity } from '../../utils/calculateRarity';
import metadata from '../../data/metadata.json';
import RarityFilter from '../RarityFilter/RarityFilter';
import TraitFilter from '../TraitFilter/TraitFilter';
import NFTCard from '../NFTCard/NFTCard';
import './RarityCalculator.css';

const RarityCalculator = () => {
  const [rarityInfo, setRarityInfo] = useState(null);
  const [filteredNFTs, setFilteredNFTs] = useState([]);
  const [filter, setFilter] = useState('all');
  const [traitFilter, setTraitFilter] = useState({});

  useEffect(() => {
    const fetchRarityData = async () => {
      const { nftRarities, nftTiers, rankedNFTs, nftData } = calculateRarity(metadata);
      setRarityInfo({ nftRarities, nftTiers, rankedNFTs, nftData });
      filterNFTs(nftTiers, rankedNFTs, filter, traitFilter);
    };
    fetchRarityData();
  }, []);

  useEffect(() => {
    if (rarityInfo) {
      const { nftTiers, rankedNFTs } = rarityInfo;
      filterNFTs(nftTiers, rankedNFTs, filter, traitFilter);
    }
  }, [filter, traitFilter, rarityInfo]);

  const filterNFTs = (nftTiers, rankedNFTs, filterValue, traitFilter) => {
    let filteredNFTs = rankedNFTs;

    if (filterValue !== 'all') {
      filteredNFTs = rankedNFTs.filter((nft) => nftTiers[nft.hash] === filterValue);
    }

    if (Object.keys(traitFilter).length > 0) {
      filteredNFTs = filteredNFTs.filter((nft) =>
        nft.attributes.every(
          ({ trait_type, value }) =>
            !traitFilter[trait_type] || traitFilter[trait_type] === value
        )
      );
    }

    setFilteredNFTs(filteredNFTs);
  };

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const handleTraitFilterChange = (traitFilter) => {
    setTraitFilter(traitFilter);
  };

  return (
    <div className="rarity-calculator">
      <h2>NFT Rarity Information</h2>
      <RarityFilter onFilterChange={handleFilterChange} />
      <TraitFilter onFilterChange={handleTraitFilterChange} />
      <div className="nft-grid">
        {filteredNFTs
          .sort((a, b) => b.rarityScore - a.rarityScore)
          .map((nft, index) => (
            <NFTCard
              key={nft.hash}
              nft={nft}
              rank={index + 1}
              rarityScore={rarityInfo.nftRarities[index]}
              rarityTier={rarityInfo.nftTiers[nft.hash] || 'Common'}
            />
          ))}
      </div>
    </div>
  );
};

export default RarityCalculator;


/*******************************************TRAIT WISE FILTERATION************************************* */
// import React, { useState, useEffect } from 'react';
// import { calculateRarity } from '../../utils/calculateRarity';
// import metadata from '../../data/metadata.json';
// import RarityFilter from '../RarityFilter/RarityFilter';
// import TraitFilter from '../TraitFilter/TraitFilter';
// import './RarityCalculator.css';

// const RarityCalculator = () => {
//   const [rarityInfo, setRarityInfo] = useState(null);
//   const [filteredNFTs, setFilteredNFTs] = useState([]);
//   const [filter, setFilter] = useState('all');
//   const [traitFilters, setTraitFilters] = useState([]);

//   useEffect(() => {
//     const fetchRarityData = async () => {
//       const { nftRarities, nftTiers, rankedNFTs, nftData } = calculateRarity(metadata);
//       setRarityInfo({ nftRarities, nftTiers, rankedNFTs, nftData });
//       filterNFTs(nftTiers, rankedNFTs, filter, traitFilters);
//     };
//     fetchRarityData();
//   }, []);

//   useEffect(() => {
//     if (rarityInfo) {
//       const { nftTiers, rankedNFTs } = rarityInfo;
//       filterNFTs(nftTiers, rankedNFTs, filter, traitFilters);
//     }
//   }, [filter, traitFilters, rarityInfo]);

//   const filterNFTs = (nftTiers, rankedNFTs, filterValue, traitFilters) => {
//     let filteredNFTs = rankedNFTs;

//     if (filterValue !== 'all') {
//       filteredNFTs = filteredNFTs.filter((nft) => {
//         const tierToFilter = filterValue === 'rank' ? null : filterValue;
//         return nftTiers[nft.hash] === tierToFilter;
//       });
//     }

//     if (traitFilters.length > 0) {
//       filteredNFTs = filteredNFTs.filter((nft) => {
//         const nftTraits = new Set(nft.attributes.map(({ trait_type, value }) => `${trait_type}:${value}`));
//         return traitFilters.every((trait) => nftTraits.has(trait));
//       });
//     }

//     setFilteredNFTs(filteredNFTs);
//   };

//   const handleFilterChange = (filterValue) => {
//     setFilter(filterValue);
//   };

//   const handleTraitFilterChange = (selectedTraits) => {
//     setTraitFilters(selectedTraits);
//   };

//   return (
//     <div className="rarity-calculator">
//       <h2>NFT Rarity Information</h2>
//       <RarityFilter filter={filter} onFilterChange={handleFilterChange} />
//       <TraitFilter metadata={rarityInfo?.nftData || {}} onTraitFilterChange={handleTraitFilterChange} />
//       {rarityInfo ? (
//         <div className="nft-grid">
//           {filteredNFTs.length > 0 ? (
//             filteredNFTs.map((nft, index) => (
//               <div key={index} className="nft-card">
//                 <div className="nft-image-container">
//                   <img src={nft.image} alt={nft.name} />
//                   <span className="nft-rank">#{nft.rank}</span>
//                 </div>
//                 <h3>{nft.name}</h3>
//                 <p>Rarity Score: {rarityInfo.nftRarities[index].toFixed(2)}</p>
//                 <p>Rarity Tier: {rarityInfo.nftTiers[nft.hash] || 'Common'}</p>
//               </div>
//             ))
//           ) : (
//             <p>No NFTs found with the selected filters.</p>
//           )}
//         </div>
//       ) : (
//         <p>Loading rarity data...</p>
//       )}
//     </div>
//   );
// };

// export default RarityCalculator;