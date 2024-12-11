import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const DanhgiaData = [
    { id: 1,
      name: 'Nguyễn Văn Kiên',
      text:'Hài lòng lắm nhé',
      img: 'https://picsum.photos/101/101' 
    },
    { id:2,
      name: 'Huy Trần', 
      text: 'Dịch vụ tốt lắm.', 
      img: 'https://picsum.photos/102/102' 
    },

    { id: 3, 
      name: 'Nam@123', 
      text: 'Địa điểm tuyệt vời, nhớ ghé lại.', 
      img: 'https://picsum.photos/103/103' 
    },

    { id: 4,
      name: '@ahDuy', 
      text: 'Nhân viên nhiệt tình', 
      img: 'https://picsum.photos/104/104' 
    },

    { id: 5,
      name: 'ManhNguyen', 
      text: 'Tất cả đều ổn.', 
      img: 'https://picsum.photos/105/105' 
    },
];

const Danhgia = () => {
    const [reviews, setReviews] = useState(DanhgiaData); // danh sách đánh giá
    const [newReview, setNewReview] = useState({ name: '', text: '', rating: 0 }); 

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newReview.name && newReview.text && newReview.rating > 0) {
            const newReviewData = {
                id: reviews.length + 1,
                name: newReview.name,
                text: newReview.text,
                img: 'https://picsum.photos/100/100', // ảnh ngẫu nhiên
                rating: newReview.rating,
            };
            setReviews([...reviews, newReviewData]); // Thêm đánh giá mới vào danh sách
            setNewReview({ name: '', text: '', rating: 0 }); // ghi lại đánh giá
        } else {
            alert('Vui lòng nhập đầy đủ thông tin và chọn số sao!');
        }
    };

    return (
        <div className="py-10">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="text-center mb-10 max-w-[400px] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Đánh giá</p>
                    <h1 className="text-3xl font-bold">Đánh giá khách hàng</h1>
                    <p className="text-xs text-gray-400">Nơi khách hàng đánh giá và ghi nhận sau chuyến tour du lịch.</p>
                </div>

                {/* Dành giá */}
                <Slider {...settings}>
                    {reviews.map(({ id, name, text, img }) => (
                        <div key={id} className="my-6">
                            <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl bg-primary/10 relative">
                                <img src={img} alt="" className="rounded-full block mx-auto" />
                                <h1 className="text-xl font-bold">{name}</h1>
                                <p className="text-gray-500 text-sm">{text}</p>
                                <p className="text-yellow-400">{'⭐'.repeat(Number(reviews.rating || 5))}</p>
                                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Form Section */}
                <div className="mt-10 max-w-[400px] mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-center mb-4">Viết đánh giá</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Tên của bạn</label>
                            <input
                                type="text"
                                name="name"
                                value={newReview.name}
                                onChange={handleChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                                placeholder="Nhập tên của bạn"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Nội dung</label>
                            <textarea
                                name="text"
                                value={newReview.text}
                                onChange={handleChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                                placeholder="Nhập nội dung đánh giá"
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Đánh giá (sao)</label>
                            <select
                                name="rating"
                                value={newReview.rating}
                                onChange={handleChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                            >
                                <option value="0">Chọn số sao</option>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <option key={star} value={star}>
                                        {star} Sao
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark"
                        >
                            Gửi đánh giá
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Danhgia;
