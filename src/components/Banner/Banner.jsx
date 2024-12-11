import React from 'react'
import TravelImg from "../../assets/travelbox2.png"
import {MdFlight} from "react-icons/md"
import { IoIosWifi } from 'react-icons/io'
import { IoFastFoodSharp } from 'react-icons/io5' 
import { MdOutlineLocalHotel } from 'react-icons/md'

const Banner = () => {
  return (
    <div className="min-h-[550px] bg-gray-100">
        <div className="min-h-[550px] flex justify-center items-center 
        backdrop-blur-xl py-12 sm:py-0 ">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6
                item-center">
                    {/* Ảnh bìa  */}
                    <div data>
                        <img src={TravelImg} alt=""
                        className='max-w-[450x] h-[350px] w-full mx-auto
                        drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] 
                        object-cover' />
                    </div>
                    {/* Nội dung. */}
                    <div> 
                        <h1 data-aos='fade-up'
                        className= ' text-3xl font-bold sm:text-4xl'>
                            VẺ ĐẸP ĐA DẠNG CỦA DU LỊCH VIỆT NAM</h1>
                        <p className='text-sm text-gray-500 tracking-wide leading-8'>
                        Du lịch Việt Nam là một hành trình khám phá đa dạng văn hóa, 
                        thiên nhiên hùng vĩ và nền ẩm thực phong phú. Dọc theo chiều dài đất nước, 
                        mỗi vùng miền đều mang đến những trải nghiệm độc đáo, khiến Việt Nam 
                        trở thành điểm đến hấp dẫn trong mắt du khách trong và ngoài nước.
                        ngoài nước.{''}
                        </p>
                        <div data-aos='zoom-in' className='grid grid-cols-2 
                        gap-6'>
                            <div className='space-y-6'>
                                <div className='flex items-center gap-4'>
                                 <MdFlight className='text-4xl h-12 w-12 
                                 shadow-sm p-4 rounded-full bg-violet-200'/>
                                <p> Máy bay</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <MdOutlineLocalHotel className='text-4xl h-12 w-12 
                                shadow-sm p-4 rounded-full bg-teal-200'/>
                                <p> Khách sạn</p>
                                </div>
                            </div>

                            <div className='space-y-6'>
                                <div className='flex items-center gap-4'>
                                    <IoIosWifi className='text-4xl h-12 w-12 
                                    shadow-sm p-4 rounded-full bg-green-200'/>
                                    <p> Mạng dịch vụ.</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <IoFastFoodSharp className='text-4xl h-12 w-12 
                                    shadow-sm p-4 rounded-full bg-yellow-200'/>
                                    <p>Ẩm thực.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
  )
}

export default Banner
