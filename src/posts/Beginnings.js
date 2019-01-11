import { CONTENT_TYPES } from './constants';

export default {
  url: 'beginnings',
  title: 'Beginnings',
  date: new Date(2019, 0 /* 0 is January. */, 10 /* 0 is the first of the month. */),
  description: 'We start biking late this January in Seattle.',
  content: [
    'Hi from Adam & Rhys!',
    'We\'re biking from Seattle to Argentina starting in late January.',
    'We\'ll be adding more to this site as our starting date comes closer. Stay tuned! Join our mailing list:',
    {
      type: CONTENT_TYPES.INTERNAL_LINK,
      text: 'Mailing List',
      url: '/mailing'
    }, {
      type: CONTENT_TYPES.IMAGE,
      alt: 'bike',
      url: 'bike.jpg'
    }/* , {
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