"use client"
// import { Button, Popover, Menu, Item } from "@plasmicpkgs/react-aria"
import { BaseButton as Button } from "@plasmicpkgs/react-aria/skinny/registerButton";
import { BasePopover as Popover } from "@plasmicpkgs/react-aria/skinny/registerPopover";
// import { BaseMenu as Menu } from "@plasmicpkgs/react-aria/skinny/registerMenu";
// import { BaseItem as Item } from "@plasmicpkgs/react-aria/skinny/registerItem";
import {
  IconHome,
  IconInfoCircle,
  IconPhone,
  IconBrandGithub,
  IconChevronDown,
  IconMenu2,
  IconX,
} from "@plasmicpkgs/tabler/icons-react"
import { useState } from "react"

export function TopNavigation({
  logo = "Company",
  menuItems = [
    { label: "Home", href: "/", icon: "home" },
    { label: "About", href: "/about", icon: "info" },
    { label: "Services", href: "/services", icon: "services" },
    { label: "Contact", href: "/contact", icon: "contact" },
  ],
  solutionsItems = [
    { key: "analytics", label: "Analytics" },
    { key: "engagement", label: "Engagement" },
    { key: "security", label: "Security" },
    { key: "integrations", label: "Integrations" },
  ],
  resourcesItems = [
    { key: "docs", label: "Documentation" },
    { key: "guides", label: "Guides" },
    { key: "api", label: "API Status" },
    { key: "pricing", label: "Pricing" },
  ],
  showSignIn = true,
  primaryColor = "indigo",
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Map icon names to Tabler icons
  const getIcon = (iconName) => {
    switch (iconName) {
      case "home":
        return <IconHome size={20} />
      case "info":
        return <IconInfoCircle size={20} />
      case "contact":
        return <IconPhone size={20} />
      case "services":
      default:
        return <IconBrandGithub size={20} />
    }
  }

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-900">{logo}</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4 items-center">
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  elementType="a"
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                >
                  {getIcon(item.icon)}
                  {item.label}
                </Button>
              ))}

              {/* Solutions Dropdown */}
              <Popover
                trigger={
                  <Button className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
                    Solutions
                    <IconChevronDown size={16} />
                  </Button>
                }
              >
                <Menu
                  aria-label="Solutions"
                  className="w-48 p-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  onAction={(key) => console.log(`Selected ${key}`)}
                >
                  {solutionsItems.map((item) => (
                    <Item key={item.key} className="text-gray-700 hover:bg-gray-100 rounded px-2 py-2 text-sm">
                      {item.label}
                    </Item>
                  ))}
                </Menu>
              </Popover>

              {/* Resources Dropdown */}
              <Popover
                trigger={
                  <Button className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
                    Resources
                    <IconChevronDown size={16} />
                  </Button>
                }
              >
                <Menu
                  aria-label="Resources"
                  className="w-48 p-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  onAction={(key) => console.log(`Selected ${key}`)}
                >
                  {resourcesItems.map((item) => (
                    <Item key={item.key} className="text-gray-700 hover:bg-gray-100 rounded px-2 py-2 text-sm">
                      {item.label}
                    </Item>
                  ))}
                </Menu>
              </Popover>
            </div>
          </div>

          {/* Sign In/Up Buttons */}
          {showSignIn && (
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Button
                elementType="a"
                href="/signin"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign in
              </Button>
              <Button
                elementType="a"
                href="/signup"
                className={`ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-${primaryColor}-600 hover:bg-${primaryColor}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${primaryColor}-500`}
              >
                Sign up
              </Button>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <Button
              onPress={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <IconX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <IconMenu2 className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Button
                key={item.label}
                elementType="a"
                href={item.href}
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
              >
                {getIcon(item.icon)}
                {item.label}
              </Button>
            ))}

            <Popover
              trigger={
                <Button className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-1 w-full justify-between">
                  <span>Solutions</span>
                  <IconChevronDown size={16} />
                </Button>
              }
            >
              <Menu
                aria-label="Solutions"
                className="w-full p-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                onAction={(key) => console.log(`Selected ${key}`)}
              >
                {solutionsItems.map((item) => (
                  <Item key={item.key} className="text-gray-700 hover:bg-gray-100 rounded px-2 py-2 text-sm">
                    {item.label}
                  </Item>
                ))}
              </Menu>
            </Popover>

            <Popover
              trigger={
                <Button className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-1 w-full justify-between">
                  <span>Resources</span>
                  <IconChevronDown size={16} />
                </Button>
              }
            >
              <Menu
                aria-label="Resources"
                className="w-full p-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                onAction={(key) => console.log(`Selected ${key}`)}
              >
                {resourcesItems.map((item) => (
                  <Item key={item.key} className="text-gray-700 hover:bg-gray-100 rounded px-2 py-2 text-sm">
                    {item.label}
                  </Item>
                ))}
              </Menu>
            </Popover>
          </div>

          {showSignIn && (
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <Button
                    elementType="a"
                    href="/signin"
                    className="block w-full px-4 py-2 text-center text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    Sign in
                  </Button>
                </div>
                <div className="mt-3">
                  <Button
                    elementType="a"
                    href="/signup"
                    className={`block w-full px-4 py-2 text-center text-sm font-medium text-white bg-${primaryColor}-600 hover:bg-${primaryColor}-700 rounded-md shadow-sm`}
                  >
                    Sign up
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  )
}

