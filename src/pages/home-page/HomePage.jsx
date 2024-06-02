import SubscriptionComponent from '@/components/features/home/SubscriptionComponent'
import Header from '@/components/global/Header'
import React from 'react'

const HomePage = () => {
  return (
    <div className='flex flex-col w-screen min-h-screen' >
        <Header/>
        <SubscriptionComponent/>
    </div>
  )
}

export default HomePage