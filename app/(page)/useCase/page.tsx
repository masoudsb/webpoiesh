import { Flex } from "@/libs/primitives";
import DarkCaseSection from "@/section/darkCaseSection";
import HeroCasePage from "@/section/heroCasePage";
import MidCasePage from "@/section/midCasePage";
import { colorPalette } from "@/theme";

export default function UseCase() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} position={"relative"}>
      <HeroCasePage />
      <MidCasePage />
      <DarkCaseSection bg="#141720" col1="#ffffff" col2="#9197a1"/>
      <Flex
      position={"absolute"}
      bottom={"0px"}
        left={"10%"}
        borderBottom={"1px solid #4E5567"}
        width={"80%"}
       ></Flex>
    </Flex>
  );
}
