import React from 'react'
import Location from '../components/Location/Location'
const About = () => {
  return (
    <div className='container pt-14'>
      <div className='py-10'>
        <h1 className='my-8 border-l-8 
        border-primary/50 py-2 pl-2 text-3xl 
        font-bold'>
          Lời tâm sự.
        </h1>
        <p style={{ paddingLeft: '20px' }}>Chào mừng bạn đến với TravelFast, 
          một trong những đơn vị du lịch trong lĩnh vực
          cung cấp dịch vụ du lịch tại Việt Nam. Với sứ mệnh 
          mang đến những trải nghiệm tuyệt vời và đáng nhớ nhất,
          Chúng tôi tự hào là cầu nối giúp bạn khám phá vẻ đẹp
          bất tận của đất nước hình chữ S và thế giới.</p>
          <h2><strong>Tại sao chọn chúng tôi?</strong></h2>

          <h3><strong>1.Đội ngũ chuyên nghiệp</strong></h3>
          <p style={{ paddingLeft: '20px' }}>Đội ngũ nhân viên tận tâm, 
            giàu kinh nghiệm, luôn sẵn sàng hỗ trợ và tư vấn để bạn có 
            một chuyến đi hoàn hảo.</p>

          <h3><strong>2.Đa dạng dịch vụ</strong></h3>
          <ul style={{ paddingLeft: '40px' }}>
            <li><strong>-Tour du lịch nội địa và quốc tế</strong>: 
            Chúng tôi cung cấp các tour du lịch phong phú, phù hợp với 
            mọi đối tượng khách hàng.</li>
            <li><strong>-Dịch vụ đặt vé máy bay, khách sạn, và xe đưa đón</strong>: 
            Dễ dàng đặt vé máy bay, khách sạn và xe đưa đón, giúp bạn tiết kiệm thời gian.</li>
            <li><strong>-Tổ chức tour đoàn, teambuilding, sự kiện</strong>: 
            Cung cấp các dịch vụ tổ chức sự kiện, teambuilding cho doanh nghiệp và nhóm
            khách hàng.</li>
          </ul>

          <h3><strong>3.Hành trình độc đáo</strong></h3>
          <p style={{ paddingLeft: '20px' }}>Thiết kế các tour khám phá văn hóa, ẩm thực,
             và thiên nhiên đặc trưng từng vùng miền như:</p>
          <ul style={{ paddingLeft: '40px' }}>
            <li><strong>*Vịnh Hạ Long</strong> – Kỳ quan thiên nhiên thế giới, nơi bạn có 
            thể thưởng ngoạn vẻ đẹp của những hòn đảo đá vôi kỳ vĩ.</li>
            <li><strong>*Phố cổ Hội An</strong> – Di sản văn hóa thế giới, nổi bật với các
             kiến trúc cổ kính và nền ẩm thực phong phú.</li>
            <li><strong>*Đảo Phú Quốc</strong> – Thiên đường biển đảo, nổi tiếng với bãi 
            biển trắng mịn và resort sang trọng.</li>
            <li><strong>*Cao nguyên Đà Lạt</strong> – Thành phố ngàn hoa, nơi bạn có thể 
            tận hưởng không khí mát mẻ và khám phá các vườn hoa tuyệt đẹp.</li>
          </ul>

          <h3><strong>4.Giá cả cạnh tranh</strong></h3>
          <p style={{ paddingLeft: '20px' }}>Cam kết mang đến những chuyến đi chất lượng 
            với mức chi phí hợp lý nhất, giúp bạn tận hưởng kỳ nghỉ mà không lo về giá.</p>

          <h2><strong>Tầm nhìn và giá trị cốt lõi</strong></h2>
          <p style={{ paddingLeft: '20px' }}>Chúng tôi không chỉ là một công ty du lịch, 
            mà còn là người đồng hành cùng bạn trên hành trình khám phá. Với sự uy tín, 
            sáng tạo, và không ngừng cải thiện, chúng tôi hướng tới trở thành thương hiệu 
            du lịch được yêu thích và tin cậy nhất tại Việt Nam.</p>

          <p style={{ paddingLeft: '20px' }}>Hãy để chúng tôi giúp bạn biến mỗi chuyến đi 
            trở thành một hành trình đáng nhớ! 🌏</p>
      </div>
      <Location />
    </div>
  )
}

export default About
