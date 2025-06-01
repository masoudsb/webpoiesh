"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Flex, Typography } from "@/libs/primitives";
import { colorPalette } from "@/theme";
import PriceSection from "@/components/priceSection";

export default function PlanPrice() {
  const IOSSwitch = styled((props: SwitchProps) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    paddingLeft: "10px",
    "& .MuiSwitch-switchBase": {
      top: 2,
      left: 3,
      padding: 0,
      margin: 0,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(14px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: "#29303b",
          opacity: 1,
          border: 0,
          ...theme.applyStyles("dark", {
            backgroundColor: "#29303b",
          }),
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: theme.palette.grey[100],
        ...theme.applyStyles("dark", {
          color: theme.palette.grey[600],
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.7,
        ...theme.applyStyles("dark", {
          opacity: 0.3,
        }),
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#29303b",
      opacity: 0.5,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
      ...theme.applyStyles("dark", {
        backgroundColor: "#39393D",
      }),
    },
  }));

  return (
    <Flex width={"100%"} textAlign={"center"}>
      <Flex paddingTop={"200px"} paddingBottom={"30px"}>
        <Typography
          fontWeight={"700"}
          fontSize={{ mobile: "28px", xtablet: "35px" }}
          color={colorPalette.blue[1]}>
          طرح‌ ها و قیمت‌ ها
        </Typography>
      </Flex>
      <Flex
        padding={"10px 50px"}
        margin={"0 auto"}
        direction={"row"}
        gap={"20px"}>
        <Flex>
          <Typography
            fontSize={"16px"}
            color={colorPalette.turquoise[3]}
            fontWeight={400}>
            2 ماه رایگان
          </Typography>
          <Typography
            fontSize={"16px"}
            color={colorPalette.gray[3]}
            fontWeight={400}>
            صورتحساب سالانه
          </Typography>
        </Flex>
        <FormControlLabel control={<IOSSwitch />} label="" />
        <Flex paddingRight="28px" justifyContent={"center"}>
          <Typography
            fontSize={"16px"}
            color={colorPalette.gray[3]}
            fontWeight={400}>
            صورتحساب ماهانه
          </Typography>
        </Flex>
      </Flex>
      <PriceSection/>
    </Flex>
  );
}
