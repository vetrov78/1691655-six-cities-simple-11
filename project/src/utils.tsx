export const getRatingInProcent = (rating:number) => {
  const result = Math.round(rating) * 20;

  return `${result}%`;
};
