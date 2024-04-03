// //rarityCalculator.js
// export function calculateTraitRarity(traitValueCounts, totalNFTs) {
//     const traitRarities = {};
//     for (const [value, count] of Object.entries(traitValueCounts)) {
//       const rarityScore = 1 / (count / totalNFTs);
//       traitRarities[value] = rarityScore;
//     }
//     return traitRarities;
//   }
  
//   export function calculateNFTRarity(attributes, traitRarities, traitWeights) {
//     const totalWeight = Object.values(traitWeights).reduce((sum, weight) => sum + weight, 0);
//     let weightedRarities = [];
//     for (const { trait_type, value } of attributes) {
//       const traitKey = `${trait_type}.${value}`;
//       const weight = traitWeights[traitKey] || 0; // Use 0 as the default weight for missing trait value
//       const normalizedWeight = weight / totalWeight; // Normalize the weight
//       const traitRarity = traitRarities[value] || 1; // Default to 1 (highest rarity) if rarity is not calculated
//       const weightedRarity = traitRarity * normalizedWeight;
//       weightedRarities.push(weightedRarity);
//     }
//     const nftRarity = weightedRarities.reduce((sum, rarity) => sum + rarity, 0);
//     return nftRarity;
//   }
  
//   export function assignRarityTiers(nftRarities, tierThresholds) {
//     const nftTiers = {};
//     nftRarities.forEach((rarityScore, nftId) => {
//       for (const [tier, threshold] of Object.entries(tierThresholds)) {
//         if (rarityScore >= threshold) {
//           nftTiers[nftId] = tier;
//           break;
//         }
//       }
//     });
//     return nftTiers;
//   }


/***********************************************************Most Impo 8rANKING cODE ************************* */

//rarityCalculator.js
// export function calculateTraitRarity(traitValueCounts, totalNFTs) {
//   const traitRarities = {};
//   for (const [value, count] of Object.entries(traitValueCounts)) {
//     const rarityScore = 1 / (count / totalNFTs);
//     traitRarities[value] = rarityScore;
//   }
//   return traitRarities;
// }

// export function calculateNFTRarity(attributes, traitRarities, traitWeights) {
//   const totalWeight = Object.values(traitWeights).reduce((sum, weight) => sum + weight, 0);
//   let weightedRarities = [];

//   for (const { trait_type, value } of attributes) {
//     const traitKey = `${trait_type}.${value}`;
//     const weight = traitWeights[traitKey] || 0; // Use 0 as the default weight for missing trait value
//     const normalizedWeight = weight / totalWeight; // Normalize the weight
//     const traitRarity = traitRarities[value] || 1; // Default to 1 (highest rarity) if rarity is not calculated
//     const weightedRarity = traitRarity * normalizedWeight;
//     weightedRarities.push(weightedRarity);
//   }

//   const nftRarity = weightedRarities.reduce((sum, rarity) => sum + rarity, 0);
//   return nftRarity;
// }

// export function assignRarityTiers(nftRarities, nftTiers, tierThresholds) {
//   nftRarities.forEach((rarityScore, index) => {
//     const nftHash = Object.keys(nftTiers)[index];
//     for (const [tier, threshold] of Object.entries(tierThresholds)) {
//       if (rarityScore >= threshold) {
//         nftTiers[nftHash] = tier;
//         break;
//       }
//     }
//   });
// }

// export function rankNFTs(rankedNFTs) {
//   rankedNFTs.sort((a, b) => b.rarityScore - a.rarityScore);
//   rankedNFTs.forEach((nft, index) => {
//     nft.rank = index + 1;
//   });
// }

/****************************************************************************************** */

// src/utils/rarityCalculator.js
export function calculateTraitRarity(traitValueCounts, totalNFTs) {
  const traitRarities = {};
  for (const [value, count] of Object.entries(traitValueCounts)) {
    const rarityScore = 1 / (count / totalNFTs);
    traitRarities[value] = rarityScore;
  }
  return traitRarities;
}

export function calculateNFTRarity(attributes, traitRarities, traitWeights) {
  const totalWeight = Object.values(traitWeights).reduce((sum, weight) => sum + weight, 0);
  let weightedRarities = [];
  for (const { trait_type, value } of attributes) {
    const traitKey = `${trait_type}.${value}`;
    const weight = traitWeights[traitKey] || 0; // Use 0 as the default weight for missing trait value
    const normalizedWeight = weight / totalWeight; // Normalize the weight
    const traitRarity = traitRarities[value] || 1; // Default to 1 (highest rarity) if rarity is not calculated
    const weightedRarity = traitRarity * normalizedWeight;
    weightedRarities.push(weightedRarity);
  }
  const nftRarity = weightedRarities.reduce((sum, rarity) => sum + rarity, 0);
  return nftRarity;
}

export function assignRarityTiers(nftRarities, nftTiers, tierThresholds) {
  nftRarities.forEach((rarityScore, index) => {
    const nftHash = Object.keys(nftTiers)[index];
    for (const [tier, threshold] of Object.entries(tierThresholds)) {
      if (rarityScore >= threshold) {
        nftTiers[nftHash] = tier;
        break;
      }
    }
  });
}

export function rankNFTs(rankedNFTs) {
  rankedNFTs.sort((a, b) => b.rarityScore - a.rarityScore);
  rankedNFTs.forEach((nft, index) => {
    nft.rank = index + 1;
  });
}