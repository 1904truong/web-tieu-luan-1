import React from 'react';
import FooterLogo from "../../assets/Logo.png";
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaLocationArrow, 
  FaPhoneAlt, 
  FaEnvelope 
} from "react-icons/fa";
import { Link } from "react-router-dom";


const FooterLink = [
  {
    title: 'Trang chủ',
    link: '/',
  },
  {
    title: 'Giới thiệu',
    link: '/about',
  },
  {
    title: 'Bài viết',
    link: '/blogs',
  },
  {
    title: 'Địa điểm nổi bật',
    link: '/best-places',
  },
  {
    title: 'Liên hệ',
    link: '/contact',
  },
];

const Footer = () => {
  return (
    <div className="py-10 bg-gray-900 text-white">
      {/* Content */}
      <div className="container mx-auto grid md:grid-cols-2 gap-10 px-5">
        {/* Liên hệ */}
        <div>
            <img src={FooterLogo} alt="Logo" className="h-12" />

          <p className="mb-6">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn. Liên hệ với chúng tôi qua các thông tin dưới đây.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <span>+984343291434</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope />
              <span>contact@travel.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <span>Cầu Giấy, Hà Nội</span>
            </div>
          </div>

          {/* Biêu tượng */}
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="text-2xl hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="text-2xl hover:text-blue-400">
              <FaLinkedin />
            </a>
          </div>
        </div>

  
        <div>
          <h1 className="text-xl font-bold mb-4">Liên kết quan trọng</h1>
          <ul className="space-y-3">
            {FooterLink.map(({ title, link }) => (
              <li key={title} className="hover:text-primary transition">
                <Link to={link} onClick={() => window.scrollTo(0, 0)}>
                  <span>&#10140;</span> {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Kết */}
      <div className="text-center mt-10 text-gray-400 text-sm">
        Bài tiểu luận.
      </div>
    </div>
  );
};

export default Footer;
