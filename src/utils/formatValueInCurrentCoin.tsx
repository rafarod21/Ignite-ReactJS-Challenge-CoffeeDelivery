export function formatValueInCurrentCoin(value: number) {
  const current = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  return current;
}

export function formatValueInCurrentCoinWithoutSymbol(value: number) {
  const current = value.toLocaleString('pt-br', { minimumFractionDigits: 2 });

  return current;
}
