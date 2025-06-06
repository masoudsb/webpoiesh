"use client";

import { Flex, Typography } from "@/libs/primitives";
import { colorPalette } from "@/theme";
import Image from "next/image";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import Link from "next/link";

/**
 * props
 * _______________________________________________________________________________
 */

const Footer = () => {
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
      direction={"row"}
      bgcolor={colorPalette.blue[2]}
      width={"100%"}
      alignItems={"start"}
      justifyContent={"start"}
      p={"120px 40px"}
      gap={"20px"}
      flexWrap={{ tablet: "nowrap", mobile: "wrap" }}>
      <Flex
      padding={"10px"}
        display={{ tablet: "flex", mobile: "none" }}
        width={{ tablet: "24%", mobile: "47%" }}
        minWidth={{ tablet: "24%", mobile: "47%" }}
        gap={"15px"}>
        <Link href="/#">
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
        <Flex>
          <Typography
            fontSize={"12px"}
            color={colorPalette.gray[1]}
            fontWeight={500}>
            © 1404 تمامی حقوق محفوظ است.
          </Typography>
        </Flex>
      </Flex>
      <Flex
      padding={"10px"}
        width={{ tablet: "24%", mobile: "47%" }}
        minWidth={{ tablet: "24%", mobile: "47%" }}
        gap={"20px"}>
        {" "}
        {itemList.map((item) => (
          <Typography
            key={item.id}
            fontSize={"16px"}
            fontWeight={500}
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
      padding={"10px"}
        width={{ tablet: "24%", mobile: "47%" }}
        minWidth={{ tablet: "24%", mobile: "47%" }}
        gap={"20px"}>
        {/* <Typography
          fontSize={"16px"}
          fontWeight={500}
          sx={{
            "&": {
              color: colorPalette.gray[1],
              transition: "color 0.3s ease",
              "&:hover": {
                color: colorPalette.turquoise[2],
              },
            },
          }}>
          <Link href="/#">بایگانی وب سایت</Link>
        </Typography>
        <Typography
          fontSize={"16px"}
          fontWeight={500}
          sx={{
            "&": {
              color: colorPalette.gray[1],
              transition: "color 0.3s ease",
              "&:hover": {
                color: colorPalette.turquoise[2],
              },
            },
          }}>
          <Link href="/#">وضعیت</Link>
        </Typography>
        <Typography
          fontSize={"16px"}
          fontWeight={500}
          sx={{
            "&": {
              color: colorPalette.gray[1],
              transition: "color 0.3s ease",
              "&:hover": {
                color: colorPalette.turquoise[2],
              },
            },
          }}>
          <Link href="/#">بازخورد بدهید</Link>
        </Typography> */}
        <Typography
          fontSize={"16px"}
          fontWeight={500}
          sx={{
            "&": {
              color: colorPalette.gray[1],
              transition: "color 0.3s ease",
              "&:hover": {
                color: colorPalette.turquoise[2],
              },
            },
          }}>
          <Link href="/terms">شرایط خدمات</Link>
        </Typography>
        <Typography
          fontSize={"16px"}
          fontWeight={500}
          sx={{
            "&": {
              color: colorPalette.gray[1],
              transition: "color 0.3s ease",
              "&:hover": {
                color: colorPalette.turquoise[2],
              },
            },
          }}>
          <Link href="/privacy">سیاست حفظ حریم خصوصی</Link>
        </Typography>
      </Flex>
      <Flex
      padding={"10px"}
        display={{ tablet: "none", mobile: "flex" }}
        width={{ tablet: "24%", mobile: "47%" }}
        minWidth={{ tablet: "24%", mobile: "47%" }}
        gap={"15px"}>
        <Link href="/#">
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
        <Flex>
          <Typography
            fontSize={"12px"}
            color={colorPalette.gray[1]}
            fontWeight={500}>
            © 1404 تمامی حقوق محفوظ است.
          </Typography>
        </Flex>
      </Flex>
      <Flex
      padding={"10px"}
        width={{ tablet: "24%", mobile: "47%" }}
        minWidth={{ tablet: "24%", mobile: "47%" }}
        gap={"20px"}>
        <Flex>
          <Typography
            color={colorPalette.gray[1]}
            fontSize={{ mobile: "28px", xtablet: "35px" }}
            fontWeight={"700"}>
            ارتباط با ما
          </Typography>
        </Flex>
        <Flex direction={"row"} gap={"30px"} flexWrap={"wrap"}>
          <XIcon
            fontSize="medium"
            sx={{
              "&": {
                cursor: "pointer",
                color: colorPalette.gray[1],
                transition: "color 0.3s ease",
                "&:hover": {
                  color: colorPalette.turquoise[2],
                },
              },
            }}
          />
          <EmailIcon
            fontSize="medium"
            sx={{
              "&": {
                cursor: "pointer",
                color: colorPalette.gray[1],
                transition: "color 0.3s ease",
                "&:hover": {
                  color: colorPalette.turquoise[2],
                },
              },
            }}
          />
          <InstagramIcon
            fontSize="medium"
            sx={{
              "&": {
                cursor: "pointer",
                color: colorPalette.gray[1],
                transition: "color 0.3s ease",
                "&:hover": {
                  color: colorPalette.turquoise[2],
                },
              },
            }}
          />
          <TelegramIcon
            fontSize="medium"
            sx={{
              "&": {
                cursor: "pointer",
                color: colorPalette.gray[1],
                transition: "color 0.3s ease",
                "&:hover": {
                  color: colorPalette.turquoise[2],
                },
              },
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;

/**
 * styled-component
 * _______________________________________________________________________________
 */
