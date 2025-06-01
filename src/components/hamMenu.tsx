import * as React from "react";
import Box from "@mui/material/Box";
import CloudIcon from "@mui/icons-material/Cloud";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Flex, Button } from "@/libs/primitives";
import { colorPalette } from "@/theme";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export default function HamMenu({sx}:{sx:string}) {
  const itemList = [
  { id: 1, text: "موارد استفاده", href: "/useCase" },
    { id: 2, text: "قیمت گذاری", href: "/pricing" },
    { id: 3, text: "درباره ما", href: "/about" },
    { id: 4, text: "بلاگ", href: "/blog" },
  ];

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button
      
        sx={{ color: sx, zIndex: 1301 ,padding: "0 !important"}}
        onClick={() => setOpen(!open)}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </Button>

      {open && (
        <Box
          sx={{
            position: "absolute",
            top: "100%", 
            left: 0,
            width: "100%",
            bgcolor: "white",
            zIndex: 1300,
            boxShadow: 3,
            padding: "10px 40px",
            background:colorPalette.turquoise[1]
            
          }}
        >
          <List>
            {itemList.map((e) => (
              <ListItem
                key={e.id}
                disablePadding
                sx={{
                  color: colorPalette.blue[1],
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: colorPalette.turquoise[2],
                    bgcolor:"transparent"
                  },
                }}
              >
                <ListItemButton
                  component="a"
                  href={e.href}
                  sx={{
                    color: "inherit",
                    backgroundColor: "transparent",
                    "&:hover": {
                    color: colorPalette.turquoise[2],
                    bgcolor:"transparent"
                  },
                  }}
                >
                  <ListItemText primary={e.text} sx={{
                  color: colorPalette.blue[1],
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: colorPalette.turquoise[2],
                    bgcolor:"transparent"
                  },
                }} />
                </ListItemButton>
              </ListItem>
            ))}

            <Divider sx={{ my: 2 }} />

            <Flex gap={"18px"} flexDirection={"column"}>
              <Button variant="primary-outlined">ورود</Button>
              <Button variant="primary-contained">
                رایگان امتحان کنید
                <Flex paddingX={"10px"}>
                  <CloudIcon />
                </Flex>
              </Button>
            </Flex>
          </List>
        </Box>
      )}
    </>
  );
}
