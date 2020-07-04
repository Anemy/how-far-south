import { CONTENT_TYPES, CATEGORIES } from './constants';

export default {
  url: 'south',
  title: 'This Far South',
  date: new Date(2020, 6 /* 0 is January. */, 4 /* 0 is the first of the month. */),
  description: 'It ends, as most things do...',
  categories: [CATEGORIES.SOUTH_AMERICA],
  thumbnailUrl: 'https://imgur.com/biTUk9Jm.jpg',
  previousPostUrl: 'medellin',
  content: [
    'It ends, as most things do. As far South as Cuenca Ecuador. 1 year of bicycling, some amount of miles, a few thousand net feet. I have changed I’m sure. I have shed some of the weight I have carried with me and am lighter now. ',

    'The world isn’t falling apart. Or it is, I guess, in the way it always does. But biking is done for now. And how inanely unceremonious that is. To wake up the same way I do most days. And have walls surrounding me. The same walls, in the same place, every morning. And people that I have known for 25 years at the table for breakfast. Everyone speaks in a language I understand. And still it changes. Every day. An internal world revolving and searching. Bike across the world and you will still be the same distance from yourself. And hopefully find more joy in that close proximity. ',

    'I biked the last section of my trip with my friend Alex Wolz on the Trans Ecuador Mountain Bike Route. It was probably the hardest riding of the entire trip. Blasted by 50mph winds at a constant 12000+ feet of elevation. With daily massive climbs to the bases of towering volcanoes. ',

    {
      type: CONTENT_TYPES.TEXT,
      inline: true,
      text: 'Alex and I started together in Quito, biking South to our first waypoint of Volcano Cotopaxi. The first night out of Quito we stayed at a casa de ciclista and were regaled with tales of the origin of ',
    },

    {
      type: CONTENT_TYPES.EXTERNAL_LINK,
      text: 'TEMBR',
      url: 'https://bikepacking.com/routes/trans-ecuador-singletrack/',
      inline: true,
      target: '_blank'
    },
    
    {
      type: CONTENT_TYPES.TEXT,
      inline: true,
      text: '. Cass Gilbert and the Dammer brothers exploring hidden corners of Ecuador and piecing together an epic cross country bike route. After the casa de ciclistas we climbed for a day and a half to the base of the volcano where we got our first taste of high elevation struggles. It is as if the energy of your body disappears and is replaced by headaches. Breath sucked from anemic lungs. The wind tells you to go back from where you came. ',
    },

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Cotopaxi',
        url: 'https://imgur.com/biTUk9J.jpg',
        thumbnailUrl: 'https://imgur.com/biTUk9Jt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Mountains of Ecuador',
        url: 'https://imgur.com/VdQ9Lih.jpg',
        thumbnailUrl: 'https://imgur.com/VdQ9Liht.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'A foggy field',
        url: 'https://imgur.com/2cWbHS5.jpg',
        thumbnailUrl: 'https://imgur.com/2cWbHS5t.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }]
    },

    'A routine of awe to naw. From summits to valleys. Lush rivers to raw moon scapes. To the volcanoes of Quilotoa and Chimborazo all the way up to 16000 feet. Ecuador was stunning. It was as if the mountains were stitched together by high elevation farms of quinoa and potatoes. The most insane section of biking is when we decided to go off route and follow Google Maps. What we ended up on would give anxiety to even the most fearless goat. A narrow single track teetering on the edge off a cliff. So small that there was no way to even turn around. It started scary and the cliff just grew. The trail only shrank. In the end we were carrying our bikes while practically sliding down the mountainside on the precipice of disaster. But here I am writing as a living person. And we crossed the steam at the bottom safely with a final glance back up. The rest of the biking was hard but safe. We stayed in some beautiful places like the Black Sheep Inn which treated us like kings with unlimited banana bread. We celebrated Alex’s birthday there with a soak in the wood fire hot tub. We camped in fields of wildflowers and on hills with winds blasting at our tents. It was amazing biking with Alex and exploring village to village in Ecuador.',

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: '2 cute sheep',
        url: 'https://imgur.com/LmhwYTa.jpg',
        thumbnailUrl: 'https://imgur.com/LmhwYTat.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Eroding hillside',
        url: 'https://imgur.com/0B3woR2.jpg',
        thumbnailUrl: 'https://imgur.com/0B3woR2t.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'A man milking a cow',
        url: 'https://imgur.com/rOCUkiz.jpg',
        thumbnailUrl: 'https://imgur.com/rOCUkizt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }]
    },

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Misty roads 1',
        url: 'https://imgur.com/Bo9n76Q.jpg',
        thumbnailUrl: 'https://imgur.com/Bo9n76Qt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Misty roads 2',
        url: 'https://imgur.com/ujnkDcZ.jpg',
        thumbnailUrl: 'https://imgur.com/ujnkDcZt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }]
    },

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Wildlife',
        url: 'https://imgur.com/ZUrtOHW.jpg',
        thumbnailUrl: 'https://imgur.com/ZUrtOHWt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Alpaca!',
        url: 'https://imgur.com/jNbFBns.jpg',
        thumbnailUrl: 'https://imgur.com/jNbFBnst.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Biker MaN',
        url: 'https://imgur.com/1QC8bsH.jpg',
        thumbnailUrl: 'https://imgur.com/1QC8bsHt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }]
    },

    'Families living their life with flocks of sheep is not something so common in Oakland, CA. Families who live by the calendar of potatoes and quinoa. Working with bright, beautiful outfits that look to me like formal wear. It is in meeting people like this that you realize the lack of universality in your aspirations. The beauty of your life has nothing to do with how others have defined your success. Be a sheep CEO. A potato CFO. Social media manager for your cows. And when pandemic strikes. Go home and be with your family.',

    'And so I did. I decided to finish biking to fly to Chile and be for a moment in the paradise of Aluantu. To live closely with others in a way that simply feels right, good. And then pandemic. And the borders closed and I find myself home with family an instant later. Teleported by the modern era across the world in 10 hours. 1 year of biking, 10 hours of flying. ',

    {
      type: CONTENT_TYPES.HTML,
      html: '<iframe style="padding-right: 5px; min-width: 320px; width: 100%; height: 20%; max-height: 600px; min-height: 200px; margin-right: auto;margin-left: auto; display: block;" title="Desert" src="https://www.youtube.com/embed/kZ2dqo0JAuU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },

    'This is all to say that South is a state of mind. How far south a question for every day. A pedal, is a keystroke, is an email, is a step, is a thought. It happens, and changes, and I love it all the same.',

    '-',
    '-',
    '🚲',
    '-',
    '-',
    
    {
      type: CONTENT_TYPES.TEXT,
      inline: true,
      text: 'And now the collection is complete. Check out the whole journey on '
    },
    {
      type: CONTENT_TYPES.EXTERNAL_LINK,
      text: 'youtube',
      url: 'https://www.youtube.com/channel/UCC4wmQt2q-W9NEnP9WnbsVw',
      inline: true,
      target: '_blank'
    },
    
    {
      type: CONTENT_TYPES.TEXT,
      inline: true,
      text: ' and in the rest of the posts. Thank you so much to everyone who supported me along the way and all of you reading right now for following along this journey. Special thanks to Rhys for being a stalwart companion for so much of the journey (the website is also Rhys’ handiwork). As always: until next time, love Adam.'
    },

    '🚲',
    
    {
      type: CONTENT_TYPES.HTML,
      html: '<iframe style="padding-right: 5px; min-width: 320px; width: 100%; height: 20%; max-height: 600px; min-height: 200px; margin-right: auto;margin-left: auto; display: block;" title="Desert" src="https://www.youtube.com/embed/6AjQQ9BB_L4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
  ]
};
