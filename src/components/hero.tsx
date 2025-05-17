import { Button, Flex, Typography } from "@/libs/primitives";
import CloudIcon from "@mui/icons-material/Cloud";

export default function Hero() {
  return (
    <Flex padding={{tablet:"30px",mobile:"10px"}} marginTop={"30px"}>
      <Flex textAlign={"center"} paddingX={{tablet:"72px",mobile:"10px"}} marginBottom={"32px"}>
        <Typography
          fontSize={{ xtablet: "64px", mobile: "38px" }}
          lineHeight={{ xtablet: "90px", mobile: "50px" }}
          fontWeight={"700"}>
          نظارت بر تغییرات وب سایت
          <br />
          دریافت هشدار، بایگانی تاریخچه کامل
        </Typography>
      </Flex>
      <Flex paddingX={{tablet:"120px",mobile:"10px"}} textAlign={"center"} marginBottom={"36px"}>
        <Typography fontSize={"18px"} lineHeight={"28px"} fontWeight={"400"}>
          یک پلت فرم تشخیص و آرشیو تغییرات وب سایت قدرتمند. سفارشی تنظیم کنید{" "}
          <br />
          معیارهای هشدار، نظارت و پیگیری تغییرات وب سایت، مطلع شوید.
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
