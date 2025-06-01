import { Button, Flex, Typography } from "@/libs/primitives";
import { colorPalette } from "@/theme";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

export default function PriceSection() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <Flex
      gap={"40px"}
      paddingX={"4%"}
      direction={{ xtablet: "row", mobile: "column" }}
      paddingY={"50px"}>
      <Flex
        border={`0.5px solid ${colorPalette.gray[2]}`}
        borderRadius={"3px"}
        width={{ xtablet: "33%", mobile: "95%" }}
        padding={"40px"}>
        <Flex gap={"50px"}>
          <Flex
            borderBottom={`0.5px solid ${colorPalette.gray[2]}`}
            gap={"35px"}
            paddingBottom={"45px"}>
            <Typography
              fontSize={"20px"}
              color={colorPalette.blue[3]}
              fontWeight={700}>
              رایگان
            </Typography>
            <Typography
              fontSize={{ mobile: "28px", xtablet: "35px" }}
              fontWeight={"700"}
              color={colorPalette.turquoise[3]}>
              $0
            </Typography>
            <Typography
              fontSize={"18px"}
              color={colorPalette.gray[2]}
              fontWeight={400}>
              دائمی
            </Typography>
          </Flex>
          <Flex height={"81px"} justifyContent={"space-evenly"}>
            <Typography
              fontSize={"15px"}
              color={colorPalette.gray[3]}
              fontWeight={600}>
              6
            </Typography>
            <Typography
              fontSize={"15px"}
              color={colorPalette.gray[3]}
              fontWeight={400}>
              چک در روز
            </Typography>
          </Flex>
          <Flex height={"81px"} justifyContent={"space-evenly"}>
            <Typography
              fontSize={"15px"}
              color={colorPalette.gray[3]}
              fontWeight={600}>
              0
            </Typography>
            <Typography
              fontSize={"15px"}
              color={colorPalette.gray[3]}
              fontWeight={400}>
              اعلان مخصوص کاربران
            </Typography>
          </Flex>
          <Flex height={"81px"} justifyContent={"space-evenly"}>
            <Typography
              fontSize={"15px"}
              color={colorPalette.gray[3]}
              fontWeight={600}>
              1
            </Typography>
            <Typography
              fontSize={"15px"}
              color={colorPalette.gray[3]}
              fontWeight={400}>
              ماه(های) آرشیو داده ها
            </Typography>
          </Flex>
          <Flex>
            <Typography
              fontSize={"15px"}
              color={colorPalette.gray[2]}
              fontWeight={600}>
              ویژگی‌های محدود
            </Typography>
          </Flex>
          <Flex>{/* <Button variant="primary-outlined"></Button> */}</Flex>
        </Flex>
      </Flex>
      <Flex
        border={`0.5px solid ${colorPalette.gray[2]}`}
        borderRadius={"3px"}
        width={{ xtablet: "33%", mobile: "95%" }}
        padding={"40px"}>
        <Flex gap={"50px"}>
          <Flex
            borderBottom={`0.5px solid ${colorPalette.gray[2]}`}
            gap={"35px"}
            paddingBottom={"45px"}>
            <Typography
              fontSize={"20px"}
              color={colorPalette.blue[3]}
              fontWeight={700}>
              کاربر قدرتمند
            </Typography>
            <Typography
              fontSize={{ mobile: "28px", xtablet: "35px" }}
              fontWeight={"700"}
              color={colorPalette.turquoise[3]}>
              $9/ماهانه
            </Typography>
            <Typography
              fontSize={"18px"}
              color={colorPalette.gray[2]}
              fontWeight={400}>
              گزینه‌ها را انتخاب کنید
            </Typography>
          </Flex>
          <Flex>
            <FormControl sx={{ m: "0px auto", maxWidth: "200px" }}>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}>
                <MenuItem value="">
                  <em>1500</em>
                </MenuItem>
                <MenuItem value={10}>3000</MenuItem>
                <MenuItem value={20}>6000</MenuItem>
                <MenuItem value={30}>9000</MenuItem>
                <MenuItem value={30}>15000</MenuItem>
                <MenuItem value={30}>22500</MenuItem>
                <MenuItem value={30}>30000</MenuItem>
                <MenuItem value={30}>45000</MenuItem>
              </Select>
            </FormControl>
            <Typography
              fontSize={"15px"}
              color={colorPalette.gray[3]}
              fontWeight={400}>
              چک در روز
            </Typography>
          </Flex>
          <Flex>
            <FormControl sx={{ m: "0px auto", maxWidth: "200px" }}>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}>
                <MenuItem value="">
                  <em>0</em>
                </MenuItem>
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>2</MenuItem>
                <MenuItem value={30}>3</MenuItem>
                <MenuItem value={30}>4</MenuItem>
                <MenuItem value={30}>5</MenuItem>
              </Select>
            </FormControl>
            <Typography
              fontSize={"15px"}
              color={colorPalette.gray[3]}
              fontWeight={400}>
              اعلان مخصوص کاربران
            </Typography>
          </Flex>
          <Flex>
            <FormControl sx={{ m: "0px auto", maxWidth: "200px" }}>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}>
                <MenuItem value="">
                  <em>3</em>
                </MenuItem>
                <MenuItem value={10}>6</MenuItem>
                <MenuItem value={20}>12</MenuItem>
              </Select>
            </FormControl>
            <Typography
              fontSize={"15px"}
              color={colorPalette.gray[3]}
              fontWeight={400}>
              ماه(های) آرشیو داده ها
            </Typography>
          </Flex>
          <Flex>
            <Typography
              fontSize={"15px"}
              color={colorPalette.gray[2]}
              fontWeight={600}>
              ویژگی‌های قدرتمند پریمیوم
            </Typography>
          </Flex>
          <Flex>
            <Button variant="primary-outlined">برزورسانی</Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        border={`0.5px solid ${colorPalette.gray[2]}`}
        borderRadius={"3px"}
        width={{ xtablet: "33%", mobile: "95%" }}
        padding={"40px"}>
        <Flex gap={"50px"}>
          <Flex
            borderBottom={`0.5px solid ${colorPalette.gray[2]}`}
            gap={"35px"}
            paddingBottom={"45px"}>
            <Typography
              fontSize={"20px"}
              color={colorPalette.blue[3]}
              fontWeight={700}>
              سازمانی
            </Typography>
            <Typography
              fontSize={{ mobile: "28px", xtablet: "35px" }}
              fontWeight={"700"}
              color={colorPalette.turquoise[3]}>
              $299/ماهانه
            </Typography>
            <Typography
              fontSize={"17px"}
              color={colorPalette.gray[2]}
              fontWeight={400}>
              (شروع از صورتحساب سالانه)
            </Typography>
          </Flex>
          <Flex height={"81px"} justifyContent={"space-evenly"}>
            <Typography
              fontSize={"15px"}
              color={colorPalette.gray[3]}
              fontWeight={600}>
              چک هر
            </Typography>
            <Typography
              fontSize={"15px"}
              color={colorPalette.gray[3]}
              fontWeight={400}>
              3 دقیقه یکبار
            </Typography>
          </Flex>
          <Flex height={"81px"} justifyContent={"space-evenly"}>
            <Typography
              fontSize={"15px"}
              color={colorPalette.gray[3]}
              fontWeight={600}>
              حداقا یک
            </Typography>
            <Typography
              fontSize={"15px"}
              color={colorPalette.gray[3]}
              fontWeight={400}>
              جایگاه سازمانی
            </Typography>
          </Flex>
          <Flex height={"81px"} justifyContent={"space-evenly"}>
            <Typography
              fontSize={"15px"}
              color={colorPalette.gray[3]}
              fontWeight={600}>
              تا 12 سال
            </Typography>
            <Typography
              fontSize={"15px"}
              color={colorPalette.gray[3]}
              fontWeight={400}>
              بایگانی داده‌ها
            </Typography>
          </Flex>
          <Flex>
            <Typography
              fontSize={"15px"}
              color={colorPalette.gray[2]}
              fontWeight={600}>
              ویژگی‌ها و ابزارهای سطح سازمانی
            </Typography>
          </Flex>
          <Flex>
            <Button variant="primary-outlined">
              برنامه‌ریزی یک نسخه آزمایشی (دمو)
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
