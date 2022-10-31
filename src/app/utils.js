
export const jsonToIterableArray = (json) => {
  const { head, results } = json;
  const { vars, bindings } = results;
  const iterableArray = bindings.map((binding) => {
    const object = {};
    vars.forEach((key) => {
      object[key] = binding[key].value;
    });
    return object;
  });
  return iterableArray;
};
