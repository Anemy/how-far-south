import { CONTENT_TYPES, CATEGORIES } from './constants';

// https://imgur.com/a/AMIC5ma

export default {
  url: 'North',
  title: 'How Far North?',
  date: new Date(2019, 1 /* 0 is January. */, 4),
  description: '"This is the first time it\'s snowed this year"', // N̶o̶r̶t̶h̶ S̶o̶u̶t̶h̶
  categories: [CATEGORIES.NORTH_AMERICA],
  content: [
    // 'Seattle -> Edmunds -> Ferry -> Kingston -> The Detour/Snow -> Yurt -> Dosewallips State Park',
    'In the first days of our bike trip, guided by the sole precept of biking as far South in the Americas as possible, we have ended up 10 miles North. We aren’t quite sure how this happened, whether Rhys was holding his phone upside down or we misread the migrations of the birds. Regardless, we are further North and covered in snow.',
    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Biking in the snow',
        url: 'https://imgur.com/NnA91t2.jpg',
        thumbnailUrl: 'http://imgur.com/NnA91t2t.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
        // description: 'A unkown bike we took off of unsplash'
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Adam in the snow biking',
        url: 'https://imgur.com/tTFfOr1.jpg',
        thumbnailUrl: 'http://imgur.com/tTFfOr1t.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
        // description: 'A unkown bike we took off of unsplash'
      }]
    },
    // https://imgur.com/tTFfOr1 -- DSC00167.JPG <- Adam looking up into the snow
    // https://imgur.com/NnA91t2 -- DSC00129.JPG <- Rhys biking towards camera in the snow
    'Three days ago, February 2nd, Rhys and I finally started pedalling after a wonderful goodbye brunch with old friends and new friends. The past week was a roller coaster of saying goodbyes to people that have have made Seattle a home paired with a looming feeling of excitement and anxious anticipation. After setting off all of those feelings sloughed off and were replaced with the familiar calmness of riding a bike in gloomy ole’ Seattle.',
    {
      type: CONTENT_TYPES.GRID,
      items: [{
          type: CONTENT_TYPES.TEXT,
          grid: 'col-sm-8',
          text: 'We rode the first leg from Seattle to Edmonds with bike shop friends Josh, Oliver, and Nick. We had a blissful 3 miles until Josh got a flat and then only 5 miles later Rhys got another. We did some quick math and discovered that at that rate we would likely need over 1000 tubes which is good because we had 4, now 3.'
        }, {
          type: CONTENT_TYPES.IMAGE,
          alt: 'Josh fixing a flat',
          url: 'https://imgur.com/kPBx0cR.jpg',
          thumbnailUrl: 'http://imgur.com/kPBx0cRt.jpg',
          grid: 'col-sm-4', // This is out of 12 how much space it takes up.
          // description: 'A unkown bike we took off of unsplash'
        }
      ]
    },
    // https://imgur.com/kPBx0cR -- DSC00102.JPG <- Josh fixing a flat
    'After a short bike we made it to the Edmonds -> Kingston ferry and said goodbye to Josh and Oliver. Riding the ferry on a bike is a bucket list experience. You are the first of any passengers to board an empty cavern of a boat, the closest most of us will ever come to the capitalist happiness of owning a yacht, while also enjoying the quintessential communist bliss of riding public transit. Honestly, riding bikes on ferries was all we needed to end the Cold War.',
    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.HTML,
        // width="560" height="315"
        // width="352" height="198"
        html: '<iframe width="215" height="143" style="margin-right: 5px;" src="https://www.youtube.com/embed/4b0mZhSPaBU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        // type: CONTENT_TYPES.IMAGE,
        // alt: 'video of getting on the ferry',
        // url: 'ferry.mp4',
        // grid: 'col-sm-4', // This is out of 12 how much space it takes up.
        // // description: 'A unkown bike we took off of unsplash'
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Water at the ferry',
        url: 'https://imgur.com/22sOoJ8.jpg', // 'DSC00103.JPG',
        thumbnailUrl: 'http://imgur.com/22sOoJ8t.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
        // description: 'A unkown bike we took off of unsplash'
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Adam smiling on the ferry',
        url: 'https://imgur.com/vMdzoN4.jpg', // 'DSC00105.JPG',
        thumbnailUrl: 'http://imgur.com/vMdzoN4t.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
        // description: 'A unkown bike we took off of unsplash'
      }]
    },
    // <iframe class="col-sm-4" src="https://www.youtube.com/embed/4b0mZhSPaBU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -- ferry vid
    // https://imgur.com/22sOoJ8 -- DSC00103.JPG <- Ferry water 
    // https://imgur.com/vMdzoN4 -- DSC00105.JPG <- Adam smiling on ferry
    'For our first smelly, bikey night we slept in my friend Anna Beebe’s parent’s renovated water tower. Imagine a 5 story tiny house that fulfills all of your childhood (or adulthood) dreams of being a lighthouse keeper. It took some sketchy night biking past several “Drive safe in memory of _____” signs and getting lost in a field to get there, but once we did we were treated to pizza and a coziness that only a water tower can offer.',
    'The next day was set to be our first real day of biking. We planned on going 85 miles on the Olympic Peninsula from Kingston to Salt Creek Campground. It started off as a calm day of cloudy biking through the forest but after crossing the Hood Canal Bridge everything changed. While elatedly watching the cutest baby dolphin when we looked up and saw a massive wall of grey storm advancing. After crossing the bridge the wind started billowing and the snow started dumping. Even our dreams of being surf bums in Baja couldn’t keep us warm. There is a muted, pillowy beauty of biking in the snow, constantly interrupted by chattering teeth. At some point the combination of numb fingers and shivering made it hard to steer and once the snow started sticking we couldn’t trust the cars not to hit us. We decided to hole up in the first spot that we could find which ended up being the Detour Cafe/Bar/Convenience store in Discovery Bay.',
    'We were debating on whether to bike 12 more miles to Sequim on a road with no shoulder and 2” of snow or to camp in a field that this guy Aragorn owns, when 2 angels, Erin and Kris, offered to put us up in their yurt. Meanwhile a regular at the bar, Jay, is drunkenly trying to convince Nick to run to the stop sign barefoot for $10 and just the thought of our cold little toes seals the deal on the yurt.',
    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.HTML,
        // width="560" height="315"
        // width="280"
        html: '<iframe width="215" height="143" style="margin-right: 5px;" src="https://www.youtube.com/embed/G7syWMgZCbY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'yurt at night',
        url: 'https://imgur.com/4Ekhe4Z.jpg', // 'DSC00103.JPG',
        thumbnailUrl: 'http://imgur.com/4Ekhe4Zt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
        // description: 'A unkown bike we took off of unsplash'
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'warming up in the yurt',
        url: 'https://imgur.com/YvQAVIZ.jpg', // 'https://imgur.com/HcYmVnm.jpg', // 'DSC00103.JPG',
        thumbnailUrl: 'http://imgur.com/YvQAVIZt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
        // description: 'A unkown bike we took off of unsplash'
      }]
    },
    // <iframe width="560" height="315" src="https://www.youtube.com/embed/G7syWMgZCbY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -- MAH03819.MP4 <- just vid of biking in snow
    // Add yurt photo
    'Rhys and I end up driving to the yurt with Kris not exactly knowing what a yurt is and I what I imagined being a 5’ teepee structure ended up being a huge 30’ domed building with its own composting toilet and kitchen in a whole yurt community. To top it off we went back to the bar to partake in an essential American holiday: the Super Bowl. Nobody there actually cared about football but Donald brought stuffed potatoes so I thought it was a good game. In the morning Erin and Kris made some of the best pancakes I have ever had and we lived the yurt life a bit longer as we waited out the snow. Meanwhile our bikes have been sitting in the back of the truck caked in snow. Our cassettes were frozen in a block of ice and we ended not being able to shift all day. We learned to precariously bike on ice with barely functional brakes but all the while the sun was shining and the snow was twinkling like only snow can. We said bye to Nick that morning while Rhys and I finally headed South.',
    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Bike chain in ice',
        url: 'https://imgur.com/J7btSKu.jpg', // 'DSC00143.JPG',
        thumbnailUrl: 'http://imgur.com/J7btSKut.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
        // description: 'A unkown bike we took off of unsplash'
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Nick biking up a snow covered hill',
        url: 'https://imgur.com/xOSz8Xb.jpg', // 'DSC00103.JPG',
        thumbnailUrl: 'http://imgur.com/xOSz8Xbt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
        // description: 'A unkown bike we took off of unsplash'
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'The Olympics',
        url: 'https://imgur.com/nfxEAl9.jpg',
        thumbnailUrl: 'http://imgur.com/nfxEAl9t.jpg',
        grid: 'col-sm-4'
      }]
    },
    // https://imgur.com/xOSz8Xb -- DSC00133.JPG <- Nick biking up hill towards camera
    // https://imgur.com/nfxEAl9 -- DSC00131.JPG <- The Olympics
    // https://imgur.com/SU2delL -- DSC00143.JPG <- Chain in ice
    'The joy and freedom of bike touring is setting in as we start to drift to sleep in Dosewallip State Park. Our bikes are thawing and we have almost made it further South than where we started.',
    // https://imgur.com/m6Nth2j -- DSC00170.JPG <- Favorite street name so far
    // DSC00157.JPG <- Cool biking photo
    // {
    //   type: CONTENT_TYPES.GRID,
    //   items: [{
    //     type: CONTENT_TYPES.IMAGE,
    //     alt: 'favorite street name yet - tog',
    //     url: 'https://imgur.com/m6Nth2j.jpg',
    //     grid: 'col-sm-6', // This is out of 12 how much space it takes up.
    //     // description: 'A unkown bike we took off of unsplash'
    //   }]
    // }
    /* , {
      type: CONTENT_TYPES.EXTERNAL_LINK,
      text: 'Rhys\'s website',
      url: 'https://rhyshowell.com',
      target: '_blank'
    }*/
  ]
};

