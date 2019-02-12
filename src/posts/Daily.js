import { CONTENT_TYPES } from './constants';

const STAY_KINDS = {
  CAMPING: 'CAMPINGS',
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
    '58 miles - Cool bridge into Oregon, PST trail, then chill oregon highway - didn\'t feel very remote, neat bridge and mountains around Portland, and biking around Portland',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 7 - Portland, OR Rest Day',
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
      text: 'Day 10 - Otis, OR -> Newport, OR',
      stay: STAY_KINDS.FRIENDS_FAMILY
    },
    '36 miles - Into highway 101. Went on the beautiful otter crest loop. Some big sur nice. Nice wind rain',
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
7 - Rest
8 - 55
9 - 49
10 - 36
Total: 412
Biking Days: 10

Day 1


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