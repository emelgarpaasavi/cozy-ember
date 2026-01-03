import CitrusGroveLifestyle from "@/public/Products/Citrus Grove Lifestyle.webp";
import ForestPineLifestyle from "@/public/Products/Forest Pine Lifestyle.webp";
import LavenderCalmLifestyle from "@/public/Products/Lavender Calm Lifestyle.webp";
import OceanMistLifestyle from "@/public/Products/Ocean Mist Lifestyle.webp";
import RoseHoneyBloomLifestyle from "@/public/Products/Rose Honey Bloom Lifestyle.webp";
import SandalwoodSerenityLifestyle from "@/public/Products/Sandalwood Serenity Lifestyle.webp";
import SpicedChaiLifestyle from "@/public/Products/Spiced Chai Lifestyle.webp";
import VanillaEmberLifestyle from "@/public/Products/Vanilla Ember Lifestyle.webp";

import CitrusGrove from "@/public/Products/Citrus Grove.webp";
import ForestPine from "@/public/Products/Forest Pine.webp";
import LavenderCalm from "@/public/Products/Lavender Calm.webp";
import OceanMist from "@/public/Products/Ocean Mist.webp";
import RoseHoneyBloom from "@/public/Products/Rose Honey Bloom.webp";
import SandalwoodSerenity from "@/public/Products/Sandalwood Serenity.webp";
import SpicedChai from "@/public/Products/Spiced Chai.webp";
import VanillaEmber from "@/public/Products/Vanilla Ember.webp";

const products = [
  {
    id: 0,
    name: "Citrus Grove",
    description:
      "Bright notes of orange, lemon, and bergamot that refresh and energize any space.",
    price: 12.99,
    size: "100oz",
    lifestyle: CitrusGroveLifestyle,
    main: CitrusGrove,
    alt: "A citrus grove scented candle",
  },
  {
    id: 1,
    name: "Forest Pine",
    description:
      "Crisp pine needles, cedarwood, and hints of eucalyptus—like a quiet walk in the woods.",
    price: 12.99,
    size: "100oz",
    lifestyle: ForestPineLifestyle,
    main: ForestPine,
    alt: "A forest pine scented candle",
  },
  {
    id: 2,
    name: "Lavender Calm",
    description:
      "A soothing blend of fresh lavender and soft chamomile for peaceful, relaxing evenings.",
    price: 12.99,
    size: "100oz",
    lifestyle: LavenderCalmLifestyle,
    main: LavenderCalm,
    alt: "A lavender scented candle",
  },
  {
    id: 3,
    name: "Ocean Mist",
    description:
      "Clean sea breeze accords with touches of salt, driftwood, and fresh linen.",
    price: 12.99,
    size: "100oz",
    lifestyle: OceanMistLifestyle,
    main: OceanMist,
    alt: "An ocean mist scented candle",
  },
  {
    id: 4,
    name: "Rose & Honey Bloom",
    description:
      "Delicate rose petals sweetened with natural honey for a soft, romantic scent.",
    price: 12.99,
    size: "100oz",
    lifestyle: RoseHoneyBloomLifestyle,
    main: RoseHoneyBloom,
    alt: "A rose and honey scented candle",
  },
  {
    id: 5,
    name: "Sandalwood Serenity",
    description:
      "Earthy sandalwood blended with amber and musk for a grounded, mellow vibe.",
    price: 11.99,
    size: "100oz",
    lifestyle: SandalwoodSerenityLifestyle,
    main: SandalwoodSerenity,
    alt: "A sandalwood scented candle",
  },
  {
    id: 6,
    name: "Spiced Chai",
    description:
      "A cozy mix of cinnamon, clove, ginger, and sweet creamy vanilla—perfect for warm moods.",
    price: 15.99,
    size: "100oz",
    lifestyle: SpicedChaiLifestyle,
    main: SpicedChai,
    alt: "A spiced chai scented candle",
  },
  {
    id: 7,
    name: "Vanilla Ember",
    description:
      "Warm vanilla bean mixed with subtle smoky undertones for a cozy, comforting aroma.",
    price: 11.99,
    size: "100oz",
    lifestyle: VanillaEmberLifestyle,
    main: VanillaEmber,
    alt: "A vanilla scented candle",
  },
];

export { slideShowImages, products, mainImages };
