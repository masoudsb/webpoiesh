"use client";

import { Flex, Typography } from "@/libs/primitives";
import { colorPalette } from "@/theme";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/style/slider.css";

import { Pagination, Navigation } from "swiper/modules";

export default function DesSection() {
  return (
    <Flex bgcolor={colorPalette.gray[1]} width={"100%"}>
      <Flex
        maxWidth={"1120px"}
        padding={{ tablet: "120px 10px", mobile: "70px 10px" }}
        margin={{ xtablet: "0 auto", mobile: "none" }}>
        <Flex
          paddingX={{ laptop: "200px", xtablet: "100px", mobile: "0px" }}
          marginBottom={{ tablet: "88px", mobile: "44px" }}>
          <Typography
            textAlign={"center"}
            fontSize={{ tablet: "24px", mobile: "16px" }}
            fontWeight={700}
            lineHeight={"33px"}>
            راه حل های قدرتمند نظارت و آرشیو وب سایت برای شرکت های پیشرو
          </Typography>
        </Flex>
        <Flex direction={"row"} display={{ mobile: "none", xtablet: "flex" }}>
          <Image
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            width={336}
            height={376}
            alt=""
            src={"/image/des1.png"}></Image>
          <Image
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            width={336}
            height={376}
            alt=""
            src={"/image/des 2.png"}></Image>
          <Image
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            width={336}
            height={376}
            alt=""
            src={"/image/des 3.png"}></Image>
        </Flex>
        <Flex display={{ mobile: "none",tablet: "flex" , xtablet: "none" }} >
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Pagination, Navigation]}
            className="mySwiper">
            <SwiperSlide>
              {" "}
              <Flex width={"100%"} height={"auto"} paddingBottom={"40px"}>

              <Image
              
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              width={336}
                height={376}
                alt=""
                src={"/image/des1.png"}></Image>
                </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex width={"100%"} height={"auto"} paddingBottom={"40px"}>
              <Image
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                width={336}
                height={376}
                alt=""
                src={"/image/des 2.png"}></Image>
                </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex width={"100%"} height={"auto"} paddingBottom={"40px"}>
              <Image
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                width={336}
                height={376}
                alt=""
                src={"/image/des 3.png"}></Image>
                </Flex>
            </SwiperSlide>
          </Swiper>
        </Flex>
        <Flex display={{ mobile: "flex", tablet: "none" }} >
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Pagination, Navigation]}
            className="mySwiper">
            <SwiperSlide>
              {" "}
              <Flex width={"100%"} height={"auto"} paddingBottom={"40px"}>

              <Image
              
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              width={336}
                height={376}
                alt=""
                src={"/image/des1.png"}></Image>
                </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex width={"100%"} height={"auto"} paddingBottom={"40px"}>
              <Image
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                width={336}
                height={376}
                alt=""
                src={"/image/des 2.png"}></Image>
                </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex width={"100%"} height={"auto"} paddingBottom={"40px"}>
              <Image
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                width={336}
                height={376}
                alt=""
                src={"/image/des 3.png"}></Image>
                </Flex>
            </SwiperSlide>
          </Swiper>
        </Flex>

      </Flex>
    </Flex>
  );
}
