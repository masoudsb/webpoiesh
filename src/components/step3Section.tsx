import { Flex } from "@/libs/primitives";
import { colorPalette } from "@/theme";
import { Typography } from "@mui/material";
import Image from "next/image";

export default function Step3Section() {
  return (
    <Flex
      bgcolor={colorPalette.gray[1]}
      width={"100%"}
      alignItems={"center"}
      paddingBottom={"120px"}>
      <Flex
        alignItems={"center"}
        width={"90%"}
        gap={{ xtablet: "55px", mobile: "55px", tablet: "30px" }}
        // border={"1px solid red"}
        direction={{ tablet: "row", mobile: "column" }}
        justifyContent={"center"}>
        <Flex width={{ tablet: "48%", mobile: "95%" }} gap={"16px"}>
          <Typography
            fontSize={{ mobile: "28px", xtablet: "35px" }}
            fontWeight={700}
            color={colorPalette.gray[2]}>
            قدم سوم :
          </Typography>
          <Flex paddingY={"10px"}>
            <Typography
              fontSize={{ mobile: "28px", xtablet: "35px" }}
              fontWeight={700}
              color={colorPalette.blue[1]}>
              هشدارهای دقیق تغییر وب سایت را دریافت کنید{" "}
            </Typography>
          </Flex>
          <Typography
            fontSize={"16px"}
            lineHeight={"28px"}
            color={colorPalette.gray[3]}>
            با فید اطلاع رسانی <strong>وب پویش</strong> به راحتی گزارش های تغییرات را فیلتر
            کنید، مرتب کنید و دریافت کنید. به سرعت تغییراتی را که بیشترین اهمیت
            را دارند پیدا کنید، به عکس‌های فوری صفحه وب با مهر زمانی اشاره کنید
            و مقایسه کنید. هر زمان که یک تغییر منطبق شناسایی شد، تغییرات وب سایت
            را ردیابی کنید. ما دقیقاً به شما نشان می‌دهیم که چه چیزی تغییر کرده
            است و یک گزارش تغییر دقیق ارائه می‌کنیم.
          </Typography>
        </Flex>
        <Flex width={{ tablet: "48%", mobile: "95%" }}>
          <Image
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            width={2048}
            height={1543}
            alt=""
            src={"/image/step3.jpg"}></Image>
        </Flex>
      </Flex>
    </Flex>
  );
}
