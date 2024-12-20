import React from 'react';

const Hero = () => {
    const [priceValue, setPriceValue] = React.useState(40);

    return (
        <div className='bg-black/20 h-full'>
            <div className='h-full flex justify-center items-center p-4 bg-primary/10'>
                <div className='container grid grid-cols-1 gap-4'>
                    {/* Tiêu đề */}
                    <div className='text-white text-center'>
                        <p data-aos='fade-up'>Lựa chọn điểm đến.</p>
                        <p
                            data-aos='fade-up'
                            data-aos-delay='300'
                            className='font-bold text-4xl'
                        >
                            Tìm kiếm điểm đến của bạn!
                        </p>
                    </div>

                    {/* Form tìm kiếm */}
                    <div
                        data-aos='fade-up'
                        data-aos-delay='600'
                        className='space-y-6 bg-white rounded-lg p-6 shadow-lg relative'
                    >
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                            {/* Điểm đến */}
                            <div>
                                <label htmlFor='destination' className='text-gray-700 font-medium'>
                                    Điểm đến:
                                </label>
                                <input
                                    type='text'
                                    name='destination'
                                    id='destination'
                                    placeholder='HaNoi'
                                    className='w-full bg-gray-100 rounded-lg p-3 mt-2 focus:ring-2 focus:ring-primary focus:outline-none'
                                />
                            </div>

                            {/* Thời gian */}
                            <div>
                                <label htmlFor='date' className='text-gray-700 font-medium'>
                                    Thời gian:
                                </label>
                                <input
                                    type='date'
                                    name='date'
                                    id='date'
                                    className='w-full bg-gray-100 rounded-lg p-3 mt-2 focus:ring-2 focus:ring-primary focus:outline-none'
                                />
                            </div>

                            {/* Giá tour */}
                            <div>
                                <label htmlFor='price' className='text-gray-700 font-medium flex justify-between'>
                                    <span>Giá tour:</span>
                                    <span className='font-bold'>{priceValue} VND</span>
                                </label>
                                <input
                                    type='range'
                                    name='price'
                                    id='price'
                                    className='w-full bg-gray-300 rounded-lg mt-2'
                                    min='1000'
                                    max='1000000'
                                    value={priceValue}
                                    step='10'
                                    onChange={(e) => setPriceValue(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Phương thức thanh toán */}
                        <div>
                            <label htmlFor='payment' className='text-gray-700 font-medium'>
                                Chọn phương thức thanh toán:
                            </label>
                            <select
                                id='payment'
                                className='w-full bg-gray-100 rounded-lg p-3 mt-2 focus:ring-2 focus:ring-primary focus:outline-none'
                            >
                                <option value='credit'>Thanh toán qua thẻ tín dụng</option>
                                <option value='paypal'>Ví điện tử PayPal</option>
                                <option value='momo'>Ví MoMo</option>
                            </select>
                        </div>

                        {/* Nút tìm kiếm */}
                        <button
                            className='bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-transform duration-200 absolute -bottom-6 left-1/2 transform -translate-x-1/2'
                        >
                            Tìm kiếm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
