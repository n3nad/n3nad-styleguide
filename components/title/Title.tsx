import * as React from 'react'

import { rhythm, scale } from '../../global/typography'

enum Size {
  STANDARD = 'standard',
  SMALL = 'small'
}

export interface TitleProps {
  size: Size,
  children: React.ReactNode
}

function Title(props: TitleProps) {

  const { children, size = Size.STANDARD } = props
  let title

  if (size === Size.STANDARD) {
    title = (
      <h1
        style={{
          ...scale(1.3),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          fontFamily: `Abril Fatface, sans-serif`,
          // color: '#F85759',
        }}>
        {children}
      </h1>
    )
  } else if (size === Size.SMALL) {
    title = (
      <h3
        style={{
          marginTop: 0,
          fontFamily: `Abril Fatface, sans-serif`,
          color: '#EF5366',
        }}>
        {children}
      </h3>
    )
  }
  // Render
  return (
    <header>{title}</header>
  )
}

export default Title
