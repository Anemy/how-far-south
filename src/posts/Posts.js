import Baja from './Baja';
import Beginnings from './Beginnings';
import Daily from './Daily';
import Gear from './Gear';
import North from './North';
import SalemSoiree from './SalemSoiree';
import Resources from './Resources';
import Route from './Route';
import Redwoods from './Redwoods';
import Rainbows from './Rainbows';

// console.log('North', North);

const posts = {
  // [Beginnings.url]: Beginnings,
  // [Gear.url]: Gear,
  [Baja.url]: Baja,
  [Rainbows.url]: Rainbows,
  [Redwoods.url]: Redwoods,
  [SalemSoiree.url]: SalemSoiree,
  [North.url]: North,
  [Resources.url]: Resources,
  // [Daily.url]: Daily
};

posts.keys = Object.keys(posts);
posts.mostRecent = Baja.url;

export default posts;
export { Baja, Beginnings, SalemSoiree, Resources, North, Redwoods, Rainbows, Gear, Route, Daily };
