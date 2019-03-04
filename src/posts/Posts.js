import Beginnings from './Beginnings';
import Daily from './Daily';
import Gear from './Gear';
import North from './North';
import SalemSoiree from './SalemSoiree';
import Resources from './Resources';
import Route from './Route';
import Redwoods from './Redwoods';

// console.log('North', North);

const posts = {
  // [Beginnings.url]: Beginnings,
  // [Gear.url]: Gear,
  [Redwoods.url]: Redwoods,
  [SalemSoiree.url]: SalemSoiree,
  [North.url]: North,
  [Resources.url]: Resources,
  // [Daily.url]: Daily
};

posts.keys = Object.keys(posts);
posts.mostRecent = Redwoods.url;

export default posts;
export { Beginnings, SalemSoiree, Resources, North, Redwoods, Gear, Route, Daily };
