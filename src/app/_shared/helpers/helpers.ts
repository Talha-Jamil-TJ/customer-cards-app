export const GET_RANDOM_CLASS = (): string => {
  const color = Math.floor(Math.random() * 16777215).toString(16);

  if (color.toLocaleLowerCase().startsWith('fff')) {
    return GET_RANDOM_CLASS();
  }

  return color;
};
