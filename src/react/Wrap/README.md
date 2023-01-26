# Wrap

Component to conditionally wrap content.

```jsx
import { Wrap } from '@spencerlabs/utils/react'

const Component = (condition) => {
  return (
    <Wrap if={condition} with="a" wrapperProps={{ href: './page' }}>
      <span>Item</span>
    </Wrap>
  )
}
```
