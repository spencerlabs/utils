# useCombinedRefs

Combines two or more React refs into one

## Usage

```jsx
import { forwardRef, useRef } from 'react'

import { useCombinedRefs } from '@spencerlabs/utils/hooks'

const Component = forwardRef((props, ref) => {
  const internalRef = useRef()
  const combinedRef = useCombinedRefs(internalRef, ref)

  // more component code
})
```
