export function changeString(string) {
  const slicing = string.slice(0, 12);

  if (string.length < 12) {
    return string;
  }

  return slicing + "...";
}
