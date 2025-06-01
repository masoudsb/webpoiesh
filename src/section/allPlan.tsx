import { Flex, Grid } from "@/libs/primitives";
import { colorPalette } from "@/theme";
import { Typography } from "@mui/material";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
export default function AllPlan() {
  const list = [
    {
      id: "01",
      text: "نظارت بر محتوا",
      fons: "14px",
      fonl: "16px",
      weith: "400",
    },
    {
      id: "02",
      text: "نظارت بر عناصر صفحه بصری",
      fons: "16px",
      fonl: "24px",
      weith: "700",
    },
    {
      id: "03",
      text: "نظارت بر HTML",
      fons: "16px",
      fonl: "24px",
      weith: "700",
    },
    {
      id: "04",
      text: "نظارت بر کلمات کلیدی",
      fons: "16px",
      fonl: "24px",
      weith: "700",
    },
    {
      id: "05",
      text: "نظارت بر در دسترس بودن وب‌سایت",
      fons: "14px",
      fonl: "16px",
      weith: "400",
    },
    {
      id: "06",
      text: "تصویر بصری، محتوا و HTML در لحظه",
      fons: "14px",
      fonl: "16px",
      weith: "400",
    },
  ];
  return (
    <>
      <Flex
        width={"100%"}
        bgcolor={colorPalette.turquoise[1]}
        alignItems={"center"}
        paddingY={"120px"}>
        <Flex paddingBottom={"80px"}>
          <Typography
            textAlign={"center"}
            fontSize={{ tablet: "35px", mobile: "28px" }}
            fontWeight={700}
            color={colorPalette.blue[1]}
            lineHeight={"38px"}>
            همه برنامه ها همچنین شامل می شوند{" "}
          </Typography>
        </Flex>
        <Flex
          width={"90%"}
          gap={{ xtablet: "55px", mobile: "55px"}}
          direction={{ xtablet: "row", mobile: "column" }}
          alignItems={"center"}>
          <Flex
            width={{ xtablet: "40%", tablet: "96%", mobile: "300px" }}
            gap={{ xtablet: "15px", mobile: "35px" }}
            textAlign={"center"}>
            <Grid columns={1} spacing={"22px"} container>
              {list.map((e) => (
                <Grid size={1} key={e.id}>
                  <Flex
                    direction={"row"}
                    gap={{ xtablet: "15px", mobile: "35px" }}>
                    <CheckIcon
                      sx={{ color: colorPalette.turquoise[3] }}
                      fontSize="medium"
                    />
                    <Typography
                      fontWeight={e.weith}
                      fontSize={{ mobile: e.fons, tablet: e.fonl }}
                      color={colorPalette.gray[3]}>
                      {e.text}
                    </Typography>
                  </Flex>
                </Grid>
              ))}
            </Grid>
          </Flex>
          <Flex width={{ xtablet: "60%", mobile: "95%" }}>
            <Image
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "3px",
              }}
              width={1024}
              height={681}
              alt=""
              src={"/image/allPlans.png"}></Image>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
