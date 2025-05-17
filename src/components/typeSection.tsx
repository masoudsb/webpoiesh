import { Flex, Typography } from "@/libs/primitives";
import {
  Type1,
  Type2,
  Type3,
  Type4,
  Type5,
  Type6,
  Type7,
  Type8,
  Type9,
  Type10,
  Type11,
  Type12,
} from "../../public/svg";
import { colorPalette } from "@/theme";

export default function TypeSection() {
  const types = [
    {
      id: "1",
      title: "هشدارهای کلمات کلیدی",
      des: ".وقتی محتوای جدیدی حاوی کلمات کلیدی مهم برای شما پیدا می‌کنیم، هشدار دریافت کنید",
      icon: Type2,
    },
    {
      id: "2",
      title: "پیگیری تغییرات",
      des: "به راحتی ببینید چه محتوایی اضافه یا حذف شده است. تاریخچه تغییرات را بایگانی کنید.",
      icon: Type1,
    },
    {
      id: "3",
      des: "اعلان‌ها برای هرگونه یا فقط تغییرات قابل توجه",
      title: "حساسیت به تغییر",
      icon: Type3,
    },
    {
      id: "4",
      title: "عکس‌های فوری از صفحه بصری",
      des: "هنگام شناسایی تغییرات، از صفحه اسکرین‌شات بگیرید",
      icon: Type4,
    },
    {
      id: "5",
      title: "کلمات کلیدی و عبارات",
      des: "اعلان‌ها در صورت وجود یا عدم وجود یک کلمه یا عبارت",
      icon: Type5,
    },
    {
      id: "6",
      title: "در دسترس بودن عنصر صفحه",
      des: "مطمئن شوید که تصاویر و محتوا به درستی نمایش داده می‌شوند",
      icon: Type6,
    },
    {
      id: "7",
      title: "در دسترس بودن وب‌سایت",
      des: "هشدارها وقتی صفحه شما از دسترس خارج می‌شود و دوباره آنلاین می‌شود",
      icon: Type7,
    },
    {
      id: "8",
      title: "نظارت بر کد",
      des: "بررسی وجود یا عدم وجود یک قطعه کد HTML",
      icon: Type8,
    },
    {
      id: "9",
      title: "نظارت چند شرطی",
      des: "ایجاد شرایط هشدار صفحه قوی و سفارشی",
      icon: Type9,
    },
    {
      id: "10",
      title: "عکس‌های فوری HTML",
      des: "ذخیره و بایگانی اسنپ‌شات‌های کد مبتنی بر زمان",
      icon: Type10,
    },
    {
      id: "11",
      title: "هشدارهای چند کاربره",
      des: "فقط شما یا کل تیم را از یک تغییر مطلع کنید",
      icon: Type11,
    },
    {
      id: "12",
      title: "هشدارهای ایمیل",
      des: "لحظه‌ای که یک تغییر مرتبط را تشخیص می‌دهیم، مطلع شویم",
      icon: Type12,
    },
  ];
  return (
    <Flex
      width={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      paddingY={"80px"}
      bgcolor={colorPalette.gray[1]}>
      <Flex paddingY={"40px"}>
        <Typography
          fontWeight={700}
          color={colorPalette.blue[1]}
          fontSize={{ mobile: "28px", tablet: "35px" }}>
          انواع نظارت و تنظیمات
        </Typography>
      </Flex>
      <Flex
        width={"100%"}
        direction={"row"}
        padding={"20px"}
        gap={"30px"}
        flexWrap={"wrap"}
        alignItems={"start"}
        justifyContent={"center"}>
        {types.map((res) => {
          const IconCom = res.icon;
          return (
            <Flex
              width={{ tablet: "23%", mobile: "47%" }}
              key={res.id}
              alignItems={"center"}
              textAlign={"center"}
              gap={"20px"}>
              <Flex width={"50px"}>
                <IconCom />
              </Flex>
              <Typography
                fontWeight={700}
                color={colorPalette.blue[1]}
                fontSize={{ mobile: "16px", tablet: "23px" }}
                lineHeight={{ mobile: "24px", tablet: "36px" }}>
                {res.title}
              </Typography>
              <Typography
                fontSize={{ mobile: "13px", tablet: "16px" }}
                color={colorPalette.gray[3]}>
                {res.des}
              </Typography>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
}
