import { Button, Flex } from "@/libs/primitives";
import { colorPalette } from "@/theme";
import { Typography } from "@mui/material";
import Image from "next/image";
import CloudIcon from "@mui/icons-material/Cloud";

export default function HeroAbout() {
  return (
    <Flex
      bgcolor={"transparent"}
      width={"100%"}
      alignItems={"center"}
      paddingBottom={"60px"}>
      <Flex
        alignItems={"center"}
        width={"90%"}
        gap={{ xtablet: "55px", mobile: "55px", tablet: "30px" }}
        direction={{ xtablet: "row-reverse", mobile: "column" }}
        justifyContent={"center"}>
        <Flex
          width={{ xtablet: "48%", mobile: "95%" }}
          gap={"16px"}
          textAlign={{ xtablet: "initial", mobile: "center" }}>
          <Flex paddingY={"10px"}>
            <Typography
              fontSize={{ mobile: "28px", xtablet: "35px" }}
              fontWeight={700}
              color={colorPalette.turquoise[2]}>
              درباره ما
            </Typography>
          </Flex>
          <Typography
            fontSize={{ mobile: "28px", xtablet: "35px" }}
            fontWeight={700}
            color={colorPalette.gray[1]}>
            درباره اینکه نرم‌افزار مانیتورینگ <strong>وب پویش</strong> چگونه
            می‌تواند به شما کمک کند، بیشتر بدانید.
          </Typography>
          <Flex
            width={"100%"}
            alignItems={{ mobile: "center", xtablet: "start" }}
            textAlign={"center"}
            paddingTop={"40px"}>
            <Button variant="primary-contained">
              {" "}
              رایگان امتحان کنید{" "}
              <Flex paddingX={"10px"}>
                <CloudIcon />
              </Flex>{" "}
            </Button>
          </Flex>
        </Flex>
        <Flex width={{ xtablet: "48%", mobile: "95%" }}>
          <Image
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            width={2048}
            height={1543}
            alt=""
            src={"/image/About-hero.png"}></Image>
        </Flex>
      </Flex>
    </Flex>
  );
}
