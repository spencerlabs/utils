export default function getStorageValue(key: string) {
  const saved = localStorage.getItem(key)
  return saved && JSON.parse(saved)
}
