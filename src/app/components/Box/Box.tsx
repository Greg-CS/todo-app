import React from 'react'
import { FontChange } from '../FontChange/FontChange'

export const Box = ({children} : any) => {

    // lol goes here <-- this is a comment
  return (
    <div>
      <FontChange>
        {children}
      </FontChange>
    </div>
  )
}
