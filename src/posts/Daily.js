import { CONTENT_TYPES } from './constants';

const STAY_KINDS = {
  CAMPING: 'CAMPINGS',
  LODGE: 'LODGE',
  WARM_SHOWERS: 'WARM_SHOWERS',
  RANDOM_NEW_FRIENDS: 'RANDOM_NEW_FRIENDS',
  STEALTH_CAMPING: 'STEALTH_CAMPING',
  LEGAL_CAMPING: 'LEGAL_CAMPING',
  PERMISSION_CAMPING: 'PERMISSION_CAMPING',
  FRIENDS_FAMILY: 'FRIENDS_FAMILY'
}

export default {
  url: 'daily',
  title: 'The Daily',
  date: new Date(2019, 0 /* 0 is January. */, 30 /* 0 is the first of the month. */),
  description: 'Daily updates - what we see - what we do - less fluff more reality.',
  content: [
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 1 - Gas Works Park, Seattle, WA -> Kingston WA',
      stay: STAY_KINDS.FRIENDS_FAMILY
    },
    '14 to ferry - Edmunds -> Kingston. 8.3 Miles Kingston -> Anna\'s parent\'s watertower',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 2 - Kingston WA, WA -> The Detour',
      stay: STAY_KINDS.RANDOM_NEW_FRIENDS
    },
    '32 miles - 2 going wrong way. Snow storm after bridge when we say dolphins.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 3 - Kingston WA -> Dosewallips State Park, WA',
      stay: STAY_KINDS.LEGAL_CAMPING
    },
    '26 miles - Some nice snow biking in the morning - bye to nick - later in the day over a nice wintery pass',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 4 - Dosewallips State Park, WA -> Olympia, WA',
      stay: STAY_KINDS.WARM_SHOWERS

    },
    '65 miles - Nice bike ride next to Hood Canal. Night at warmshowers - ',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 5 - Olympia, WA -> Kelso, WA',
      stay: STAY_KINDS.WARM_SHOWERS
    },
    '77 miles - Nice back country roads through good trees. Night at warmshowers - Joel\'s.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 6 - Kelso, WA -> Portland, OR',
      stay: STAY_KINDS.FRIENDS_FAMILY
    },
    '58 miles - Cool bridge into Oregon, PST trail, then chill oregon highway - didn\'t feel very remote, neat bridge and mountains around Portland, and biking around Portland.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 7 - Portland, OR',
      restDay: true,
      stay: STAY_KINDS.FRIENDS_FAMILY
    },
    'Hanging out at Zoe\'s - Thanks for hosting!',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 8 - Portland, OR -> Salem, OR',
      stay: STAY_KINDS.FRIENDS_FAMILY
    },
    '55 miles - Party time at L\'s! Some American midwest vibes on the way there.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 9 - Salem, OR -> Otis, OR',
      stay: STAY_KINDS.FRIENDS_FAMILY
    },
    '49 miles - Over a pass before the rains starts back up tonight/tomorrow. About to be a 7 day storm with snow on the road/pass we\'re taking. Camped next to river.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 10 - Otis, OR -> Newport, OR', // Feb 11
      stay: STAY_KINDS.LODGE
    },
    '36 miles - Into highway 101. Went on the beautiful otter crest loop. Some big sur nice. Nice wind rain. Stayed in econolodge lol',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 11 - Newport, OR -> Waldport, OR',
      stay: STAY_KINDS.FRIENDS_FAMILY
    },
    '17 miles - Worked on blogpost in coffee shop for the morning, rainy bike along 101. nice coastline. got gopro working. Stayed at Harper & Nick & Airee?\'s place.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 12 - Waldport, OR -> Winchester Bay, OR',
      stay: STAY_KINDS.STEALTH_CAMPING
    },
    '63 miles - Beautiful Oregon coastline. Over nice hills. Through a tunnel after a lighthouse. Camped in Umpqua state park on some dunes.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 13 - Winchester Bay, OR -> Bandon, OR',
      stay: STAY_KINDS.WARM_SHOWERS
    },
    '48 miles - Staying at Brian\'s. He leads Coosboattours. We\'ll be helping out with the Gorse Blossom Festival.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 14 - Bandon, OR',
      stay: STAY_KINDS.WARM_SHOWERS,
      restDay: true
    },
    'Evicerated crab for the Gorse Blossom Festival with Mike - Marine Biologist from Georgia.'
  ]
}


/**

Miles
1 - 14 
2 - 32 
3 - 26 
4 - 65 
5 - 77 
6 - 58 
7 - 0 
8 - 55 
9 - 49 
10 - 36 
11 - 17 
12 - 63 
13 - 48 
14 - 0 
Total: 540
Biking Days: 12
Average miles per bike day - 45

Metrics to track:
Days on the road
Floors we sleep on / Days Camping / Surfaces
Cry counter
Bathroom stops
Flats
Miles Bikes
Tacos eaten
Beers

Film things:
A minute of footage in each place. Each day.
Drone footage
As much footage as possible
Facecams - like caleb on youtube - try it.

The midwestern american dream - is it a recurring theme

**/