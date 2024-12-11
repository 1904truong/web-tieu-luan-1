import React from 'react'
import BlogCard from "./BlogCard.jsx"
import Img1 from "../../assets/places/1.jpg"
import Img2 from "../../assets/places/2.jpg"
import Img3 from "../../assets/places/3.jpg"
const BlogsData = [
    {
        id:1,
        image:Img1,
        title:"Top những địa điểm nổi bất nhất Miền Bắc",
        description:"Miền Bắc Việt Nam là vùng đất hội tụ vẻ đẹp thiên nhiên kỳ vĩ và nét văn hóa đặc sắc. Bài viết sẽ đưa bạn khám phá những địa điểm đẹp nhất miền Bắc, từ núi rừng hùng vĩ của Sa Pa, những thửa ruộng bậc thang ngút ngàn ở Mù Cang Chải, đến vịnh Hạ Long huyền ảo với hàng nghìn hòn đảo đá vôi. Không thể bỏ qua Hà Giang với những cung đường uốn lượn, đèo Mã Pì Lèng hùng vĩ, hay Tam Đảo với không khí mát lành quanh năm. Ngoài ra, bạn sẽ được chiêm ngưỡng vẻ đẹp thanh bình của Tràng An - Di sản thế giới, và trải nghiệm văn hóa truyền thống tại làng cổ Đường Lâm.",
        author:"Miền Bắc",
        data:"April 011, 2023",
    },
    {
        id:1,
        image:Img2,
        title:'Top những địa điểm đẹp nhất miền Trung',
        description:'Miền Trung Việt Nam là nơi giao hòa giữa núi non, biển cả và di sản văn hóa độc đáo. Bài viết sẽ đưa bạn đến những địa danh nổi bật như Phong Nha - Kẻ Bàng, nơi sở hữu hệ thống hang động kỳ vĩ; cố đô Huế với quần thể di tích cổ kính; phố cổ Hội An lung linh ánh đèn lồng; và bán đảo Sơn Trà với thiên nhiên hoang sơ. Không thể bỏ qua Đà Nẵng với bãi biển Mỹ Khê, cầu Vàng nổi tiếng, hay Nha Trang với vẻ đẹp của đảo ngọc và làn nước trong xanh. Miền Trung còn hấp dẫn bởi những bãi biển đẹp như Lăng Cô, Cù Lao Chàm, và Bình Ba – những thiên đường biển lý tưởng.',
        author:'Miền Trung',
        data:'April 01, 2023',
    },
    {
        id:1,
        image:Img3,
        title:'Top những địa điểm đẹp nhất miền Nam',
        description:'Miền Nam Việt Nam mang đến những trải nghiệm đa dạng, từ vẻ đẹp sôi động của thành phố hiện đại đến khung cảnh thiên nhiên yên bình. Hãy khám phá vẻ đẹp của Cần Thơ với chợ nổi Cái Răng nhộn nhịp, hay các cánh đồng sen bát ngát ở Đồng Tháp. Phú Quốc được ví như hòn ngọc của Việt Nam với những bãi biển hoang sơ và hoàng hôn rực rỡ. Không thể bỏ qua Vũng Tàu với bãi biển đẹp và tượng Chúa Kitô Vua nổi tiếng, hay Côn Đảo với lịch sử hào hùng và thiên nhiên nguyên sơ. Đặc biệt, TP.HCM là trung tâm kinh tế năng động, nơi hội tụ văn hóa và nhịp sống hiện đại.',
        author:'Miềm Nam',
        data:'April 04, 2023',
    },

];
const BlogsComp = () => {
  return (
  <div>
        <div>
            <h1 
            className='my-8 border-l-8
             border-primary/50 
            py-2 pl-2 text-3xl font-bold'> 
            Các khu vực Việt Nam.
            </h1>
            <div className='grid grid-cols-1 gap-4
            sm:grid-cols-2 md:grid-cols-3' >
                {BlogsData.map((item,index) => (
                        <BlogCard key={index} {...item}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default BlogsComp
