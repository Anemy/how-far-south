import { CONTENT_TYPES, CATEGORIES } from './constants';

export default {
  url: 'beginnings',
  title: 'Beginnings',
  date: new Date(2019, 0 /* 0 is January. */, 10 /* 0 is the first of the month. */),
  description: 'We start biking late this January in Seattle.',
  categories: [CATEGORIES.NORTH_AMERICA],
  content: [
    'Hi from Adam & Rhys!',
    'We\'re biking from Seattle to Argentina starting in late January.',
    'We\'ll be adding more to this site as our starting date comes closer. Stay tuned! Join the mailing list:',
    {
      type: CONTENT_TYPES.INTERNAL_LINK,
      text: 'Mailing List',
      url: '/mailing'
    }, {
      type: CONTENT_TYPES.IMAGE,
      alt: 'bike',
      url: 'bike.jpg',
      // description: 'A unknown bike we took off of unsplash'
    },/*, {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'bike',
        url: 'bike.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
        // description: 'A unkown bike we took off of unsplash'
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'bike',
        url: 'bike.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
        // description: 'A unkown bike we took off of unsplash'
      }]
    }*//*, {
    //   type: CONTENT_TYPES.HTML,
    //   html: 'This is some html with <strong>strong</strong> and then a link: <a href="/mailing">nice</a>. ok we done'
    }*/
    /* , {
      type: CONTENT_TYPES.EXTERNAL_LINK,
      text: 'Rhys\'s website',
      url: 'https://rhyshowell.com',
      target: '_blank'
    }*/
  ]
};


/**
 * Use heroku to deploy the react app to `gh-staging` when a commit is made on master.
 */