export default function classNames(...classes: string[]) {
  return classes
    .filter(Boolean)
    .map((c) => c && c.trim())
    .join(' ')
}
