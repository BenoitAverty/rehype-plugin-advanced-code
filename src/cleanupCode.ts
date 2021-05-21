export default function cleanupCode(rawCode: string): string {
  const trimEmptyLines = (code: string) => code.replace(/(^\n+)|(\n+$)/g, "");

  return trimEmptyLines(rawCode);
}
