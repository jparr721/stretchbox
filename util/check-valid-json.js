const checkValidJSON = (dataFile) => {
  try {
    return JSON.parse(dataFile);
  } catch (e) {
    console.error('Error in seedfile, cannot generate random data!');
  }
};

module.exports = checkValidJSON;
