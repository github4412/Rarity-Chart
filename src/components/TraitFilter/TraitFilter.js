// TraitFilter.js
// src/components/TraitFilter/TraitFilter.js
import React, { useState, useEffect } from 'react';
import metadata from '../../data/metadata.json';
import './TraitFilter.css';

const TraitFilter = ({ onFilterChange }) => {
  const [traitTypes, setTraitTypes] = useState([]);
  const [traitValues, setTraitValues] = useState({});
  const [selectedTraits, setSelectedTraits] = useState({});

  useEffect(() => {
    const traitTypes = new Set();
    const traitValues = {};

    for (const nft of Object.values(metadata)) {
      for (const { trait_type, value } of nft.attributes) {
        traitTypes.add(trait_type);

        if (!traitValues[trait_type]) {
          traitValues[trait_type] = new Set();
        }
        traitValues[trait_type].add(value);
      }
    }

    setTraitTypes(Array.from(traitTypes));
    setTraitValues(Object.fromEntries(
      Object.entries(traitValues).map(([key, values]) => [key, Array.from(values)])
    ));
  }, []);

  const handleTraitChange = (traitType, value) => {
    setSelectedTraits((prevSelectedTraits) => ({
      ...prevSelectedTraits,
      [traitType]: value,
    }));
    onFilterChange(selectedTraits);
  };

  return (
    <div className="trait-filter">
      <div className="hide-filter">
        <span>Hide Filter</span>
      </div>
      {traitTypes.map((traitType) => (
        <div key={traitType} className="trait-dropdown">
          <span>{traitType}</span>
          <select
            value={selectedTraits[traitType] || ''}
            onChange={(e) => handleTraitChange(traitType, e.target.value)}
          >
            <option value="">All</option>
            {traitValues[traitType].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default TraitFilter;