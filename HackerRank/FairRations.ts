function fairRations(B: number[]): string {
  let count = 0;
  for (let i = 0; i < B.length; i++) {
    if (B[i] % 2 == 1 && i == B.length - 1) {
      console.log();
      B[i] += 1;
      B[i - 1] += 1;
      count += 2;
    }
    if (B[i] % 2 == 1) {
      B[i] += 1;
      B[i + 1] += 1;
      count += 2;
    }
    console.log(B);
  }
  const sum: number = B.reduce((acc, tot) => (tot = acc + tot), 0);
  if (sum % 2 == 1) {
    return "NO";
  }

  return count.toString();
}
