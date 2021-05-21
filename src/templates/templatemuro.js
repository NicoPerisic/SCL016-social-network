export const muro = () => {
  const viewMuro = document.createElement('div');
  viewMuro.id = 'muro';
  viewMuro.appendChild(nav());

  return viewMuro;
};
