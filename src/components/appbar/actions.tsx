import { Favorite, Person, ShoppingCart } from "@mui/icons-material";
import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import React from "react";
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  MyList,
} from "../../styles/appbar";
import { Colors } from "../../styles/theme";

export default function Actions({ matches }: { matches: boolean }) {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;
  return (
    <Component>
      <MyList type="row">
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches ? Colors.secondary : null,
            }}
          >
            <ShoppingCart />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches ? Colors.secondary : null,
            }}
          >
            <Favorite />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches ? Colors.secondary : null,
            }}
          >
            <Person />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
    </Component>
  );
}
