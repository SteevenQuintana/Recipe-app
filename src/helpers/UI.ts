export const UIhelper = {
  shortenText(str: string): (string | undefined)[] {
    const words = str.split(" ");
    if (words.length >= 2) {
      const newStr = [];
      newStr.push(words[0]);
      newStr.push(words.at(-1));
      return newStr;
    } else {
      return [str, ""];
    }
  },
  recipeName(str: string): string {
    return str === "Home" ? "Nuevas Recetas" : str;
  },
  recipeReady(num: number): string {
    return num === 1 ? `${num} minuto` : `${num} minutos`;
  },
  recipeDifficulty(num: number): string {
    if (num >= 10) return "difícil";
    if (num >= 7) return "medio";
    else return "fácil";
  },
  recipeRating(): number {
    return (
      Math.floor(Math.random() * 2) + Math.floor(Math.random() * 10) / 10 + 3
    );
  },
};
