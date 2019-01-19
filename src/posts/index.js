import Beginnings from './Beginnings';
import Gear from './Gear';
import Daily from './Daily';
import Resources from './Resources';
import Route from './Route';

const posts = {
  [Beginnings.url]: Beginnings,
  // [Gear.url]: Gear,
  [Resources.url]: Resources,
  // [Route.url]: Route,
  // [Daily.url]: Daily
};

posts.keys = Object.keys(posts);
posts.mostRecent = Resources.url;

export default posts;
export { Beginnings, Resources, Gear, Route, Daily };
