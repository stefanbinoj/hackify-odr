"use client"
import * as Avatar from "@radix-ui/react-avatar"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { useState } from "react"
import { IoIosInfinite } from "react-icons/io"
import { MdOutlineMailOutline } from "react-icons/md"
import Component1 from "./component/component1"
import Component2 from "./component/component2"
import Component3 from "./component/component3"
import Dashboard from "./component/dashboard"

const Sidebar = () => {
  const [selected, setSelected] = useState("Dashboard")

  const navigation = [
    {
      href: "javascript:void(0)",
      name: "Dashboard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
          />
        </svg>
      ),
      component: <Dashboard />,
    },
    {
      href: "javascript:void(0)",
      name: "Disputes",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
          />
        </svg>
      ),
      component: <Component1 />,
    },
    {
      href: "javascript:void(0)",
      name: "Inbox",
      icon: <MdOutlineMailOutline size={20} />,
      component: <Component2 />,
    },
    {
      href: "javascript:void(0)",
      name: "Support AI",
      icon: <IoIosInfinite size={25} />,
      component: <Component3 />,
    },
  ]

  const navsFooter = [
    {
      href: "javascript:void(0)",
      name: "Help",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          />
        </svg>
      ),
    },
    {
      href: "javascript:void(0)",
      name: "Settings",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      href: "javascript:void(0)",
      name: "Logout",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>
      ),
    },
  ]

  const renderComponent = () => {
    const selectedItem = navigation.find((item) => item.name === selected)
    return selectedItem ? selectedItem.component : <div>Select a component</div>
  }

  return (
    <div className="">
      <nav className="fixed top-0 left-0 h-full w-20 space-y-8 border-r bg-white">
        <div className="flex h-full flex-col">
          <div className="flex h-20 items-center justify-center px-8">
            <a href="javascript:void(0)" className="flex-none">
              <img src="/images/logo.png" width={35} className="mx-auto" />
            </a>
          </div>
          <div className="flex h-full flex-1 flex-col">
            <ul className="flex-1 px-4 text-sm font-medium">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <a
                    onClick={() => setSelected(item.name)}
                    href={item.href}
                    className="group relative flex items-center justify-center gap-x-2 rounded-lg p-2 text-gray-600 duration-150 hover:bg-gray-50 active:bg-gray-100"
                  >
                    <div className="text-gray-500">{item.icon}</div>
                    <span className="absolute left-14 hidden rounded-md bg-gray-800 p-1 px-1.5 text-xs whitespace-nowrap text-white duration-150 group-hover:inline-block group-focus:hidden">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <ul className="px-4 pb-4 text-sm font-medium">
                {navsFooter.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="group relative flex items-center justify-center gap-x-2 rounded-lg p-2 text-gray-600 duration-150 hover:bg-gray-50 active:bg-gray-100"
                    >
                      <div className="text-gray-500">{item.icon}</div>
                      <span className="absolute left-14 hidden rounded-md bg-gray-800 p-1 px-1.5 text-xs whitespace-nowrap text-white duration-150 group-hover:inline-block group-focus:hidden">
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="relative border-t px-4 py-4">
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger className="outline-none">
                    <Avatar.Root>
                      <Avatar.Image
                        className="flex h-12 w-12 cursor-pointer items-center gap-x-4 rounded-full ring-gray-800 ring-offset-2 duration-150 focus:ring-2"
                        src="/images/kalki.png"
                        alt="vienna"
                      />
                      <Avatar.Fallback
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-sm font-medium text-white"
                        delayMs={600}
                      >
                        VI
                      </Avatar.Fallback>
                    </Avatar.Root>
                  </DropdownMenu.Trigger>

                  <DropdownMenu.Portal>
                    <DropdownMenu.Content className="absolute bottom-4 left-10 w-64 rounded-lg border bg-white p-2 text-sm text-gray-600 shadow-md">
                      <span className="block p-2 text-gray-500/80">
                        vienna@gmail.com
                      </span>
                      <DropdownMenu.Item asChild className="outline-none">
                        <a
                          href="/dashboard"
                          className="block w-full rounded-md p-2 text-left duration-150 hover:bg-gray-50 active:bg-gray-100"
                        >
                          Dashboard
                        </a>
                      </DropdownMenu.Item>
                      <div className="relative rounded-md duration-150 hover:bg-gray-50 active:bg-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="pointer-events-none absolute inset-y-0 right-1 my-auto h-4 w-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <select className="w-full cursor-pointer appearance-none bg-transparent p-2 outline-none">
                          <option disabled selected>
                            Theme
                          </option>
                          <option>Dark</option>
                          <option>Light</option>
                        </select>
                      </div>
                      <DropdownMenu.Item asChild className="outline-none">
                        <button className="block w-full rounded-md p-2 text-left duration-150 hover:bg-gray-50 active:bg-gray-100">
                          Logout
                        </button>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="ml-64 w-full p-8">
        {/* Display the component based on the selected item */}
        {renderComponent()}
      </div>
    </div>
  )
}

export default Sidebar
