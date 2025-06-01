import { Flex, Grid, Typography } from "@/libs/primitives";
import { colorPalette } from "@/theme";
import Image from "next/image";

export default function MidCasePage() {
  const gridBox = [
    {
      id: "01",
      title: "نظارت بر اخبار",

      pic: "/image/case1.webp",
    },
    {
      id: "02",
      title: "نظارت بر مشاغل",

      pic: "/image/grid8.png",
    },
    {
      id: "03",
      title: "مانیتور دامنه",

      pic: "/image/case3.webp",
    },
    {
      id: "04",
      title: "ابزارهای نظارت بر اعتبار",
      pic: "/image/case4.png",
    },
    {
      id: "05",
      title: "نرم‌افزار نظارت بر قیمت",
      pic: "/image/case5.png",
    },
    {
      id: "06",
      title: "نظارت بر محتوا",
      pic: "/image/case1.webp",
    },
    {
      id: "07",
      title: "نظارت بر SEO ",
      pic: "/image/case7.webp",
    },
    {
      id: "08",
      title: "نظارت بر شبکه‌های اجتماعی",
      pic: "/image/case8.webp",
    },
    {
      id: "09",
      title: "نظارت بر وب‌سایت مطابق با قوانین و مقررات شرکتی",
      pic: "/image/case9.webp",
    },
  ];
  return (
    <Flex
      width={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={colorPalette.gray[1]}
      padding={"50px 20px"}>
      <Grid
        columns={{ mobile: 1, tablet: 2, xtablet: 3 }}
        spacing={"32px"}
        container
        width={"95%"}>
        {gridBox.map((item) => (
          <Grid key={item.id} size={1} padding={"16px"} alignContent={"start"}>
            <Flex gap={"20px"} alignItems={"center"}>
              <Flex width={"100%"} maxWidth={"370px"} margin={"0 auto"}>
                <Image
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  width={370}
                  height={320}
                  alt=""
                  src={item.pic}></Image>
              </Flex>
              <Flex gap={"20px"} width={"100%"}>
                <Typography
                  fontWeight={700}
                  lineHeight={"42px"}
                  color={colorPalette.blue[1]}
                  fontSize={"20px"}>
                  {item.title}
                </Typography>

                <Typography
                  fontSize={"16px"}
                  color={colorPalette.turquoise[3]}
                  fontWeight={600}>
                  <a href="">مشاهده مورد استفاده</a>
                </Typography>
              </Flex>
            </Flex>
          </Grid>
        ))}
      </Grid>
    </Flex>
  );
}
