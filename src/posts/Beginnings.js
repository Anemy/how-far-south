import { CONTENT_TYPES } from './constants';

export default {
  link: 'beginnings',
  title: 'Beginnings',
  date: new Date(2019, 0 /* 0 is January. */, 7 /* 0 is the first of the month. */),
  description: 'We start biking late this January in Seattle.',
  content: [
    'Hi from Adam & Rhys!',
    'We\'re biking from Seattle to Argentina starting in late January.',
    'We\'ll be adding more to this site as our starting date comes closer. Stay tuned! Join our mailing list:',
    {type: CONTENT_TYPES.INTERNAL_LINK, text: 'Mailing List', link: '/mailing'}
  ]
};
