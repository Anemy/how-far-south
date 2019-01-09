import Beginnings from './Beginnings';
import Gear from './Gear';
import Daily from './Daily';
import Route from './Route';

const posts = {
  [Beginnings.url]: Beginnings,
  // [Gear.url]: Gear,
  // [Route.url]: Route,
  // [Daily.url]: Daily
};

posts.keys = Object.keys(posts);
posts.mostRecent = Beginnings.url;

export default posts;
export { Beginnings, Gear, Route, Daily };
