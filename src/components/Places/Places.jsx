import React from 'react'
import Img1 from "../../assets/places/nhatrang.jpg"
import Img2 from "../../assets/places/hanoi.jpg"
import Img3 from "../../assets/places/phuquoc.jpg"
import Img4 from "../../assets/places/hue.jpg"
import Img5 from "../../assets/places/danang.jpg"
import Img6 from "../../assets/places/haiPhong.jpg"
import PlacesCard from './PlacesCard'

const PlacesData = [
    {
        img: Img1,
        title: 'Trải nghiệm lặn biển Nha Trang',
        location: 'Nha Trang',
        description: 'Khám phá thế giới đại dương và san hô tuyệt đẹp tại vịnh Nha Trang.',
        price: 60000,
        type: 'Biển - Thư giãn',
    },
    {
        img: Img2,
        title: 'Khám phá thủ đô Hà Nội',
        location: 'Hà Nội',
        description: 'Hành trình 3 ngày tham quan các di tích lịch sử, phố cổ và ẩm thực Hà Nội.',
        price: 20000,
        type: 'Văn hóa - Lịch sử',
    },
    {
        img: Img3,
        title: 'Kỳ nghỉ tại đảo ngọc Phú Quốc',
        location: 'Phú Quốc',
        description: 'Tận hưởng kỳ nghỉ sang trọng tại resort bên bờ biển Phú Quốc.',
        price: 30000,
        type: 'Biển - Thư giãn',
    },
    {
        img: Img4,
        title: 'Khám phá cố đô Huế',
        location: 'Huế',
        description: 'Tham quan kinh thành Huế, lăng tẩm và các di sản UNESCO.',
        price: 406000,
        type: 'Văn hóa - Lịch sử',
    },
    {
        img: Img5,
        title: 'Chinh phục Đà Nẵng',
        location: 'Đà Nẵng',
        description: 'Khám phá Bà Nà Hills, cầu Vàng và danh thắng Ngũ Hành Sơn.',
        price: 65000,
        type: 'Phiêu lưu - Thiên nhiên',
    },
    {
        img: Img6,
        title: 'Tour cảng biển Hải Phòng',
        location: 'Hải Phòng',
        description: 'Khám phá thành phố cảng Hải Phòng, phố cổ, và thưởng thức hải sản tươi ngon.',
        price: 45000,
        type: 'Văn hóa - Ẩm thực',
    },

]
const Places = ({handleOrderPopup}) => {
  return (
    <div className='bg-gray-50 py-10'>
      <div className='container'>
        <h1 className='my-8 border-l-8 border-primary/50 
        py-2 pl-2 text-3xl font-bold'>
            Các địa điểm nội bật.
            </h1>
            <div className='grid grid-cols- sm:grid-cols-2 
                md:grid-cols-3 gap-4' >
                {
                    PlacesData.map((item,index) => (
                        <PlacesCard 
                        handleOrderPopup={handleOrderPopup}
                        key={index} 
                        {...item}/>
                    ))
                }
            </div>
      </div>
    </div>
  )
}

export default Places
