import { createElement } from 'react'

interface IWrap {
  if?: boolean
  with: (typeof createElement.arguments)[0]
  wrapperProps: (typeof createElement.arguments)[1]
  children: NonNullable<React.ReactNode>
}

const Wrap = ({
  if: condition,
  with: wrapper,
  wrapperProps,
  children,
}: IWrap) =>
  condition ? createElement(wrapper, wrapperProps, [children]) : <>children</>

export default Wrap
