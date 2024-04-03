// // //calculateRarity
// // import { calculateTraitRarity, calculateNFTRarity, assignRarityTiers } from './rarityCalculator';

// // export function calculateRarity(nftData) {
// //   const totalNFTs = Object.keys(nftData).length;
// //   const traitValueCounts = {};

// //   for (const nft of Object.values(nftData)) {
// //     for (const { trait_type, value } of nft.attributes) {
// //       if (!traitValueCounts[trait_type]) {
// //         traitValueCounts[trait_type] = {};
// //       }
// //       traitValueCounts[trait_type][value] = (traitValueCounts[trait_type][value] || 0) + 1;
// //     }
// //   }

// //   const traitRarities = {};
// //   for (const [trait, counts] of Object.entries(traitValueCounts)) {
// //     traitRarities[trait] = calculateTraitRarity(counts, totalNFTs);
// //   }

// //   const traitWeights = {
// //     // "Background.Violet": 100,
// //     // "Background.Kadena PURPLE": 0.5,
// //     // "Background.Kadena": 0.2,
// //     // "Background.Kadena RAINBOW": 2,
// //     // "Background.Newspaper": 0.9,
// //     // "D B COOPER.Base": 0.1,
// //     // "EYES.Attitude": 2,
// //     // "EYES.Dollars": 3,
// //     // "EYES.Angry": 0.9,
// //     // "MOUTH.Bane Mask Gold": 0.4,
// //     // "MOUTH.Mouth - Grim": 0.8,
// //     // "MOUTH.Cigarette": 0.6,
// //     // "MOUTH.Black Tobacco Pipe": 8,
// //     // "CLOTHES.White Shirt": 0.1,
// //     // "CLOTHES.Default (Trench Coat)": 0.5,
// //     // "CLOTHES.Black Shirt": 0.3,
// //     // "CLOTH ACCESSORIES.Acc - Gold Squarepocket": 0.1,
// //     // "CLOTH ACCESSORIES.Gold Pin": 0.2,
// //     // "CLOTH ACCESSORIES.Golden Suit Chain": 0.8,
// //     // "CLOTH ACCESSORIES.Bag with Bomb": 0.4,
// //     // "HEAD.White Hair Black Style": 0.1,
// //     // "HEAD.Gold Tall Hat": 0.3,
// //     // "HEAD.Long Black Hair": 0.2,
// //     // "HAND.Shotgun": 1.5,
// //     // "HAND.Prison Placard": 1,
// //     // "HAND.HandGun": 0.4,
// //     // "HAND.Whisky": 0.8,
// //     // "HAND.Ticket": 0.6,
// //     "Background.Violet": 50,
// //     "Background.Kadena PURPLE": 100,
// //     "Background.Kadena": 25,
// //     "Background.Kadena RAINBOW": 60,
// //     "Background.Newspaper": 30,
// //     "D B COOPER.Base": 10,
// //     "EYES.Attitude": 70,
// //     "EYES.Dollars": 90,
// //     "EYES.Angry": 100,
// //     "MOUTH.Bane Mask Gold": 80,
// //     "MOUTH.Mouth - Grim": 60,
// //     "MOUTH.Cigarette": 60,
// //     "MOUTH.Black Tobacco Pipe": 80,
// //     "CLOTHES.White Shirt": 40,
// //     "CLOTHES.Default (Trench Coat)": 80,
// //     "CLOTHES.Black Shirt": 30,
// //     "CLOTH ACCESSORIES.Acc - Gold Squarepocket": 100,
// //     "CLOTH ACCESSORIES.Gold Pin": 30,
// //     "CLOTH ACCESSORIES.Golden Suit Chain": 80,
// //     "CLOTH ACCESSORIES.Bag with Bomb": 40,
// //     "HEAD.White Hair Black Style": 100,
// //     "HEAD.Gold Tall Hat": 300,
// //     "HEAD.Long Black Hair": 200,
// //     "HAND.Shotgun": 150,
// //     "HAND.Prison Placard": 100,
// //     "HAND.HandGun": 400,
// //     "HAND.Whisky": 500,
// //   };

// //   const nftRarities = [];
// //   for (const nft of Object.values(nftData)) {
// //     const rarityScore = calculateNFTRarity(nft.attributes, traitRarities, traitWeights);
// //     nftRarities.push(rarityScore);
// //   }

// //   const tierThresholds = {
// //     Legendary: 0.95,
// //     Rare: 0.3,
// //     Uncommon: 0.2,
// //     Common: 0,
// //   };

// //   const nftTiers = assignRarityTiers(nftRarities, tierThresholds);

