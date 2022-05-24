import { Close } from "@mui/icons-material";
import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { lighten } from "polished";
import React from "react";
import { UIContext, useUIContext } from "../../context/ui";
import { DrawerCloseButton } from "../../styles/appbar";
import { Colors } from "../../styles/theme";
function AppDrawer() {
  const { drawerOpen, setDrawerOpen } = useUIContext();
  return (
    <>
      {drawerOpen && (
        <Button
        size="large" 
        sx={{

            position: "absolute",
            top: 0,
            right: "250px",
            zIndex: 1555,
        }}
        onClick={() => setDrawerOpen(false)}>
          <Close
          onClick={() => setDrawerOpen(false)}
          className="testing"
            sx={{
              fontSize: "2.5em",
              color: lighten(0.09, Colors.secondary),
            }}
          />
        </Button>
      )}
      <Drawer open={drawerOpen}>
        <List>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
          <Divider variant="middle" />

          <ListItemButton>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
          <Divider variant="middle" />

          <ListItemButton>
            <ListItemText>About Us</ListItemText>
          </ListItemButton>
          <Divider variant="middle" />

          <ListItemButton>
            <ListItemText>Contact Us</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}

export default AppDrawer;
