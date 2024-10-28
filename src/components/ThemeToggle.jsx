import React from "react";
import { Button } from "react-aria-components";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

function ThemeToggle() {
  let [isDark, setDark] = React.useState(false);

  return (
    <Button
      aria-label="Icon only"
      onPress={() => setDark(document.documentElement.classList.toggle("dark"))}
      preventFocusOnPress
    >
      {isDark ? (
        <SunIcon className="nav-text-color h-5 w-5" />
      ) : (
        <MoonIcon className="nav-text-color h-5 w-5" />
      )}
    </Button>
  );
}

export default ThemeToggle;
