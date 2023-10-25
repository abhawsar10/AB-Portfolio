import styled from 'styled-components'
import { animated } from '@react-spring/web'

export const Frame = styled('div')`
  color: #78716c;
`


export const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed rgb(168 162 158);
  overflow: hidden;
`

export const TreeTitle = styled('span')`
  font-family: 'Kanit', sans-serif;

  &:hover {
    color: #abd92e;
  }
`
