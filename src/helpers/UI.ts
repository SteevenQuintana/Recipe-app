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
};
