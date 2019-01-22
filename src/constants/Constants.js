// TODO: Async load.
import CountryEmojis from '../data/country-emojis.json';

const Constants = {};

export function kavrayskiy7Raw(lambda, phi) {
  return [3 / (Math.PI * 2) * lambda * Math.sqrt(Math.PI * Math.PI / 3 - phi * phi), phi];
}

kavrayskiy7Raw.invert = function(x, y) {
  return [(Math.PI * 2) / 3 * x / Math.sqrt(Math.PI * Math.PI / 3 - y * y), y];
};
Constants.kavrayskiy7Raw = kavrayskiy7Raw;

export function getLocationString(location) {
  const regionString = location.region ? `${location.region}, ` : '';
  return `${location.city}, ${regionString}${CountryEmojis[location.countryCode].name} ${CountryEmojis[location.countryCode].emoji}`;
}

Constants.getLocationString = getLocationString;

export default Constants;
