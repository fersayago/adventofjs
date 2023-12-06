function manufacture(gifts: string[], materials: string): string[] {
  const arrayMateriales: string[] = materials.split('');
  
  return gifts.filter((word: string) =>
    word.split('').every((char: string) =>
      arrayMateriales.includes(char)
    )
  );
}