// To create a separate array of unique categories, since one project can fall under multiple categories too
export const extractUniqueCategories = (data) => {
  const allCategories = data.flatMap((item) => item.category_title);
  return [...new Set(allCategories)];
};

export const createCategoryPathname = (category) => {
  const lowercase = category.toLowerCase();
  return lowercase.split(" ").join("");
};
