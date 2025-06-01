import { Flex, Typography } from "@/libs/primitives";
import { colorPalette } from "@/theme";

export default function PlanCompare() {
  const free = [
    {
      id: "01",
      text: " حداکثر ۳ آدرس دامنه",
      color: "#29303b",
    },
    {
      id: "02",
      text: " حداکثر 6 چک در روز",
      color: "#29303b",
    },
    {
      id: "03",
      text: "عکس‌های فوری بصری تمام صفحه",
      color: "#9197A1B3",
    },
    {
      id: "04",
      text: "نظارت بر وب‌سایت‌ها پس از ورود به سیستم",
      color: "#9197A1B3",
    },
    {
      id: "05",
      text: "شبیه‌سازی اقدامات کاربر",
      color: "#9197A1B3",
    },
    {
      id: "06",
      text: "یکپارچه سازی Zapier",
      color: "#9197A1B3",
    },
    {
      id: "07",
      text: "علامت‌گذاری اعلان‌ها به‌عنوان مرور شده",
      color: "#9197A1B3",
    },
    {
      id: "08",
      text: "یادداشت‌های مشترک",
      color: "#9197A1B3",
    },
    {
      id: "09",
      text: "نظارت بر فایل‌های PDF",
      color: "#9197A1B3",
    },
    {
      id: "10",
      text: "نظارت بر فایل‌های متنی (.js، .txt، .css و غیره)",
      color: "#9197A1B3",
    },
    {
      id: "11",
      text: "استخراج دیتا",
      color: "#9197A1B3",
    },
    {
      id: "12",
      text: "پشتیبانی پیشرفته و کمک در راه‌اندازی",
      color: "#9197A1B3",
    },
  ];
  const power = [
    {
      id: "01",
      text: " حداکثر 500 آدرس دامنه",
      color: "#29303b",
    },
    {
      id: "02",
      text: " حداکثر 6 چک در روز",
      color: "#29303b",
    },
    {
      id: "03",
      text: "عکس‌های فوری بصری تمام صفحه",
      color: "#29303b",
    },
    {
      id: "04",
      text: "نظارت بر وب‌سایت‌ها پس از ورود به سیستم",
      color: "#29303b",
    },
    {
      id: "05",
      text: "شبیه‌سازی اقدامات کاربر",
      color: "#29303b",
    },
    {
      id: "06",
      text: "یکپارچه سازی Zapier",
      color: "#29303b",
    },
    {
      id: "07",
      text: "علامت‌گذاری اعلان‌ها به‌عنوان مرور شده",
      color: "#29303b",
    },
    {
      id: "08",
      text: "یادداشت‌های مشترک",
      color: "#9197A1B3",
    },
    {
      id: "09",
      text: "نظارت بر فایل‌های PDF",
      color: "#9197A1B3",
    },
    {
      id: "10",
      text: "نظارت بر فایل‌های متنی (.js، .txt، .css و غیره)",
      color: "#9197A1B3",
    },
    {
      id: "11",
      text: "استخراج دیتا",
      color: "#9197A1B3",
    },
    {
      id: "12",
      text: "پشتیبانی پیشرفته و کمک در راه‌اندازی",
      color: "#9197A1B3",
    },
  ];
  const ent = [
    {
      id: "01",
      text: " حداکثر 500 آدرس دامنه",
      color: "#29303b",
    },
    {
      id: "02",
      text: " حداکثر 6 چک در روز",
      color: "#29303b",
    },
    {
      id: "03",
      text: "عکس‌های فوری بصری تمام صفحه",
      color: "#29303b",
    },
    {
      id: "04",
      text: "نظارت بر وب‌سایت‌ها پس از ورود به سیستم",
      color: "#29303b",
    },
    {
      id: "05",
      text: "شبیه‌سازی اقدامات کاربر",
      color: "#29303b",
    },
    {
      id: "06",
      text: "یکپارچه سازی Zapier",
      color: "#29303b",
    },
    {
      id: "07",
      text: "علامت‌گذاری اعلان‌ها به‌عنوان مرور شده",
      color: "#29303b",
    },
    {
      id: "08",
      text: "یادداشت‌های مشترک",
      color: "#29303b",
    },
    {
      id: "09",
      text: "نظارت بر فایل‌های PDF",
      color: "#29303b",
    },
    {
      id: "10",
      text: "نظارت بر فایل‌های متنی (.js، .txt، .css و غیره)",
      color: "#29303b",
    },
    {
      id: "11",
      text: "استخراج دیتا",
      color: "#29303b",
    },
    {
      id: "12",
      text: "پشتیبانی پیشرفته و کمک در راه‌اندازی",
      color: "#29303b",
    },
  ];

  return (
    <Flex
      gap={"40px"}
      paddingX={"4%"}
      direction={{ xtablet: "row", mobile: "column" }}
      paddingY={"50px"}>
      <Flex
        borderRadius={"3px"}
        width={{ xtablet: "33%", mobile: "95%" }}
        padding={"40px"}>
        <Flex gap={"25px"} paddingBottom={"25px"}>
          <Typography
            fontSize={{ mobile: "28px", xtablet: "35px" }}
            color={colorPalette.blue[3]}
            fontWeight={700}>
            رایگان
          </Typography>
        </Flex>
        <Flex gap={"20px"}>
          {free.map((e) => (
            <Typography
              key={e.id}
              fontSize={"16px"}
              color={e.color}
              fontWeight={500}>
              {e.text}
            </Typography>
          ))}
        </Flex>
      </Flex>
      <Flex
        borderRadius={"3px"}
        width={{ xtablet: "33%", mobile: "95%" }}
        padding={"40px"}>
        <Flex gap={"25px"} paddingBottom={"25px"}>
          <Typography
            fontSize={{ mobile: "28px", xtablet: "35px" }}
            color={colorPalette.blue[3]}
            fontWeight={700}>
            کاربر قدرتمند
          </Typography>
        </Flex>
        <Flex gap={"20px"}>
          {power.map((e) => (
            <Typography
              key={e.id}
              fontSize={"16px"}
              color={e.color}
              fontWeight={500}>
              {e.text}
            </Typography>
          ))}
        </Flex>
      </Flex>
      <Flex
        borderRadius={"3px"}
        width={{ xtablet: "33%", mobile: "95%" }}
        padding={"40px"}>
        <Flex gap={"25px"} paddingBottom={"25px"}>
          <Typography
            fontSize={{ mobile: "28px", xtablet: "35px" }}
            color={colorPalette.blue[3]}
            fontWeight={700}>
            سازمانی{" "}
          </Typography>
        </Flex>
        <Flex gap={"20px"}>
          {ent.map((e) => (
            <Typography
              key={e.id}
              fontSize={"16px"}
              color={e.color}
              fontWeight={500}>
              {e.text}
            </Typography>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
