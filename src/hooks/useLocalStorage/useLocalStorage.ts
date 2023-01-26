import { useEffect, useState } from 'react'

import { getStorageValue } from '../../functions'

const useLocalStorage = <V = string>(
  key: string,
  defaultValue?: V
): [V, React.Dispatch<React.SetStateAction<V>>] => {
  const [value, setValue] = useState<V>(() => {
    return getStorageValue(key) || defaultValue || ''
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
