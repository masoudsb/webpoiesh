import { Flex, Grid, Typography } from "@/libs/primitives";

import { colorPalette } from "@/theme";
import Image from "next/image";

export default function GridAbout() {
  const gridBox = [
    {
      id: "01",
      title: "نظارت رقابتی",
      des: "هشدارهایی در مورد عرضه محصول جدید، مشتریان جدید، RFP های (یا مناقصه‌های دولتی) اخیراً منتشر شده، اطلاعیه‌های مطبوعاتی، خریدها و واگذاری‌ها - هر چیزی که برای شما یا کسب و کارتان مهم است - دریافت کنید.",
      link: "",
      pic: "/image/about1.jpg",
      size: 1,
      dir: "column",
      res: "column",
    },
    {
      id: "02",
      title: "نظارت بر SEO",
      des: "نظارت بر عملکرد سئو، بینش لحظه‌ای از رتبه‌بندی رقبا و دریافت اعلان‌های به‌موقع در مورد به‌روزرسانی‌های ناخواسته در ویژگی‌های مهم سئو.",
      link: "",
      pic: "/image/about2.png",
      size: 1,
      dir: "column",
      res: "column",
    },
    {
      id: "03",
      title: "اخبار مورد علاقه",
      des: "اخبار را از نزدیک دنبال کنید - اولین نفری باشید که از اخبار فوری که برای شرکت، صنعت یا اعتبار شخصی بیشترین اهمیت را دارند، مطلع می‌شود..",
      link: "",
      pic: "/image/about3.png",
      size: 1,
      dir: "column",
      res: "column",
    },
    {
      id: "04",
      title: "نظارت بر انطباق",
      des: "اطمینان حاصل کنید که صفحات کلیدی وب‌سایت شما با قوانین و استانداردهای شرکتی و نظارتی مطابقت دارند.",
      link: "",
      pic: "/image/about4.png",
      size: 1,
      dir: "column",
      res: "column",
    },
    {
      id: "05",
      title: " نظارت بر دامنه و  URL",
      des: "بر در دسترس بودن صفحات وب، سیستم‌ها و قالب محتوای حیاتی نظارت کنید. اعضای کلیدی تیم را در جریان امور قرار دهید. مشکلات را قبل از اینکه مشتری شما متوجه شود، تشخیص دهید.",
      link: "",
      pic: "/image/about5.png",
      size: 2,
      dir: "row",
      res: "column",
    },
    {
      id: "06",
      title: "هوش رقابتی",
      des: "ابتکارات رقبا، فروش، استراتژی‌های سئو و موارد دیگر را زیر نظر داشته باشید.",
      link: "مطلب بیشتر",
      pic: "/image/about6.png",
      size: 1,
      dir: "column",
      res: "column",
    },
    {
      id: "07",
      title: "مشاغل",
      des: "دنبال کار می‌گردید یا فقط حواستان به آگهی‌های جدید هست؟ وقتی آگهی جدیدی توجه شما را جلب کرد، مطلع شوید.",
      link: "",
      pic: "/image/about7.webp",
      size: 1,
      dir: "column",
      res: "column",
    },
    {
      id: "08",
      title: "لیست املاک",
      des: "اولین نفری باشید که از زمان ورود مسکن جدید به بازار مطلع می‌شود.",
      link: "",
      pic: "/image/about8.png",
      size: 1,
      dir: "column",
      res: "column",
    },
    {
      id: "09",
      title: "موجودی و موجودی",
      des: "وقتی محصول انتخابی موجود شد یا موجود نشد، مطلع شوید.",
      link: "",
      pic: "/image/about9.png",
      size: 1,
      dir: "column",
      res: "column",
    },
    {
      id: "10",
      title: "نظارت بر قیمت",
      des: "اگر قیمت کاهش یابد (یا به شدت افزایش یابد)، به شما اطلاع خواهیم داد.",
      link: "",
      pic: "/image/about10.png",
      size: 1,
      dir: "column",
      res: "column",
    },
    {
      id: "11",
      title: "نظارت بر رسانه‌های اجتماعی",
      des: "منشن‌های رسانه‌های اجتماعی را دنبال کنید یا نظارت بر اعتبار برند خود را افزایش دهید.",
      link: "",
      pic: "/image/about11.png",
      size: 1,
      dir: "column",
      res: "column",
    },
  ];
  return (
    <Flex
      width={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={colorPalette.gray[1]}
      paddingY={"80px"}>
      <Flex
        padding={"40px 25px"}
        textAlign={"center"}
        gap={"20px"}
        width={"85%"}>
        <Typography
          fontWeight={700}
          color={colorPalette.blue[1]}
          fontSize={{ mobile: "28px", tablet: "35px" }}>
          با وب پویش چه چیزهایی را می‌توانم مانیتور کنم؟
          <br />
          چگونه می‌تواند به من کمک کند؟
        </Typography>
        <Typography
          fontSize={{ mobile: "13px", tablet: "16px" }}
          color={colorPalette.gray[3]}>
          به طور خلاصه، <strong>وب پویش</strong> می‌تواند هر وب‌سایت عمومی را که
          نیازی به ورود به سیستم ندارد، رصد کند. نرم‌افزار ما به صورت دوره‌ای
          محتوای وب‌سایت را اسکن و پردازش می‌کند و هنگامی که تغییرات سایت با
          معیارهای هشدار از پیش تعیین‌شده کاربران مطابقت دارد، به آنها هشدار
          می‌دهد. تعدادی از موارد استفاده <strong>وب پویش</strong>:
        </Typography>
      </Flex>

      <Grid
        columns={{ mobile: 1, tablet: 3 }}
        spacing={"32px"}
        container
        width={"95%"}>
        {gridBox.map((item) => (
          <Grid
            key={item.id}
            size={item.size}
            bgcolor={colorPalette.turquoise[1]}
            padding={"36px"}
            borderRadius={"6px"}
            alignContent={"start"}>
            <Flex
              gap={"20px"}
              sx={{
                flexDirection: {
                  laptop: item.dir,
                  mobile: item.res,
                },
              }}
              alignItems={"center"}>
              <Flex gap={"20px"}>
                <Typography
                  fontWeight={700}
                  lineHeight={"42px"}
                  color={colorPalette.blue[1]}
                  fontSize={{ mobile: "28px", xtablet: "35px" }}>
                  {item.title}
                </Typography>
                <Typography
                  fontSize={{ mobile: "13px", tablet: "14px" }}
                  color={colorPalette.gray[3]}>
                  {item.des}
                </Typography>
                <Typography
                  fontSize={"16px"}
                  color={colorPalette.turquoise[3]}
                  fontWeight={600}>
                  <a href="">{item.link}</a>
                </Typography>
              </Flex>
              <Flex
                width={"100%"}
                maxWidth={"370px"}
                margin={"0 auto"}
                borderRadius={"3px"}>
                <Image
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "3px",
                  }}
                  width={370}
                  height={320}
                  alt=""
                  src={item.pic}></Image>
              </Flex>
            </Flex>
          </Grid>
        ))}
      </Grid>
    </Flex>
  );
}
