"use client"

import { useEffect, useState } from "react"
import { IoIosInfinite } from "react-icons/io"
import { MdOutlineMailOutline } from "react-icons/md"

import AIChat from "./components/askAI"
import Default from "./components/home"
import Inbox from "./components/inbox"
import History from "./components/status"

const Sidebar = () => {
  const [selected, setSelected] = useState("Home")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true) // This will be true on the client side
  }, [])

  if (!isClient) {
    return <div>Loading...</div> // Instead of returning null, show a placeholder.
  }

  const navigation = [
    {
      href: "javascript:void(0)",
      name: "Home",
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
      component: <Default />, // Component for Overview
    },
    {
      href: "javascript:void(0)",
      name: "Status",
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
      component: <History />, // Component for Integration
    },
    {
      href: "javascript:void(0)",
      name: "Inbox",
      icon: <MdOutlineMailOutline size={20} />,
      component: <Inbox />, // Component for Plans
    },
    {
      href: "javascript:void(0)",
      name: "Ask AI",
      icon: <IoIosInfinite size={20} />,
      component: <AIChat />,
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
    <div className="flex h-full">
      <nav className="fixed top-0 left-0 h-full w-full space-y-8 border-r bg-white sm:w-80">
        <div className="flex h-full flex-col">
          <div className="flex h-20 items-center px-8">
            <a href="javascript:void(0)" className="flex-none">
              <img src="/images/logo.png" width={40} className="mx-auto" />
            </a>
            <h1 className="text-bold ml-4 text-2xl text-orange-500">RESOLV</h1>
          </div>
          <div className="flex h-full flex-1 flex-col overflow-auto">
            <ul className="flex-1 px-4 text-sm font-medium">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="flex items-center gap-x-2 rounded-lg p-2 text-gray-600 duration-150 hover:bg-gray-50 active:bg-gray-100"
                    onClick={() => {
                      setSelected(item.name)
                    }}
                  >
                    <div className="text-gray-500">{item.icon}</div>
                    {item.name}
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
                      className="flex items-center gap-x-2 rounded-lg p-2 text-gray-600 duration-150 hover:bg-gray-50 active:bg-gray-100"
                    >
                      <div className="text-gray-500">{item.icon}</div>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="border-t px-4 py-4">
                <div className="flex items-center gap-x-4">
                  <img
                    src="/images/user.png"
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <span className="block text-sm font-semibold text-gray-700">
                      Karthik S
                    </span>
                    <a
                      href="javascript:void(0)"
                      className="mt-px block text-xs text-gray-600 hover:text-indigo-600"
                    >
                      View profile
                    </a>
                  </div>
                </div>
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
