function findFirstRepeated(gifts: number[]) {
  const idSet = new Set<number>();

  for (const id of gifts) {
    if (idSet.has(id)) {
      return id;
    }
    idSet.add(id);
  }
  return -1
}