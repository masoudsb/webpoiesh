import { Flex, Grid, Typography } from "@/libs/primitives";

import { colorPalette } from "@/theme";
import Image from "next/image";

export default function MonitorSection() {
  const gridBox = [
    {
      id: "01",
      title: "هشدارهای اخبار صنعت",
      des: "از مهمترین اتفاقات صنعت خود مطلع باشید. از حاشیه‌ها دوری کنید.",
      link: "مطلب بیشتر",
      pic: "/image/grid1.png",
      size: 1,
      dir: "column",

    },
    {
      id: "02",
      title: "نظارت بر SEO",
      des: "نظارت بر عملکرد سئو، بینش لحظه‌ای از رتبه‌بندی رقبا و دریافت اعلان‌های به‌موقع در مورد به‌روزرسانی‌های ناخواسته در ویژگی‌های مهم سئو.",
      link: "مطلب بیشتر",
      pic: "/image/grid2.png",
      size: 2,
      dir: "row",
      res: "column",
    },
    {
      id: "03",
      title: "اشاره به برند",
      des: "بدانید چه زمانی وب‌سایت‌ها یا انجمن‌های کلیدی، برند شما یا رقیبتان را منشن می‌کنند.",
      link: "",
      pic: "/image/grid3.png",
      size: 1,
      dir: "column",
    },
    {
      id: "04",
      title: "هشدارهای مطبوعاتی",
      des: "قبل از اینکه همه از انتشار بیانیه‌های مطبوعاتی مطلع شوند، آنها را دم دست داشته باشید.",
      link: "",
      pic: "/image/grid4.png",
      size: 1,
      dir: "column",
    },
    {
      id: "05",
      title: "نظارت بر قیمت",
      des: "از زمان کاهش قیمت مطلع شوید. بهترین معامله را انجام دهید. منتظر پیشنهادهای ویژه باشید.",
      link: "",
      pic: "/image/grid5.png",
      size: 1,
      dir: "column",
    },
    {
      id: "06",
      title: "بایگانی وب‌سایت",
      des: "بایگانی تاریخی از وب‌سایت‌ها را با گزارش‌های تغییرات دارای مهر زمانی نگهداری کنید.",
      link: "مطلب بیشتر",
      pic: "/image/grid6.png",
      size: 2,
      dir: "row",
      res: "column",

    },
    {
      id: "07",
      title: "نظارت بر اعتبار",
      des: "برند خود را زیر نظر داشته باشید و هنگام انتشار محتوا یا نظرات جدید، اعلان دریافت کنید.",
      link: "",
      pic: "/image/grid7.png",
      size: 1,
      dir: "column",
    },
    {
      id: "08",
      title: "بررسی کننده عملکرد وب سایت",
      des: "اطمینان حاصل کنید که اجزای کلیدی وب‌سایت قابل مشاهده و بارگیری صحیح هستند.",
      link: "",
      pic: "/image/grid8.png",
      size: 1,
      dir: "column",
    },
    {
      id: "09",
      title: "نظارت بر هوش رقابتی",
      des: "از فعالیت‌های رقبایتان مطلع باشید. از آنها جلوتر باشید.",
      link: "",
      pic: "/image/grid9.png",
      size: 1,
      dir: "column",
    },
    {
      id: "10",
      title: "تشخیص و امنیت تغییر ظاهر وب‌سایت",
      des: "هرگونه تغییر کد را رصد و پیگیری کنید. مراقب تزریق کد مخرب و حملات تغییر ظاهر وب‌سایت باشید.",
      link: "",
      pic: "/image/grid10.png",
      size: 1,
      dir: "column",
    },
    {
      id: "11",
      title: "نظارت و بایگانی رسانه‌های اجتماعی",
      des: "حواستان به حساب‌های کاربری کلیدی در شبکه‌های اجتماعی باشد. به موقع عکس بگیرید.",
      link: "",
      pic: "/image/grid11.png",
      size: 1,
      dir: "column",
    },
    {
      id: "12",
      title: "نظارت بر امور حقوقی و انطباق با قوانین",
      des: "از رعایت قوانین در صفحات وب کلیدی اطمینان حاصل کنید. مراقب خطرات احتمالی باشید.",
      link: "مطلب بیشتر",
      pic: "/image/grid12.png",
      size: 2,
      dir: "row",
      res: "column",

    },
  ];
  return (
    <Flex
      width={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      paddingY={"80px"}
      bgcolor={colorPalette.gray[1]}>
      <Flex padding={"40px 25px"}  textAlign={"center"} gap={"20px"}>
        <Typography
          fontWeight={700}
          color={colorPalette.blue[1]}
          fontSize={{ mobile: "28px", tablet: "35px" }}>
          نظارت با وب پویش
        </Typography>
        <Typography
          fontSize={{ mobile: "13px", tablet: "16px" }}
          color={colorPalette.gray[3]}>
          تغییراتی که برای شما بیشترین اهمیت را دارند، پیگیری و بایگانی کنید. در
          صورت شناسایی تغییرات خاص، هشدارهای به موقع دریافت کنید.
        </Typography>
      </Flex>

      <Grid columns={{mobile:1,tablet:3}} spacing={"32px"} container width={"95%"}>
        {gridBox.map((item) => (
          <Grid
            key={item.id}
            size={item.size}
            bgcolor={colorPalette.turquoise[1]}
            padding={"36px"}
            borderRadius={"6px"}
            alignContent={"center"}
            >
            <Flex
              gap={"20px"}
              direction={{laptop:item.dir,mobile:item.res}}
              alignItems={"center"}
              >
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
              <Flex width={"100%"} maxWidth={"370px"} margin={"0 auto"}>
                <Image
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
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
