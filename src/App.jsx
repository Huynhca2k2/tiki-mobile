import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import Carousel from './components/Carousel'
import InfoSupport from './components/InfoSupport'
import MoreApp from './components/MoreApp'
import InfoApp from './components/InfoApp'
import DataSecurity from './components/DataSecurity'

function App() {

  return (
    <>
      <Header />
      <div className='sm:mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg mx-6 my-6 sm:my-12 overflow-hidden'>
        <MainContent/>
        
        <div className='flex sm:flex-row sm:justify-between sm:gap-16 flex-col gap-0 justify-normal'>
          <div className='sm:w-2/3 w-full'>
            <Carousel />
            <InfoApp/>
            <DataSecurity/>
          </div>
          <div className='sm:w-1/3 w-full'>
            <InfoSupport/>
            <MoreApp/>
          </div>

        </div>
        <Footer />
      </div>
      
    </>
  )
}

export default App
