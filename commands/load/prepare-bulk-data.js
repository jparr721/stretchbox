let bulk = [];
const prepareBulkData = (list, params) => {
  list.map((current, id) => {
    bulk.push(
      { index: { index: params.index, type: params.type, id: id} },
      current
    );
  });
  return bulk;
};

module.exports = prepareBulkData;
