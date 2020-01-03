import { CONTENT_TYPES, CATEGORIES } from './constants';

export default {
  url: 'videos',
  title: 'Videos',
  date: new Date(2019, 6 /* 0 is January. */, 24 /* 0 is the first of the month. */),
  description: 'Camera! Action! We make videos and post them online...',
  categories: [CATEGORIES.NORTH_AMERICA, CATEGORIES.CENTRAL_AMERICA],
  thumbnailUrl: 'https://imgur.com/EUxkBwTm.jpg',
  content: [
    'We make videos! 🎥 Here are some links to where you can watch them.',
    '',
    '',
    {
      type: CONTENT_TYPES.EXTERNAL_LINK,
      text: 'Our YouTube channel where we upload videos.',
      url: 'https://www.youtube.com/channel/UCC4wmQt2q-W9NEnP9WnbsVw'
    },  '', {
      type: CONTENT_TYPES.EXTERNAL_LINK,
      text: 'Video 1: Bicycling USA to Mexico',
      url: 'https://www.youtube.com/watch?v=4NGu_rcz8q8'
    }, '', {
      type: CONTENT_TYPES.EXTERNAL_LINK,
      text: 'Video 2: Biking Baja',
      url: 'https://www.youtube.com/watch?v=uufW_aNFULU&t=26s'
    }, '', {
      type: CONTENT_TYPES.EXTERNAL_LINK,
      text: 'Video 3: Mountains and Mexico [Part 1]',
      url: 'https://www.youtube.com/watch?v=Ght3iQTq5aE&t=2s'
    }, '', {
      type: CONTENT_TYPES.EXTERNAL_LINK,
      text: 'Video 4: Mountains and Mexico [Part 2]',
      url: 'https://www.youtube.com/watch?v=W_oS3zUAh00'
    }, '', {
      type: CONTENT_TYPES.EXTERNAL_LINK,
      text: 'Video 6: Volcano Dreams - Cycling Central America',
      url: 'https://www.youtube.com/watch?v=5hWijfxbZ30'
    }, '', {
      type: CONTENT_TYPES.EXTERNAL_LINK,
      text: 'Video 7: Perma-Culture Farming in Nicaragua',
      url: 'https://www.youtube.com/watch?v=XvILihEOceI'
    }, '', {
      type: CONTENT_TYPES.EXTERNAL_LINK,
      text: 'Video 8: Why you should do a Vipassana Meditation Retreat',
      url: 'https://www.youtube.com/watch?v=3YiuPYNSt58'
    }, '', {
      type: CONTENT_TYPES.EXTERNAL_LINK,
      text: 'Video 9: Biking the Americas - COSTA RICA // Into The Jungle',
      url: 'https://www.youtube.com/watch?v=-tHOdfvNVuk'
    }, '', {
      type: CONTENT_TYPES.EXTERNAL_LINK,
      text: 'Video 10: Biking the Americas - Colombia // Kittens and Cows',
      url: 'https://www.youtube.com/watch?v=DYOPsF6YwvU'
    },
    '',
    '',
    '🎥 Cheers! 🎥'
  ]
};