// //   return { nftRarities, nftTiers, nftData };
// // }

// // /****************************************************FILTER CODE CHANGES*********************************************************************************** */

// import { calculateTraitRarity, calculateNFTRarity, assignRarityTiers } from './rarityCalculator';

// export function calculateRarity(nftData) {
//   const totalNFTs = Object.keys(nftData).length;
//   const traitValueCounts = {};

//   for (const nft of Object.values(nftData)) {
//     for (const { trait_type, value } of nft.attributes) {
//       if (!traitValueCounts[trait_type]) {
//         traitValueCounts[trait_type] = {};
//       }
//       traitValueCounts[trait_type][value] = (traitValueCounts[trait_type][value] || 0) + 1;
//     }
//   }

//   const traitRarities = {};
//   for (const [trait, counts] of Object.entries(traitValueCounts)) {
//     traitRarities[trait] = calculateTraitRarity(counts, totalNFTs);
//   }

//   const traitWeights = {
//     "Background.Violet": 50,
//     "Background.Kadena PURPLE": 100,
//     "Background.Kadena": 25,
//     "Background.Kadena RAINBOW": 60,
//     "Background.Newspaper": 30,
//     "D B COOPER.Base": 10,
//     "EYES.Attitude": 70,
//     "EYES.Dollars": 90,
//     "EYES.Angry": 100,
//     "MOUTH.Bane Mask Gold": 80,
//     "MOUTH.Mouth - Grim": 60,
//     "MOUTH.Cigarette": 60,
//     "MOUTH.Black Tobacco Pipe": 80,
//     "CLOTHES.White Shirt": 40,
//     "CLOTHES.Default (Trench Coat)": 80,
//     "CLOTHES.Black Shirt": 30,
//     "CLOTH ACCESSORIES.Acc - Gold Squarepocket": 100,
//     "CLOTH ACCESSORIES.Gold Pin": 30,
//     "CLOTH ACCESSORIES.Golden Suit Chain": 80,
//     "CLOTH ACCESSORIES.Bag with Bomb": 40,
//     "HEAD.White Hair Black Style": 100,
//     "HEAD.Gold Tall Hat": 300,
//     "HEAD.Long Black Hair": 200,
//     "HAND.Shotgun": 150,
//     "HAND.Prison Placard": 100,
//     "HAND.HandGun": 400,
//     "HAND.Whisky": 500,
//   };

//   const nftRarities = [];
//   for (const nft of Object.values(nftData)) {
//     const rarityScore = calculateNFTRarity(nft.attributes, traitRarities, traitWeights);
//     nftRarities.push(rarityScore);
//   }

//   const tierThresholds = {
//     Legendary: 0.95,
//     Rare: 0.3,
//     Uncommon: 0.2,
//     Common: 0,
//   };

//   const nftTiers = assignRarityTiers(nftRarities, tierThresholds);

//   return { nftRarities, nftTiers, nftData };
// }
/**********************************************************RANKING CODE*********************************** */
//calculateRarity.js
import { calculateTraitRarity, calculateNFTRarity, assignRarityTiers, rankNFTs } from './rarityCalculator';

