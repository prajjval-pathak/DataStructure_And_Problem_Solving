function reverseWords(s: string): string {
  const reverse_string: string[] = s.trim().split(" ").reverse();
  let str: string = "";
  console.log(reverse_string);
  for (let i = 0; i < reverse_string.length; i++) {
    str +=
      reverse_string[i] === ""
        ? ""
        : `${reverse_string[i]}${i === reverse_string.length - 1 ? "" : " "}`;
  }
  return str;
}
console.log(reverseWords("a good   example"));
