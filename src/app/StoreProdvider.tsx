"use client"
import { makeStore } from '@/store'
import React, { Children } from 'react'
import { Provider } from 'react-redux'
// import { makeStore } from '../store'

export default function StoreProdvider({
    children
}:{
    children: React.ReactNode
}) {
  return <Provider store={makeStore} children={children}>

  </Provider>
}
