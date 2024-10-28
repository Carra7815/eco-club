import React from "react";

import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { Section, Header } from "react-aria-components";

function Navmenu() {
  return (
    <MenuTrigger>
      <Button aria-label="Menu" preventFocusOnPress>
        <Bars3Icon className="nav-text-color h-6 w-6" />
      </Button>
      <Popover>
        <Menu className="w-64 rounded bg-slate-950 p-1 pb-3">
          <Section>
            <Header className="no-select cursor-default pl-4 font-bold text-white">
              Us
            </Header>
            <MenuItem className="menu-item" href="/support">
              Support
            </MenuItem>
            <MenuItem className="menu-item" href="/contact">
              Contact
            </MenuItem>
          </Section>
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}

export default Navmenu;
