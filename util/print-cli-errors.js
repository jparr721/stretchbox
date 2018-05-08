const printCliErrors = (err=[]) => {
  console.log('--------------------ERROR---------------------');
  err.forEach((error) => {
    console.error(error);
  });
};

module.exports = printCliErrors;
