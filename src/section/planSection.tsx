import PlanCompare from "@/components/planCompare";
import { Flex, Typography } from "@/libs/primitives";
import { colorPalette } from "@/theme";

export default function PlanSection() {
  return (
    <Flex width={"100%"} textAlign={"center"}>
      <Flex paddingTop={"100px"} paddingBottom={"30px"} gap={"30px"}>
        <Typography
          fontWeight={"700"}
          fontSize={{ mobile: "28px", xtablet: "35px" }}
          color={colorPalette.turquoise[3]}>
          انتخاب طرح
        </Typography>
        <Typography
          fontWeight={"700"}
          fontSize={{ mobile: "28px", xtablet: "35px" }}
          color={colorPalette.blue[1]}>
          مقایسه ویژگی های نظارت{" "}
        </Typography>
      </Flex>
      <PlanCompare/>
    </Flex>
  );
}
