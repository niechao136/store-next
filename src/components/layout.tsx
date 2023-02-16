import { PropsWithChildren } from 'react'

export default function layout(props: PropsWithChildren) {
  return (
    <div style={{backgroundImage: `url('/background.png')`}}>
      {props.children}
    </div>
  )
}