export function calculateRarity(nftData) {
  const totalNFTs = Object.keys(nftData).length;
  const traitValueCounts = {};

  for (const nft of Object.values(nftData)) {
    for (const { trait_type, value } of nft.attributes) {
      if (!traitValueCounts[trait_type]) {
        traitValueCounts[trait_type] = {};
      }
      traitValueCounts[trait_type][value] = (traitValueCounts[trait_type][value] || 0) + 1;
    }
  }

  const traitRarities = {};
  for (const [trait, counts] of Object.entries(traitValueCounts)) {
    traitRarities[trait] = calculateTraitRarity(counts, totalNFTs);
  }

  const traitWeights = {
    "Background.Yatch": 0.0903,
    "Background.Mansion": 0.0759,
    "Background.Newspaper": 0.0686,
    "Background.FBI": 0.0583,
    "Background.Parachute": 0.0519,
    "Background.Jungle": 0.0519,
    "Background.Plane Seat": 0.0500,
    "Background.FBI Bldg": 0.0337,
    "Background.Beach": 0.0321,
    "Background.Violet": 0.0318,
    "Background.Grey": 0.0307,
    "Background.Green": 0.0310,
    "Background.Blue": 0.0286,
    "Background.Orange": 0.0294,
    "Background.Red": 0.0323,
    "Background.Purple": 0.0388,
    "Background.Blue Green": 0.0321,
    "Background.Pink": 0.0399,
    "Background.Airport": 0.0305,
    "Background.Kadena PURPLE": 0.0436,
    "Background.Kadena BLUE": 0.0441,
    "Background.Kadena GREEN": 0.0431,
    "Background.Kadena": 0.0460,
    "Background.Kadena RAINBOW": 0.0462,
    "D B COOPER.Base": 1.0000,
    "EYES.Nigth Vision": 0.2299,
    "EYES.Kadena Logo": 0.0563,
    "EYES.Pixel Shade": 0.0580,
    "EYES.Dollars": 0.0868,
    "EYES.Black Sunglasses": 0.1045,
    "EYES.Round Glass": 0.1382,
    "EYES.Normal": 0.1885,
    "EYES.Smile": 0.1874,
    "EYES.Attitude": 0.2366,
    "EYES.Angry": 0.2732,
    "MOUTH.Moustache": 0.1852,
    "MOUTH.Beard": 0.0710,
    "MOUTH.Mouth - Grim": 0.0522,
    "MOUTH.Bane Mask Gold": 0.0519,
    "MOUTH.Mouth - Angry": 0.0562,
    "MOUTH.Mouth - Normal": 0.0500,
    "MOUTH.Mouth - Haopy": 0.0568,
    "MOUTH.Mouth - Attittude": 0.0552,
    "MOUTH.Cigarette": 0.0812,
    "MOUTH.Golden Cigarette": 0.0642,
    "MOUTH.Weed": 0.0651,
    "MOUTH.Black Tobacco Pipe": 0.0549,
    "MOUTH.Cigar": 0.0549,
    "MOUTH.Bane Mask": 0.0858,
    "MOUTH.Mouth - Smile": 0.0580,
    "MOUTH.Grim": 0.1717,
    "CLOTHES.Tuxedo": 0.0856,
    "CLOTHES.Black Shirt": 0.0940,
    "CLOTHES.Black Shirt Stripes": 0.0924,
    "CLOTHES.White Shirt": 0.0948,
    "CLOTHES.Leather Jaket": 0.0946,
    "CLOTHES.Default (Trench Coat)": 0.0976,
    "CLOTHES.Golden Bitcoin Suit": 0.0983,
    "CLOTHES.Grey 3 Piece": 0.0995,
    "CLOTHES.White 3 Piece White": 0.0931,
    "CLOTH ACCESSORIES.Gold Pin": 0.0775,
    "CLOTH ACCESSORIES.DB Cooper Nametag": 0.0819,
    "CLOTH ACCESSORIES.Acc - Money": 0.0837,
    "CLOTH ACCESSORIES.Acc - Suspender": 0.0859,
    "CLOTH ACCESSORIES.Fuckfbi Pin": 0.0841,
    "CLOTH ACCESSORIES.Bag with Money": 0.0871,
    "CLOTH ACCESSORIES.Bag with Bomb": 0.0871,
    "CLOTH ACCESSORIES.Acc - Gold Squarepocket": 0.0871,
    "CLOTH ACCESSORIES.Acc - Polka Squarepocket": 0.0865,
    "CLOTH ACCESSORIES.Golden Suit Chain": 0.0908,
    "HEAD.Long Black Hair": 0.1512,
    "HEAD.Gentleman Hat": 0.1522,
    "HEAD.Gold Tall Hat": 0.1538,
    "HEAD.White Hair Black Style": 0.1562,
    "HEAD.Black Hat": 0.1609,
    "HEAD.Black Tall Hat": 0.1625,
    "HAND.HandGun": 0.1034,
    "HAND.Beer": 0.1112,
    "HAND.Whisky": 0.1102,
    "HAND.Prison Placard": 0.1112,
    "HAND.Shotgun": 0.1121,
    "HAND.Ticket": 0.1124,
    "HAND.Gold Watch": 0.1099,
    "HAND.Kryptomerch Vape Pen": 0.1166,
  };

  const nftRarities = [];
  const nftTiers = {};
  const rankedNFTs = [];
  for (const nft of Object.values(nftData)) {
    const rarityScore = calculateNFTRarity(nft.attributes, traitRarities, traitWeights);
    nftRarities.push(rarityScore);
    nftTiers[nft.hash] = null; // Initialize the tier with null
    rankedNFTs.push({ ...nft, rarityScore });
  }

  const tierThresholds = {
    Legendary: 0.0095,
    Rare: 0.0003,
    Uncommon: 0.0002,
    Common: 0.0000,
  };

  assignRarityTiers(nftRarities, nftTiers, tierThresholds);
  rankNFTs(rankedNFTs);

  return { nftRarities, nftTiers, rankedNFTs, nftData };
}