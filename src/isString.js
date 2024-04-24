// @ts-check

/**
 * Test if something is a string
 * @param {any} x Variable to test
 * @returns {boolean}
 */
export default function isString(x) {
    return Object.prototype.toString.call(x) === '[object String]';
}
