import { Flex } from "@/libs/primitives";
import DarkCaseSection from "@/section/darkCaseSection";
import GridAbout from "@/section/gridAbout";
import HeroAbout from "@/section/heroAbout";
import WhoAbout from "@/section/whoAbout";
import { colorPalette } from "@/theme";

export default function About() {
  return (
    <Flex
    //   height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor={colorPalette.blue[2]}
      paddingY={"50px"}>
        <HeroAbout/>
        <GridAbout/>
        <WhoAbout/>
        <DarkCaseSection bg="#f2fafc" col1="#29303b" col2="#4E5567"/>
      </Flex>
  );
}
