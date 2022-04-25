const truncateText = (str: string) =>
  str.length > 90 ? `${str.substring(0, 80)}...` : str;

export default truncateText;
