import { Flex, Typography } from "@/libs/primitives";
import { colorPalette } from "@/theme";

export default function HeroCasePage() {
  return (
    <Flex
      width={"100%"}
      height={"300px"}
      justifyContent={"center"}
      alignItems={"center"}
      style={{
        maxWidth: "100%",
        backgroundImage: 'url("/image/backCase.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
      <Typography
        fontWeight={"700"}
        fontSize={{ mobile: "28px", xtablet: "35px" }}
        color={colorPalette.blue[1]}>
        موارد استفاده از مانیتورینگ وب‌سایت{" "}
      </Typography>
    </Flex>
  );
}
