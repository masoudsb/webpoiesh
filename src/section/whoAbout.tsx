import { Flex, Grid } from "@/libs/primitives";
import { colorPalette } from "@/theme";
import { Typography } from "@mui/material";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
export default function WhoAbout() {
  const list = [
    {
      id: "01",
      text: "کارکنان بازاریابی و استراتژی شرکت",
    },
    {
      id: "02",
      text: "مدیران بخش اعتبار",
    },
    {
      id: "03",
      text: "کارکنان فناوری اطلاعات",
    },
    {
      id: "04",
      text: "تنظیم کننده ها",
    },
    {
      id: "05",
      text: "صاحبان مشاغل کوچک",
    },
    {
      id: "06",
      text: "مدیران اجرایی شرکت‌ها",
    },
    {
      id: "07",
      text: "مسئولین انطباق شرکت‌ها",
    },
    {
      id: "08",
      text: "خبرنگاران",
    },
    {
      id: "09",
      text: "جویندگان معامله",
    },
    {
      id: "10",
      text: "تیم‌های روابط عمومی",
    },
    {
      id: "11",
      text: "مشاوران املاک",
    },
    {
      id: "12",
      text: "جویندگان خانه",
    },
    {
      id: "13",
      text: "تیم‌های حقوقی",
    },
    {
      id: "14",
      text: "شرکت کنندگان در کنسرت",
    },
    {
      id: "15",
      text: "سازمان‌های دولتی",
    },
  ];
  return (
    <>
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
            چه کسانی از وب پویش استفاده می‌کنند؟
          </Typography>
        </Flex>
        <Flex
          width={"90%"}
          gap={{ xtablet: "55px", mobile: "55px", tablet: "30px" }}
          direction={{ xtablet: "row-reverse", mobile: "column" }}
          alignItems={"center"}>
          <Flex width={{ xtablet: "56%", tablet: "96%", mobile: "300px" }} gap={"16px"} textAlign={"center"}>
            <Grid columns={{tablet:2,mobile:1}} spacing={"22px"} container>
              {list.map((e) => (
                <Grid size={1} key={e.id}>
                  <Flex direction={"row"} gap={"15px"}>
                    <CheckIcon sx={{ color: colorPalette.turquoise[3] }} />
                    <Typography 
                    fontWeight={400}
                      fontSize={{ mobile: "14px", laptop: "16px" }}
                      color={colorPalette.gray[3]}>
                      {e.text}
                    </Typography>
                  </Flex>
                </Grid>
              ))}
            </Grid>
          </Flex>
          <Flex width={{ xtablet: "40%", mobile: "95%" }} >
            <Image
            
              style={{ width: "100%", height: "auto", objectFit: "cover" ,borderRadius:"3px"}}
              width={1024}
              height={681}
              alt=""
              src={"/image/Who-about.png"}></Image>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
