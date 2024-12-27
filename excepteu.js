/**
 * Checks if the encoding object has a specified channel with a defined field.
 * 
 * @param {Object} encoding - The encoding object containing various channels.
 * @param {string} channel - The channel to check for a field.
 * @returns {boolean} - Returns true if the channel has a defined field, otherwise false.
 */
function channelHasField(encoding, channel) {
  // Check if the encoding object has a property named after the channel
  if (encoding.hasOwnProperty(channel)) {
    // Check if the channel has a defined field
    return typeof encoding[channel].field !== 'undefined';
  }
  // If the channel does not exist in encoding, return false
  return false;
}

// Usage example
const encoding = {
  x: { field: 'category' },
  y: { field: 'value' },
  color: { field: 'type' },
};

console.log(channelHasField(encoding, 'x')); // Output: true
console.log(channelHasField(encoding, 'color')); // Output: true
console.log(channelHasField(encoding, 'size')); // Output: false
