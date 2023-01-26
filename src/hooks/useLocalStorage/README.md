# useLocalStorage

Get and set local storage values

## Usage

```jsx
import { forwardRef, useRef } from 'react'

import { useLocalStorage } from '@spencerlabs/utils/hooks'

const Component = forwardRef((props, ref) => {
  const [name, setName] = useLocalStorage('name')

  // more component code
})
```
