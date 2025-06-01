import { Flex, Typography } from "@/libs/primitives";
import { colorPalette } from "@/theme";

export default function Privecy(){
    return(
        <Flex height={"100vh"} justifyContent={"center"} alignItems={"center"}>
            <Typography variant="h1" color={colorPalette.blue[1]}>صفحه حریم خصوصی</Typography>
        </Flex>
    )
}