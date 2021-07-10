const categories = [
  {
    key: 'l',
    name: 'Category A',
    colors: ['#FFED99', '#F6B8B8', '#AC66CC', '#3B14A7', '#FB9300', '#F54748'],
  },
  {
    key: 'd',
    name: 'Category B',
    colors: ['#00EAD3', '#FFF5B7', '#FF449F', '#005F99', '#EBA83A', '#BB371A'],
  },
  {
    key: 'i',
    name: 'Category C',
    colors: ['#867AE9', '#FFF5AB', '#FFCEAD', '#C449C2', '#1EAE98', '#FFFFC7'],
  },
];

const r = () => 40 + Math.floor(460 * Math.random());

const items = categories.reduce(
  (acc, category) => [
    ...acc,
    ...category.colors.map((i, index) => ({
      color: i,
      key: `${category.key}-${index}`,
      cat: category.key,
      width: r(),
      y: 25 + 45 * index,
      opacity: 1,
    })),
  ],
  [],
);

export default { categories, items };
