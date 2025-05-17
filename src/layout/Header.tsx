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

const Header = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const itemList = [
    { id: 1, text: "موارد استفاده", href: "/#" },
    { id: 2, text: "قیمت گذاری", href: "/#" },
    { id: 3, text: "فروش و پشتیبانی", href: "/#" },
    { id: 4, text: "درباره ما", href: "/#" },
    { id: 5, text: "بلاگ", href: "/#" },
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
        <HamMenu />
      </Flex>
      <Flex justifySelf={"end"}>
        <Link href="/#">
          <Flex direction={"row"} gap={"10px"}>
            <Flex width={"22px"} height={"42px"}>
              <Image
                width={22}
                height={42}
                src={"/image/logo.png"}
                alt=""></Image>

            </Flex>
            <Flex alignItems={"center"} justifyContent={"center"}>
              <Typography fontSize={"25px"}>
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
        justifyContent={"space-around"}>
        {itemList.map((item) => (
          <Typography
            key={item.id}
            fontSize={"16px"}
            fontWeight={700}
            sx={{
              "&": {
                color: colorPalette.blue[1],
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
        <Button variant="primary-outlined">ورود</Button>
      </Flex>
    </Flex>
  );
};

export default Header;

/**
 * styled-component
 * _______________________________________________________________________________
 */
