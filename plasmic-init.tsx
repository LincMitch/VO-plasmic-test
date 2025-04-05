"use client";

import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { TopNavigation } from "./components/top-navigation";
import { BaseButton as Button } from "@plasmicpkgs/react-aria/skinny/registerButton";

// Ensure PLASMIC is a singleton
let PLASMIC_INSTANCE: ReturnType<typeof initPlasmicLoader> | undefined;

export const PLASMIC = PLASMIC_INSTANCE ??= initPlasmicLoader({
  projects: [
    {
      id: "brxGwrrVaZi8MdDJQRNRHB", // Your project ID
      token: "RxasxPOJLy0VH6TQOAzHImnYdAM6uJFczVpOzhKNiCYe1lBFvGuqsxf4lK32j6pzEDxUzzZV6zOI9ecYoSlmgg", // Your API token
    },
  ],
  preview: true,
});

// Register components
PLASMIC.registerComponent(TopNavigation, {
  name: "TopNavigation",
  displayName: "Top Navigation",
  props: {
    children: {
      type: "slot",
      defaultValue: (
        <Button
          href="/"
          className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          Home
        </Button>
      ),
    },
  },
});

// Disable HMR for this file
if (module.hot) {
  module.hot.accept(() => {
    console.log("HMR disabled for plasmic-init.tsx");
  });
}