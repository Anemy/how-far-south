import { CONTENT_TYPES, CATEGORIES } from './constants';

export default {
  url: 'beginnings',
  title: 'Beginnings',
  date: new Date(2019, 0 /* 0 is January. */, 10 /* 0 is the first of the month. */),
  description: 'We\'re getting on our bikes February 2nd, in Seattle.',
  categories: [CATEGORIES.NORTH_AMERICA],
  content: [
    'Hi from Adam & Rhys!',
    'We\'re biking from Seattle to Argentina. Our trek begins on Saturday, February 2nd, from Gas Works Park in Seattle (Around 11 am) - come grab a bagel and say farewell!',
    'Stay tuned! Join the mailing list:',
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

/**
Pilot

We haven't started biking yet, so this post is a bit about our current mindset, and what sorts of preperations and expectations we have.

This first leg is going to be like the first episode of a new tv show, the pilot. This first episode is going to test us andsee if we're really capable of making the route happen. We want to make it all the way down to Argentina, but that's many months, miles, and many countries away.

We're hyped to go. Every time we chat we can't wait to hop on our bikes.

Much like the start of any new tv show, we don't know if we're going to make it. It's early on, and we're doing something that honestly frightens us. We don't know how long it's going to take, or our exact route.


*/