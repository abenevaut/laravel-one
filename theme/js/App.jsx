'use client'

import { useLocation } from "react-router-dom";
import PiwikPro from '@piwikpro/react-piwik-pro';
import * as Sentry from "@sentry/react";
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { Avatar } from '@abenevaut/tailwindui/src/js/Catalyst/avatar';
import { Dropdown, DropdownButton, DropdownItem, DropdownLabel, DropdownMenu } from '@abenevaut/tailwindui/src/js/Catalyst/dropdown';
import { Navbar, NavbarItem, NavbarLabel, NavbarSection, NavbarDivider, NavbarSpacer } from '@abenevaut/tailwindui/src/js/Catalyst/navbar';
import {
    Sidebar,
    SidebarBody,
    SidebarHeader,
    SidebarItem,
    SidebarLabel,
    SidebarSection,
    SidebarSpacer
} from '@abenevaut/tailwindui/src/js/Catalyst/sidebar';
import logoUrl from '@abenevaut/maskot-2013/dist/app-icon.webp';
import { ThemeProvider } from "@abenevaut/tailwindui/src/js/Providers/ThemeProvider.jsx";
import {SidebarLayout} from "@abenevaut/tailwindui/src/js/Catalyst/sidebar-layout.jsx";

const appEnv = import.meta.env.VITE_APP_ENV || false;
const isProductionEnvironment = 'production' === appEnv || true;

if (isProductionEnvironment) {
  PiwikPro.initialize('2c54d796-5f59-434c-85e2-1381de1d0d07', 'https://abenevaut.piwik.pro');
}

Sentry.init({
  dsn: 'https://ce8b13241096d9f48e86a55e950d9da6@o229053.ingest.us.sentry.io/4508267232296960',
  environment: appEnv,
});

const navItems = [
    { label: 'Home', url: 'index.html' },
    { label: 'Generate GitHub pages', url: 'github-pages.html' },
]

const navFooterItems = [
    { label: 'Support', url: 'https://github.com/abenevaut/opensource/issues?q=is%3Aopen+is%3Aissue+label%3Alaravel-one' },
    { label: 'Changelog', url: 'https://github.com/abenevaut/opensource/releases' },
    { label: 'Portfolio', url: 'https://www.abenevaut.dev/index.html' },
]

function TeamDropdownMenu() {
  return (
    <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">

      <DropdownItem href="/terms.html">
        <DropdownLabel>Terms of services</DropdownLabel>
      </DropdownItem>

      <DropdownItem href="/privacy.html">
        <DropdownLabel>Privacy policy</DropdownLabel>
      </DropdownItem>

    </DropdownMenu>
  )
}

export default function App({ children }) {

  let pathname = useLocation().pathname;

  return (
    <ThemeProvider>
      <SidebarLayout
        className="pb-10 pt-2"
        navbar={
          <Navbar>

            <Dropdown>

              <DropdownButton as={ NavbarItem } className="max-lg:hidden">
                <Avatar src={logoUrl}/>
                <NavbarLabel>Antoine Benevaut</NavbarLabel>
                <ChevronDownIcon/>
              </DropdownButton>

              <TeamDropdownMenu/>

            </Dropdown>

            <NavbarDivider className="max-lg:hidden"/>

            <NavbarSection className="max-lg:hidden">

              { navItems.map(({ label, url }) => (
                <NavbarItem key={ label } href={ url } current={pathname === url}>
                  { label }
                </NavbarItem>
              )) }

            </NavbarSection>

            <NavbarSpacer/>

            {/*<NavbarSection>*/}

            {/*  /!*<NavbarItem href="/search" aria-label="Search">*!/*/}
            {/*  /!*  <MagnifyingGlassIcon/>*!/*/}
            {/*  /!*</NavbarItem>*!/*/}

            {/*  /!*<NavbarItem href="/inbox" aria-label="Inbox">*!/*/}
            {/*  /!*  <InboxIcon/>*!/*/}
            {/*  /!*</NavbarItem>*!/*/}

            {/*  <Dropdown>*/}
            {/*    <DropdownButton as={ NavbarItem }>*/}
            {/*      <Avatar src={logoUrl} square/>*/}
            {/*    </DropdownButton>*/}

            {/*    <DropdownMenu className="min-w-64" anchor="bottom end">*/}

            {/*      <DropdownItem href="/my-profile">*/}
            {/*        <UserIcon/>*/}
            {/*        <DropdownLabel>My profile</DropdownLabel>*/}
            {/*      </DropdownItem>*/}

            {/*      <DropdownItem href="/settings">*/}
            {/*        <Cog8ToothIcon/>*/}
            {/*        <DropdownLabel>Settings</DropdownLabel>*/}
            {/*      </DropdownItem>*/}

            {/*      <DropdownDivider/>*/}

            {/*      <DropdownItem href="/terms">*/}
            {/*        <ShieldCheckIcon/>*/}
            {/*        <DropdownLabel>Privacy policy</DropdownLabel>*/}
            {/*      </DropdownItem>*/}

            {/*      <DropdownItem href="/share-feedback">*/}
            {/*        <LightBulbIcon/>*/}
            {/*        <DropdownLabel>Share feedback</DropdownLabel>*/}
            {/*      </DropdownItem>*/}

            {/*      <DropdownDivider/>*/}

            {/*      <DropdownItem href="/logout">*/}
            {/*        <ArrowRightStartOnRectangleIcon/>*/}
            {/*        <DropdownLabel>Sign out</DropdownLabel>*/}
            {/*      </DropdownItem>*/}

            {/*    </DropdownMenu>*/}
            {/*  </Dropdown>*/}
            {/*</NavbarSection>*/}
          </Navbar>
        }
        sidebar={
          <Sidebar>
            <SidebarHeader>
              <Dropdown>
                <DropdownButton as={ SidebarItem } className="lg:mb-2.5">
                  <Avatar src={ logoUrl }/>
                  <SidebarLabel>Laravel one</SidebarLabel>
                  <ChevronDownIcon/>
                </DropdownButton>
                <TeamDropdownMenu/>
              </Dropdown>
            </SidebarHeader>
            <SidebarBody>
              <SidebarSection>
                { navItems.map(({ label, url }) => (
                  <SidebarItem key={ label } href={ url } current={pathname === url}>
                    { label }
                  </SidebarItem>
                )) }
              </SidebarSection>

                {/*<SidebarSection className="max-lg:hidden">*/}
                {/*    <SidebarHeading>Upcoming Events</SidebarHeading>*/}
                {/*    {events.map((event) => (*/}
                {/*        <SidebarItem key={event.id} href={event.url}>*/}
                {/*            {event.name}*/}
                {/*        </SidebarItem>*/}
                {/*    ))}*/}
                {/*</SidebarSection>*/}

                <SidebarSpacer />

                <SidebarSection>
                    { navFooterItems.map(({ label, url }) => (
                        <SidebarItem key={ label } href={ url } current={pathname === url}>
                            { label }
                        </SidebarItem>
                    )) }
                </SidebarSection>
            </SidebarBody>
          </Sidebar>
        }
      >
        {children}
      </SidebarLayout>
    </ThemeProvider>
  )
}
