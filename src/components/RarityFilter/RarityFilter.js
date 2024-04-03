//RarityFilter.js
import React from 'react';
import './RarityFilter.css';

const RarityFilter = ({ onFilterChange }) => {
  const handleFilterChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <div className="rarity-filter">
      <label htmlFor="rarity-filter">Filter by Rarity:</label>
      <select id="rarity-filter" onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="common">Common</option>
        <option value="uncommon">Uncommon</option>
        <option value="rare">Rare</option>
        <option value="legendary">Legendary</option>
        <option value="rank">Rank</option>
      </select>
    </div>
  );
};

export default RarityFilter;

/***************************************************************************************************************** */
// //RarityFilter.js
// import React from 'react';
// import './RarityFilter.css';

// const RarityFilter = ({ onFilterChange }) => {
//   const handleFilterChange = (e) => {
//     onFilterChange(e.target.value);
//   };

//   return (
//     <div className="rarity-filter">
//       <label htmlFor="rarity-filter">Filter by Rarity:</label>
//       <select id="rarity-filter" onChange={handleFilterChange}>
//         <option value="all">All</option>
//         <option value="common">Common</option>
//         <option value="uncommon">Uncommon</option>
//         <option value="rare">Rare</option>
//         <option value="legendary">Legendary</option>
//         <option value="rank">Rank</option>
//       </select>
//     </div>
//   );
// };

// export default RarityFilter;