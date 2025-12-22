// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
   return `NCC-${1000 + Math.floor(Math.random() * 9000)}`
  
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return 41000 + Math.random() * 1000;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
const CLASSES = "DHJKLMNRTY";
export function randomPlanetClass() {
  return CLASSES[Math.floor(Math.random() * CLASSES.length)];
}
