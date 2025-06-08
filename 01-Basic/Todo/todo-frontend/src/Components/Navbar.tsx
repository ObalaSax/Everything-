import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Logo from "./../assets/Logo.svg";

function Navbar() {
  // Function to handle drawer toggle
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <AppBar
      position="sticky"
      color="primary"
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Box display={"flex"} alignItems="center" gap={2}>
          <Button
            sx={{ display: { md: "none", xs: "flex" } }}
            onClick={handleOpen}
            color="inherit"
          >
            Menu
          </Button>
          <img src={Logo} alt="Todo App" />
          <Typography variant="h6">Noma</Typography>
        </Box>
        <List
          sx={{
            display: { md: "flex", xs: "none" },
            flexDirection: "row",
            gap: 2,
          }}
        >
          <ListItem>
            <ListItemButton>Ha</ListItemButton>
          </ListItem>
        </List>
      </Toolbar>
      {}
      <Drawer
        open={isOpen}
        anchor="left"
        onClose={handleClose}
        sx={{ width: "70%" }}
      >
        <Box>
          <List>
            <ListItem>
              <ListItemButton>Home</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>About</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Contact</ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
