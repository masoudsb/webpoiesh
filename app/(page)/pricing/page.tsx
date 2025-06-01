import DesSection from "@/components/desSection";
import { Flex } from "@/libs/primitives";
import AllPlan from "@/section/allPlan";
import PlanPrice from "@/section/planPrice";
import PlanSection from "@/section/planSection";
import { colorPalette } from "@/theme";

export default function Pricing(){
    return(
        <Flex  justifyContent={"center"} alignItems={"center"} bgcolor={colorPalette.gray[1]}>
           <PlanPrice/>
           <PlanSection/>
           <AllPlan/>
           <DesSection/>
        </Flex>
    )
}