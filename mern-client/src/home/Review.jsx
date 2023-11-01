import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//react icons
import  {FaStar} from 'react-icons/fa6'

import { Avatar } from 'flowbite-react';
import proPic from '../assets/profile.jpg'
import visPic from '../assets/IMG_20220324_081539.jpg'
import sinPic from '../assets/IMG20230721133615.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () =>{
    return(
    <div className="my-12 px-4 lg:px-14 ">
        <h2 className="text-5xl font-bold text-center mb-10 leading-snug">Our Customers</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>
                        Booktown is one of the best book store Web app i have seen on internet till
                         now and it has the en number of collections of books and it is one of the best book store.
                    </p>
                    <Avatar
                        alt="avatar of Jese"
                        img={proPic}
                        rounded 
                        className='w-10 mb-4'
                        />
                        <h5 className='text-lg font-medium'>Mark Ping</h5>
                        <p className='text-base '>CEO, INS Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>
                        Books Available on the  internet is this best book store Web app is only i have seen on internet till
                         now and it has the en number of collections of books and it is one of the best book store.
                    </p>
                    <Avatar
                        alt="avatar of Jese"
                        img={visPic}
                        rounded 
                        className='w-10 mb-4'
                        />
                        <h5 className='text-lg font-medium'>Vishwa</h5>
                        <p className='text-base '>Student, CAHCEt</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>
                        One of the best website for books in website till now i found the following website 
                        for books in website till now i found the following website for books in website till now 
                    </p>
                    <Avatar
                        alt="avatar of Jese"
                        img={sinPic}
                        rounded 
                        className='w-10 mb-4'
                        />
                        <h5 className='text-lg font-medium'>Sinchu</h5>
                        <p className='text-base '>Student, CAHCET</p>
                </div>
            </div>
        </SwiperSlide >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>
                        Booktown is one of the best book store Web app i have seen on internet till
                         now and it has the en number of collections of books and it is one of the best book store.
                    </p>
                    <Avatar
                        alt="avatar of Jese"
                        img={proPic}
                        rounded 
                        className='w-10 mb-4'
                        />
                        <h5 className='text-lg font-medium'>Mark Ping</h5>
                        <p className='text-base '>CEO, INS Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>
                        Booktown is one of the best book store Web app i have seen on internet till
                         now and it has the en number of collections of books and it is one of the best book store.
                    </p>
                    <Avatar
                        alt="avatar of Jese"
                        img={proPic}
                        rounded 
                        className='w-10 mb-4'
                        />
                        <h5 className='text-lg font-medium'>Mark Ping</h5>
                        <p className='text-base '>CEO, INS Company</p>
                </div>
            </div>
        </SwiperSlide>
           </Swiper>
        </div>
    </div>
    )
}

export default Review;