# classNames

Creates a single class string from several

## Usage

```jsx
import { classNames } from '@spencerlabs/utils/functions'

const Component = (large) => {
  return (
    <button
      className={classNames('btn', large && 'btn-lg')}
    >
      Click me!
    </button>
  )
}
```
