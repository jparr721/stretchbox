const checkValidJson = (dataFile) => {
  try {
    JSON.parse(dataFile);
  } catch (e) {
    return false;
  }
  return true;
};

module.exports = checkValidJson;
