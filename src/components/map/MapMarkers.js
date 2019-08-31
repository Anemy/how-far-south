import Posts from '../../posts';

// console.log('posts', Posts);

export default [
  {
    x: 157,
    y: 73,
    location: {
      city: 'Seattle',
      region: 'Washington',
      countryCode: 'US'
    },
    post: Posts.North.url
  },
  {x: 152, y: 64}, // Kingston, WA, US
  {x: 148, y: 63}, // The Detour, WA, US
  {x: 147, y: 72}, // Dosewallips, WA, US
  {x: 144, y: 85}, // Olympia, WA, US
  {x: 146, y: 93}, // Kelso, WA, US
  {
    x: 140,
    y: 103,
    // location: {
    //   city: 'Portland',
    //   region: 'Oregon',
    //   countryCode: 'US'
    // }
  },
  {x: 137, y: 113,
    location: {
      city: 'Salem',
      region: 'Oregon',
      countryCode: 'US'
    },
    post: Posts.Salem.url
  }, // Salem, OR, US
  {x: 133, y: 114}, // Otis, OR, US
  {x: 116, y: 118}, // Newport, OR, US
  {x: 112, y: 124}, // Waldport, OR, US
  {x: 106, y: 134}, // Winchester Bay, OR, US
  {x: 101, y: 139}, // Bandon, OR, US
  {x: 102, y: 142}, // Humbug Mountain, OR, US
  {x: 100, y: 149}, // Brookings, OR, US
  {x: 96, y: 156}, // Elk Prairee Campground, CA, US
  {x: 93, y: 167}, // Eureka, CA, US
  {x: 89, y: 173}, // Fish Creek, CA
  {x: 86, y: 180}, // Westport, CA
  {x: 91, y: 189}, // Boonville, CA
  {x: 96, y: 202}, // Sonoma, CA
  {
    x: 90,
    y: 214,
    post: Posts.Redwoods.url,
    location: {
      city: 'San Francisco',
      region: 'California',
      countryCode: 'US'
    }
  },
  {x: 91, y: 225}, // Santa Cruz, CA
  {x: 93, y: 228}, // Monterey, CA
  {x: 90, y: 230}, // Monterey, CA
  {x: 91, y: 236}, // Esalen Institute, Big Sur, CA
  {x: 96, y: 247}, // San Simeon, CA
  {x: 98, y: 261}, // Pismo Beach, CA
  {x: 110, y: 264}, // Goleta, CA
  {x: 117, y: 268}, // Sycamore Canyon Campground, CA (Near Oxnard)
  {x: 122, y: 272}, // West Holywood, Los Angeles, CA
  {x: 127, y: 277}, // Crystal Cove, CA
  {x: 128, y: 282}, // Deer Park Monestary, Escondido, CA
  {x: 126, y: 286}, // San Diego, CA
  {
    x: 131,
    y: 290,
    post: Posts.Rainbows.url,
    location: {
      city: 'Tecate',
      region: 'Baja California',
      countryCode: 'MX'
    }
  },
  {x: 128, y: 297}, // Ensenada, Baja, MX
  {x: 133, y: 307}, // Somewhere on the Baja divide near Santo Tomas?, Baja, MX
  {x: 131, y: 314}, // Punta Colonet, Baja, MX
  {x: 133, y: 321}, // Lazaro Cardainas / Baja Divide, Baja, MX
  {x: 140, y: 322}, // Baja Divide East of Neuva Odisea, Baja, MX
  {x: 142, y: 327}, // Baja Divide more East and South of Neuva Odisea, Baja, MX
  {x: 145, y: 333}, // Cataviña, Baja, MX
  {x: 148, y: 342}, // A bit after Punta Prieta, Baja, MX
  {x: 145, y: 358}, // Guerrero Negro, Baja, MX
  {x: 153, y: 371}, // San Iglesio, Baja, MX
  {x: 152, y: 372}, // ~10 miles south of San Iglesio, Baja, MX
  {x: 152, y: 377}, // Near a fishing town Los Castros in Baja, MX
  {x: 155, y: 377}, // Baja Divide near the river on the ranch road to Mulegé, Baja, MX
  {x: 159, y: 375}, // Baja Divide in the mountains on the ranch road to Mulegé, Baja, MX
  {x: 165, y: 374}, // Mulegé, Baja, MX
  {x: 166, y: 377}, // Coast across from the peninsula South of Mulegé, Baja, MX
  {x: 164, y: 384}, // Somewhere slightly off the divide near Comondú
  {x: 161, y: 381}, // Not a day - just backtrack point
  {x: 161, y: 396}, // Francisco Villa/La Poza Grande
  {x: 166, y: 408}, // About 20 miles south of Ciudad Constitution
  {x: 174, y: 414}, // About 40 miles out of La Paz
  {
    x: 178,
    y: 412,
    post: Posts.baja.url,
    location: {
      city: 'La Paz',
      region: 'Baja California Sur',
      countryCode: 'MX'
    }
  },
  {x: 227, y: 433}, // Mazatlán
  {x: 241, y: 430}, // On the way to Durango
  {x: 248, y: 429}, // Durango
  {x: 258, y: 435}, // On the way to Zacates
  {x: 267, y: 448}, // On the way to Zacates
  {x: 264, y: 469},  // Zacates
  {x: 280, y: 478},
  {x: 300, y: 484},
  {x: 298, y: 493},
  // {x: 320, y: 513},
  {
    x: 320,
    y: 513,
    post: Posts.mexico.url,
    location: {
      city: 'Oaxaca City',
      region: 'Oaxaca',
      countryCode: 'MX'
    }
  },
  {x: 310, y: 529},
  {x: 325, y: 535},
  {x: 340, y: 525},
  {x: 356, y: 525},
  {x: 364, y: 514},
  {x: 373, y: 531},
  {x: 379, y: 533},
  {x: 380, y: 539},
  {x: 383, y: 546},
  {x: 392, y: 551},
  {x: 398, y: 556},
  {x: 415, y: 564},
  {x: 413, y: 568},
  {x: 428, y: 571},
  {x: 438, y: 573},
  {
    x: 448,
    y: 585,
    location: {
      city: 'León',
      countryCode: 'GT'
    },
    post: Posts.guatemala.url
  },
  {x: 450, y: 590},
  // {x: 456, y: 590},
  {x: 461, y: 594, inprogress: true},
  {x: 458, y: 601},
  {x: 468, y: 602},
  {x: 464, y: 614},
  {x: 473, y: 614},
  {
    x: 478,
    y: 628,
    location: {
      city: 'San Jose',
      countryCode: 'CR'
    }
  },
  {x: 487, y: 633},
  {x: 499, y: 645},
  {x: 513, y: 645},
  {x: 525, y: 641},
  {x: 531, y: 635},
  {x: 541, y: 635},
  {x: 584, y: 640},
  {x: 578, y: 651},
  {x: 567, y: 659},
  {x: 562, y: 666},
  {x: 567, y: 668},
  {x: 567, y: 680},
  {x: 579, y: 686},
  {x: 573, y: 700},
  {x: 566, y: 712},
  {x: 571, y: 718},
  {x: 565, y: 730},
  {x: 554, y: 731},
  {x: 555, y: 743},
  {x: 562, y: 746},
  {x: 553, y: 758},
  {x: 542, y: 771},
  {x: 556, y: 786},
  {x: 547, y: 814},
  {x: 566, y: 815},
  {x: 561, y: 870},
  {x: 578, y: 867},
  {x: 578, y: 913},
  {x: 604, y: 971},
  {x: 624, y: 971},
  {x: 624, y: 996},
  {x: 642, y: 996},
  {x: 642, y: 1015},
  {x: 657, y: 1022},
  {x: 657, y: 1027},
  {x: 669, y: 1039},
  {x: 669, y: 1056},
  {x: 673, y: 1060},
  {x: 685, y: 1061},
  {x: 704, y: 1061},
  {x: 704, y: 1082},
  {x: 686, y: 1108},
  {x: 675, y: 1171},
  {x: 687, y: 1210},
  {
    x: 689,
    y: 1268,
    location: {
      city: 'Santiago',
      countryCode: 'CL'
    }
  },
  {x: 687, y: 1279},
  {x: 700, y: 1287},
  {x: 677, y: 1336},
  {x: 702, y: 1356},
  {x: 700, y: 1370},
  {x: 717, y: 1370},
  {x: 716, y: 1390},
  {x: 713, y: 1393},
  {x: 711, y: 1398},
  {x: 709, y: 1427},
  {x: 728, y: 1441},
  {x: 708, y: 1457},
  {x: 731, y: 1480},
  {x: 723, y: 1493},
  {x: 735, y: 1499},
  {x: 735, y: 1511},
  {x: 746, y: 1511},
  {x: 746, y: 1525},
  {x: 759, y: 1526},
  {x: 759, y: 1536},
  {x: 764, y: 1545},
  {x: 764, y: 1554},
  {x: 772, y: 1549},
  {x: 784, y: 1549},
  {x: 784, y: 1555},
  {
    x: 800,
    y: 1570,
    location: {
      city: 'Ushuaia',
      region: 'Tierra del Fuego',
      countryCode: 'AR'
    }
  }
];
