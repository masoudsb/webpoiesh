import { Button, Flex, Typography } from "@/libs/primitives";
import CloudIcon from "@mui/icons-material/Cloud";
import Image from "next/image";

export default function DarkCaseSection({bg,col1,col2}:{bg:string,col1:string,col2:string}) {
  return (
    <Flex
    
      width={"100%"}
      padding={{ tablet: "200px 100px", mobile: "100px 50px" }}
      alignItems={"center"}
      bgcolor={bg}>
        
      <Flex width={{ tablet: "20%", mobile: "40%" }} paddingBottom={"20px"}
      >
        <Image
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          width={297}
          height={192}
          alt=""
          src={"/image/Spot.png"}></Image>
      </Flex>
      <Flex paddingY={"20px"} textAlign={"center"}>
        <Typography
          fontSize={{ mobile: "28px", xtablet: "35px" }}
          fontWeight={"700"}
          lineHeight={{ xtablet: "60px", mobile: "48px" }}
          color={col1}>
          نظارت و بایگانی هر وب‌ سایتی
        </Typography>
      </Flex>
      <Flex
        paddingX={{ tablet: "0", mobile: "30px" }}
        textAlign={"center"}
        marginBottom={"36px"}
        color={col2}>
        <Typography fontSize={"18px"} lineHeight={"28px"} fontWeight={"400"}>
          ما تغییرات وب‌سایت را به‌طور خودکار ردیابی و بایگانی می‌کنیم.
          نرم‌افزار قدرتمند، کاربرپسند و مبتنی بر سرور ابری برای نظارت و بایگانی.
        </Typography>
      </Flex>
      <Flex margin={"0px auto"}>
        <Button variant="primary-contained">
          {" "}
          رایگان امتحان کنید{" "}
          <Flex paddingX={"10px"}>
            <CloudIcon />
          </Flex>{" "}
        </Button>
      </Flex>

     
    </Flex>
  );
}
