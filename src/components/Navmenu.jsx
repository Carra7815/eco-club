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
        <Bars3Icon className="nav-item h-6 w-6" />
      </Button>
      <Popover>
        <Menu className="w-64 rounded bg-amber-50 p-1 pb-3 outline outline-1 outline-dark dark:bg-slate-900 dark:outline-light">
          <Section>
            <Header className="menu-header">Pages</Header>
            <MenuItem className="menu-item" href="/vision">
              Vision
            </MenuItem>
            <MenuItem className="menu-item" href="/beliefs">
              Beliefs
            </MenuItem>
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
