// eslint-disable-next-line import/prefer-default-export
export const formatCurrency = (value) => {
  const nf = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return nf.format(value);
};
