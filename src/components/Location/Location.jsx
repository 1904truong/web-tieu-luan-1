import React from 'react'

const Location = () => {
  return (
    <div>
        <div>
            <div className='container'>
                <h1
                className='inline-block
                border-l-8 border-primary/50
                py-2 pl-2 mb-4 text-xl font-bold
                sm:text-3xl'>
                    Trụ sở.
                </h1>
                <div clasName='rounded-xl'>
                <iframe
                src='https://www.google.com/maps/embed?pb=!1m1
                8!1m12!1m3!1d9208.671594253065!2d105.79075831984203!3d
                21.008565812374826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13
                .1!3m3!1m2!1s0x3135ab5756f91033%3A0x576917442d674bfd!2zQ-
                G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi
                !2s!4v1732261464978!5m2!1svi!2s'
                framborder='0'
                width='100%'
                height='360'
                allowfullscreen
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
                style={{borderRadius: '20px'}}>
                </iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Location
