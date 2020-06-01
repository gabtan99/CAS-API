const getPaginatePayload = (array, limit, cursor) => {
  if (array.length == 0) return { data: array, cursor: null };

  if (!cursor && array.length > 0) cursor = array[0].id;

  const newestIndex = array.findIndex((o) => o.id === cursor);
  const nextItem = array[newestIndex + limit];
  const nextCursor = nextItem ? nextItem.id : null;

  return {
    data: array.slice(newestIndex, newestIndex + limit),
    nextCursor,
  };
};

module.exports = getPaginatePayload;
