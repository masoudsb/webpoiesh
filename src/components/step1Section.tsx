import { Flex } from "@/libs/primitives";
import { colorPalette } from "@/theme";
import { Typography } from "@mui/material";
import Image from "next/image";

export default function Step1Section() {
  return (
    <Flex bgcolor={colorPalette.gray[1]} width={"100%"} alignItems={"center"}>
      <Flex
      alignItems={"center"}
        width={"90%"}
        gap={{xtablet:"55px",mobile:"55px",tablet:"30px"}}
        direction={{tablet:"row",mobile:"column"}}
        justifyContent={"center"}>
        <Flex width={{tablet:"48%",mobile:"95%"}} gap={"16px"}>
          <Typography
            fontSize={{mobile:"28px",xtablet:"35px"}}
            fontWeight={700}
            color={colorPalette.gray[2]}>
            قدم اول :
          </Typography>
          <Flex paddingY={"10px"}>
            <Typography
            fontSize={{mobile:"28px",xtablet:"35px"}}
              fontWeight={700}
              color={colorPalette.blue[1]}>
              نظارت بر هر URL در وب سایت
            </Typography>
          </Flex>
          <Typography
            fontSize={"16px"}
            lineHeight={"28px"}
            color={colorPalette.gray[3]}>
            یک URL را برای نظارت بر تغییرات صفحه وب انتخاب کنید یا برای بایگانی
            تنظیم کنید. موتورهای ما می خزند و یک اسکرین شات تصویری تمام صفحه،
            عکس فوری محتوای مبتنی بر متن و کد منبع را می گیرند.
          </Typography>
          <Typography
            fontSize={"16px"}
            lineHeight={"28px"}
            color={colorPalette.gray[3]}>
            شبکه قدرتمند نظارت بر تغییرات ما تغییرات وب سایت ها را در طول زمان
            ردیابی می کند. هنگامی که تغییری مطابق با تنظیمات شما را تشخیص دادیم
            به شما اطلاع می‌دهیم و یک عکس فوری از صفحه شما را به صورت خودکار ضبط
            و بایگانی می‌کنیم.
          </Typography>
        </Flex>
        <Flex width={{tablet:"48%",mobile:"95%"}}>
          <Image
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            width={2048}
            height={1543}
            alt=""
            src={"/image/step1.jpg"}></Image>
        </Flex>
      </Flex>
    </Flex>
  );
}
