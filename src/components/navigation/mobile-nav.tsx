import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { navItems } from "@/common/data";
import { NavLink } from "./menubar";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Icon from "../../assets/OG_logo.png";
import { Link } from "react-router";

type Anchor = "top";

interface INavBarMobile {
  colortheme: "light" | "dark";
}

export default function NavBarMobile({ colortheme }: INavBarMobile) {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  interface IListProps {
    anchor: Anchor;
    colortheme: "light" | "dark";
  }

  const list = ({ anchor, colortheme }: IListProps) => (
    <Box
      sx={{ width: anchor === "top" ? "auto" : 250, padding: 5 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className={cn("flex flex-col gap-5")}>
          <div className="flex flex-row items-center justify-between">
            <Link to="/" className="text-white text-2xl font-bold">
              <img src={Icon} alt="" className="w-10 h-10" />
            </Link>
            <Button>
              <X
                className={cn(
                  colortheme === "light" ? "text-white" : "text-gray-800"
                )}
              />
            </Button>
          </div>
          <div
            className={cn(
              "flex flex-col gap-5 items-center justify-center pt-6"
            )}
          >
            {navItems.map((item, index) => (
              <div className="h-8">
                <NavLink key={index} href={item.link} colortheme={colortheme}>
                  {item.label}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      {(["top"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Menu
              className={cn(
                colortheme === "light" ? "text-white" : "text-gray-800"
              )}
            />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list({ anchor, colortheme })}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
