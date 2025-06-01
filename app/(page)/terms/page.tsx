import { Flex, Typography } from "@/libs/primitives";
import { colorPalette } from "@/theme";

export default function Terms(){
    return(
        <Flex height={"100vh"} justifyContent={"center"} alignItems={"center"}>
            <Typography variant="h1" color={colorPalette.blue[1]}>صفحه مقررات</Typography>
        </Flex>
    )
}