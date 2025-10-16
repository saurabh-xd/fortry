import { Calendar, ChevronUp, Home, Inbox, Search, Settings, User2 } from 'lucide-react';
import React from 'react'


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import Link from 'next/link';
import Image from 'next/image';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

function AppSidebar() {
  return (
    <div>
      <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
        <Link href="/">
        <Image src='/vercel.svg' alt='logo' width={20} height={20}/>
        <span>dash dev</span>
        </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator/>
      <SidebarContent>
        <SidebarGroup >
          <SidebarGroupLabel>Application</SidebarGroupLabel>
           <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup >
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <User2/> john doe <ChevronUp className='ml-auto'/>
              </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Setting</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
    </div>
  )
}

export default AppSidebar



