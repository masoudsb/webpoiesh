import { Button, Flex, Typography } from "@/libs/primitives";
import { colorPalette } from "@/theme";
import CloudIcon from "@mui/icons-material/Cloud";
import Image from "next/image";

export default function DarkSection() {
  return (
    <Flex
      width={"100%"}
      padding={{ tablet: "200px 100px", mobile: "100px 50px" }}
      alignItems={"center"}
      bgcolor={colorPalette.blue[2]}>
      <Flex width={{ tablet: "20%", mobile: "40%" }} paddingBottom={"20px"}>
        <Image
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          width={297}
          height={192}
          alt=""
          src={"/image/Spot.png"}></Image>
      </Flex>
      <Flex
      paddingY={"20px"}
        textAlign={"center"}
        >
        <Typography
          fontSize={{ mobile: "28px", xtablet: "35px" }}
          lineHeight={{ xtablet: "60px", mobile: "48px" }}
          fontWeight={"700"}
          color={colorPalette.turquoise[1]}>
          وب سایت ها را برای تغییرات محتوا و تهدیدات امنیتی زیر نظر بگیرید.
          اولین کسی باشید که می دانید. سوابق تاریخی را نگه دارید.
        </Typography>
      </Flex>
      <Flex
        paddingX={{ tablet: "0", mobile: "30px" }}
        textAlign={"center"}
        marginBottom={"36px"}
        color={colorPalette.gray[2]}>
        <Typography fontSize={"18px"} lineHeight={"28px"} fontWeight={"400"}>
          ابزارهای قدرتمند، مبتنی بر ابر و همیشه فعال برای نظارت و بایگانی
          وب‌سایت. نظارت بر صفحات وب برای تغییرات بصری، کلمات کلیدی،
          به‌روزرسانی‌های کد و موارد دیگر. پیگیری و بایگانی تغییرات.
        </Typography>
      </Flex>
      <Flex margin={"0px auto"}>
        <Button variant="primary-contained">
          {" "}
          رایگان امتحان کنید{" "}
          <Flex paddingX={"10px"}>
            <CloudIcon />
          </Flex>{" "}
        </Button>
      </Flex>
    </Flex>
  );
}
