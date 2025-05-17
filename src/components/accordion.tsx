"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { colorPalette } from "@/theme";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: `none`,

  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "none",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(45deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "#f2fafc",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "none",
  backgroundColor: "#f2fafc",
}));

export default function AccordionPower() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const Item = [
    {
      id: "1",
      aria: "panel1d-content",
      panel: "panel1d-header",
      title: "پشتیبانی حق بیمه",
      des: "همه طرح‌های ممتاز ما، پشتیبانی تخصصی و اختصاصی از کارکنان واقعی <strong> وب پویش</strong> مستقر در ایالات متحده ارائه می‌کنند.  ما می توانیم به شما کمک کنیم تا از قدرت <strong> وب پویش</strong> برای حل چالش های نظارتی خود و مقابله با همه موارد استفاده خود استفاده کنید.",
    },
    {
      id: "2",
      aria: "panel2d-content",
      panel: "panel2d-header",
      title: "جریان اعلان ها",
      des: "علاوه بر اعلان‌های ایمیل بلادرنگ، مشاهده تغییرات وب‌سایتی که برای شما مهم‌تر است را در یک جریان فعالیت آسان می‌کنیم.  عمیق‌تر تمرین کنید تا جزئیات بیشتری به دست آورید و ببینید دقیقاً چه تغییراتی باعث هشدار شما شده است.  تغییرات وب سایت را بررسی کنید و به راحتی قبل و بعد را مقایسه کنید.",
    },
    {
      aria: "panel3d-content",
      id: "3",
      panel: "panel3d-header",
      title: "تشخیص و هشدارهای مبتنی بر شرایط قدرتمند",
      des: "سیستم نظارت درجه سازمانی ما، وب سایت ها را برای تغییراتی که برای شما مهم است نظارت می کند. معیارهای مبتنی بر شرایط را برای دریافت هشدارهای تغییر صفحه وب تنظیم کنید. ردیابی جمع یا تفریق کلمات کلیدی، کپی، تصاویر، قطعه کد و موارد دیگر را انتخاب کنید. تغییرات را به محض وقوع ردیابی کنید.",
    },
    {
      aria: "panel4d-content",
      id: "4",
      title: "شرایط نامحدود",
      panel: "panel4d-header",
      des: "همه برنامه‌های پریمیوم ما به کاربران ما اجازه می‌دهند تا تعداد نامحدودی شرایط ردیابی و هشدار ایجاد کنند. مانیتورهای خود را در پوشه‌ها سازماندهی کنید و به راحتی به آخرین اعلان‌های ردیابی تغییرات خود رجوع کنید - همه در یک مکان.",
    },
    {
      aria: "panel5d-content",
      id: "5",
      panel: "panel5d-header",
      title: "  نظارت و بایگانی هر وب سایت",
      des: "موتور قدرتمند مانیتور تغییر وب سایت ما تغییرات در هر وب سایت عمومی را تشخیص می دهد. ما نظارت را برعهده خواهیم داشت و هر زمان که تغییراتی را که با کلمات کلیدی یا مجموعه معیارهای سفارشی شما مطابقت داشت، به شما اطلاع خواهیم داد. مانیتورهای خود را برنامه ریزی کنید، سطح حساسیت را تعیین کنید و معیارهای هشدار تغییر خود را مشخص کنید. شما اولین کسی خواهید بود که متوجه می شوید چه زمانی تغییری ایجاد شده است که برای شما مهم است.",
    },
  ];
  return (
    <div>
      {Item.map((res) => (
        <Accordion
          key={res.id}
          expanded={expanded === `panel${res.id}`}
          onChange={handleChange(`panel${res.id}`)}>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls={res.aria}
            id={res.panel}>
            <Typography
              fontSize={"18px"}
              fontWeight={600}
              component="span"
              style={{ paddingRight: "8px" }}
              color={colorPalette.blue[1]}>
              {res.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              color={colorPalette.gray[3]}
              fontSize={"16px"}
              style={{ padding: "15px 20px" }}
              component="div"
              dangerouslySetInnerHTML={{ __html: res.des }}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
