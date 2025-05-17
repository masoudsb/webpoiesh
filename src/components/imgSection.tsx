import { Flex } from "@/libs/primitives";
import Image from "next/image";

export default function ImgSection() {
  return (
    <Flex  >
    <Flex width={"100%"} height={"auto"} display={{mobile:"none",tablet:"flex"}}>
      <Image
      
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
        width={2048}
        height={625}
        alt=""
        src={"/image/Hero-img-2-2048x625-1.png"}></Image>
        </Flex>
    <Flex width={"100%"} height={"auto"} display={{mobile:"flex",tablet:"none"}}>
        
      <Image
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
        width={2048}
        height={625}
        alt=""
        src={"/image/Frame-427317998.png"}></Image>
    </Flex>
    </Flex>
  );
}
