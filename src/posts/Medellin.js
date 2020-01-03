import { CONTENT_TYPES, CATEGORIES } from './constants';

export default {
  url: 'medellin',
  title: 'I Hope You Feel Hopeless',
  // Aug 16th
  date: new Date(2019, 11 /* 0 is January. */, 15 /* 0 is the first of the month. */),
  description: '95 degree, 90% humidity, heat',
  categories: [CATEGORIES.CENTRAL_AMERICA],
  previousPostUrl: 'guatemala',
  thumbnailUrl: 'https://i.imgur.com/9nFNPSW.jpg',
  content: [
    'There are moments when the world is a touch too big. The sun is too hot and the road too long and it just may be that everyone is out to get you. A head seems to be designed for headaches and legs just to be sore.',

    'Biking from Cartagena to Medellin means a week of biking in 95 degree, 90% humidity, heat. Every pedal echoes painfully through your skull. Every hour strips the autonomy from your legs. And then you get lost, and have to push your bike uphill for miles, and your phone gets stolen, and everything is closed for elections, and another hill, and another headache, and no, you can’t bike another pedal …… and yes …… you can sleep here, and ukulele music, and smiles, and a kitten softer than the deepest headache, and santa painted on the firestation window.',

    'The liquid of your blood, sweat, tears, and fear sink into your pillow, which is your sweater, which desperately needs to be washed. I only ask to use every drop of hoplessness to tear down cell walls erected from fear so long ago - never to mix new cement.',

    '.......',

    'I apparently have not posted in 4 months (sorry), but in other news I am halfway there! In all honesty it was never about getting anywhere, rather learning a little more about right here, but I am now right here in a new continent which is exciting.',

    'My past 4 months have now involved much biking but also lots of farming, boats, meditation, and family.',

    'I have worked on a permaculture farm called Zopilote, nestled on a storybook volcano island in Lake Nicaragua.',

    {
      type: CONTENT_TYPES.IMAGE,
      alt: '',
      url: 'https://imgur.com/n82jJ6o.jpg',
      thumbnailUrl: 'https://imgur.com/n82jJ6ot.jpg',
      grid: 'col-sm-12' // This is out of 12 how much space it takes up.
    },

    'I have worked on another permaculture farm in Costa Rica called Rancho Margot.',

    // [video] [rancho 1]

    // https://i.imgur.com/n82jJ6o.jpg

    // https://www.youtube.com/watch?v=XvILihEOceI

    {
      type: CONTENT_TYPES.HTML,
      html: '<iframe style="padding-right: 5px; min-width: 320px; width: 100%; height: 20%; max-height: 600px; min-height: 200px; margin-right: auto;margin-left: auto; display: block;" title="Desert" src="https://www.youtube.com/embed/XvILihEOceI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },


    'I went surfing with Rhys (no pics :(, sorry).',

    'I took a sailboat around the Darien Gap with my dad.',

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: '',
        url: 'https://imgur.com/lHE8z9k.jpg',
        thumbnailUrl: 'https://imgur.com/lHE8z9kt.jpg',
        grid: 'col-sm-6' // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: '',
        url: 'https://imgur.com/TmLwIlw.jpg',
        thumbnailUrl: 'https://imgur.com/TmLwIlwt.jpg',
        grid: 'col-sm-6' // This is out of 12 how much space it takes up.
      }]
    },

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: '',
        url: 'https://imgur.com/FSp9Lls.jpg',
        thumbnailUrl: 'https://imgur.com/FSp9Llst.jpg',
        grid: 'col-sm-6' // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: '',
        url: 'https://imgur.com/xsQby4g.jpg',
        thumbnailUrl: 'https://imgur.com/xsQby4gt.jpg',
        grid: 'col-sm-6' // This is out of 12 how much space it takes up.
      }]
    },

    {
      type: CONTENT_TYPES.IMAGE,
      alt: '',
      url: 'https://imgur.com/qScDAgw.jpg',
      thumbnailUrl: 'https://imgur.com/qScDAgwt.jpg',
      grid: 'col-sm-12' // This is out of 12 how much space it takes up.
    },

    // [san 2][san 3]
    // [san 5][san 4][san 1]

    'I spent 10 days in silence meditating',

    // video

    {
      type: CONTENT_TYPES.HTML,
      html: '<iframe style="padding-right: 5px; min-width: 320px; width: 100%; height: 20%; max-height: 600px; min-height: 200px; margin-right: auto;margin-left: auto; display: block;" title="Desert" src="https://www.youtube.com/embed/3YiuPYNSt58" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },

    'I went home to spend Thanksgiving with my family',

    'And now I’m here in Medellin ready to go souther and souther.',

    'I promise to write more regularly, and I hope, in all sincerity, that you feel hopeless.',

    '<3 Adam'
  ]
};
