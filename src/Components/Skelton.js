import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Skelton = () => {
  return (
    <div className='container d-flex'>
    <div className='col-md-3  mt-5'>
    <Skeleton height={320}
        width={290}
    />
</div>
    <div className='col-md-3 mt-5 mx-2'>
    <Skeleton height={320}
        width={290}
    />
</div>
    <div className='col-md-3 mx-2 mt-5'>
    <Skeleton height={320}
        width={290}
    />
</div>
    <div className='col-md-3 mx-2 mt-5' >
    <Skeleton height={320}
        width={290}
    />
</div>
    </div>
  )
}

export default Skelton