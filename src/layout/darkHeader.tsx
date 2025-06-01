"use client";

import { Button, Flex, Typography } from "@/libs/primitives";
import Image from "next/image";
import CloudIcon from "@mui/icons-material/Cloud";
import { colorPalette } from "@/theme";
import HamMenu from "@/components/hamMenu";
import Link from "next/link";
/**
 * props
 * _______________________________________________________________________________
 */

const DarkHeader = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const itemList = [
    { id: 1, text: "موارد استفاده", href: "/useCase" },
    { id: 2, text: "قیمت گذاری", href: "/pricing" },
    { id: 3, text: "درباره ما", href: "/about" },
    { id: 4, text: "بلاگ", href: "/blog" },
  ];

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Flex
      bgcolor={colorPalette.blue[2]}
      flexDirection="row"
      position="relative"
      padding={{ xtablet: "15px 40px", mobile: "10px 15px" }}
      alignItems={"center"}
      justifyContent={"space-between"}>
      <Flex
        display={{
          xtablet: "none",
          mobile: "flex",
        }}
        style={{ cursor: "pointer" }}>
        <HamMenu sx={"#ffffff"}/>
      </Flex>
      <Flex justifySelf={"end"}>
        <Link href="/">
          <Flex direction={"row"} gap={"10px"}>
            <Flex width={"22px"} height={"42px"}>
              <Image
                width={22}
                height={42}
                src={"/image/light-logo1.png"}
                alt=""></Image>
            </Flex>
            <Flex alignItems={"center"} justifyContent={"center"}>
              <Typography fontSize={"25px"} color={colorPalette.gray[1]}>
                {" "}
                وب <strong>پویش</strong>{" "}
              </Typography>
            </Flex>
          </Flex>
        </Link>
      </Flex>
      <Flex
        display={{
          xtablet: "flex",
          mobile: "none",
        }}
        flex={1}
        paddingX={"20px"}
        flexDirection="row"
        justifyContent={"space-evenly"}>
        {itemList.map((item) => (
          <Typography
            key={item.id}
            fontSize={"16px"}
            fontWeight={700}
            sx={{
              "&": {
                color: colorPalette.gray[1],
                transition: "color 0.3s ease",
                "&:hover": {
                  color: colorPalette.turquoise[2],
                },
              },
            }}>
            <Link href={item.href}>{item.text}</Link>
          </Typography>
        ))}
      </Flex>
      <Flex
        direction={"row"}
        gap={"36px"}
        display={{
          xtablet: "flex",
          mobile: "none",
        }}>
        <Button variant="primary-contained">
          {" "}
          رایگان امتحان کنید{" "}
          <Flex paddingX={"10px"}>
            <CloudIcon />
          </Flex>{" "}
        </Button>
        <Button variant="secondary-outlined">ورود</Button>
      </Flex>
    </Flex>
  );
};

export default DarkHeader;

/**
 * styled-component
 * _______________________________________________________________________________
 */
