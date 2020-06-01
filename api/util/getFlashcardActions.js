const getFlashcardActions = (existing, updated) => {
  const actions = {
    create: [],
    update: [],
    delete: [],
  };

  updated.some((obj) => {
    if (existing.some((e) => e.id === obj.id)) {
      actions.update.push(obj);
    } else {
      delete obj.id;
      actions.create.push(obj);
    }
  });

  existing.some((obj) => {
    if (!updated.some((e) => e.id === obj.id)) actions.delete.push(obj);
  });

  return actions;
};

module.exports = getFlashcardActions;
