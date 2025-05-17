import { Flex, Typography } from "@/libs/primitives";
import { colorPalette } from "@/theme";
import Image from "next/image";
import AccordionPower from "./accordion";

export default function PowerSection() {
  return (
    <Flex
      width={"100%"}
      bgcolor={colorPalette.gray[1]}
      alignItems={"center"}
      paddingY={"120px"}>
      <Flex paddingBottom={"80px"}>
        <Typography
          textAlign={"center"}
          fontSize={{ tablet: "35px", mobile: "28px" }}
          
          fontWeight={700}
          color={colorPalette.blue[1]}
          lineHeight={"38px"}>
          نظارت قدرتمند وب سایت و تشخیص تغییر
        </Typography>
      </Flex>
      <Flex
        width={"90%"}
        gap={{ xtablet: "55px", mobile: "55px", tablet: "30px" }}
        direction={{ tablet: "row-reverse", mobile: "column" }}
        alignItems={"center"}>
        <Flex width={{ tablet: "48%", mobile: "95%" }} gap={"16px"}>
          <AccordionPower />
        </Flex>
        <Flex width={{ tablet: "48%", mobile: "95%" }}>
          <Image
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            width={2048}
            height={1543}
            alt=""
            src={"/image/power.png"}></Image>
        </Flex>
      </Flex>
    </Flex>
  );
}
