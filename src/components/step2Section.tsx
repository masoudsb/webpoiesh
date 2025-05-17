import { Flex } from "@/libs/primitives";
import { colorPalette } from "@/theme";
import { Typography } from "@mui/material";
import Image from "next/image";

export default function Step2Section() {
  return (
    <Flex
      bgcolor={colorPalette.gray[1]}
      width={"100%"}
      alignItems={"center"}
      paddingY={"120px"}>
      <Flex
        alignItems={"center"}
        width={"90%"}
        gap={{ xtablet: "55px", mobile: "55px", tablet: "30px" }}
        // border={"1px solid red"}
        direction={{ tablet: "row", mobile: "column-reverse" }}
        justifyContent={"center"}>
        <Flex width={{ tablet: "48%", mobile: "95%" }}>
          <Image
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            width={2048}
            height={1543}
            alt=""
            src={"/image/step2.jpg"}></Image>
        </Flex>
        <Flex width={{ tablet: "48%", mobile: "95%" }} gap={"16px"}>
          <Typography
            fontSize={{ mobile: "28px", xtablet: "35px" }}
            fontWeight={700}
            color={colorPalette.gray[2]}>
            قدم دوم :
          </Typography>
          <Flex paddingY={"10px"}>
            <Typography
              fontSize={{ mobile: "28px", xtablet: "35px" }}
              fontWeight={700}
              color={colorPalette.blue[1]}>
              تنظیم سفارشی معیارهای اخطار{" "}
            </Typography>
          </Flex>
          <Typography
            fontSize={"16px"}
            lineHeight={"28px"}
            color={colorPalette.gray[3]}>
            بخشی از صفحه را برای نظارت بر تغییرات بصری انتخاب کنید، یا نظارت بر
            کلمات کلیدی، جملات، به‌روزرسانی‌های کد، تصاویر و موارد دیگر را
            انتخاب کنید. مجموعه های پیشرفته ای از معیارها را برای نظارت ایجاد
            کنید. شما تصمیم می گیرید که چه عنصر(های) صفحه وب را نظارت کنید و چه
            زمانی هشدارهای تغییر را برای شما ارسال کنید.
          </Typography>
        </Flex>
      </Flex>
    </Flex>
  );
}
