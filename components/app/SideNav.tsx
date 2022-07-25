import * as Collapsible from '@radix-ui/react-collapsible';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { IoChevronForwardCircleOutline, IoHomeOutline } from 'react-icons/io5';

export default function SideNav() {
  const [isCollapsed, setCollapse] = useState(false);
  const [hasCollapsed, setHasCollapsed] = useState(false);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted && isCollapsed) setHasCollapsed(true);
  }, [isCollapsed, isMounted]);

  useEffect(() => {
    if (isMounted.current) isMounted.current = true;
  }, []);

  return (
    <nav
      className={`flex flex-col justify-between transition-all duration-300 
      ease-in-out bg-white h-screen border-r border-gray-200
      ${isCollapsed ? 'w-16' : 'w-80'}`}
    >
      <Collapsible.Root
        asChild={true}
        open={!isCollapsed}
        onOpenChange={(e) => setCollapse(!e)}
      >
        <>
          <div>
            <div className="flex items-center p-2 border-b border-gray-200">
              <div className="flex-none h-full w-12 aspect-square flex justify-center items-center">
                Logo
              </div>
              <Collapsible.Content>
                <div
                  className={`text-xl font-bold tracking-tight
                  ${hasCollapsed ? 'animate-fade-in' : ''}`}
                >
                  TagHub
                </div>
              </Collapsible.Content>
            </div>
            <Link href="/app">
              <a className="flex items-center m-2 rounded-sm transition-colors hover:bg-gray-100">
                <div className="flex-none h-full w-12 aspect-square flex justify-center items-center">
                  <IoHomeOutline />
                </div>
                <Collapsible.Content>
                  <div
                    className={`text-sm ${
                      hasCollapsed ? 'animate-fade-in' : ''
                    }`}
                  >
                    Dashboard
                  </div>
                </Collapsible.Content>
              </a>
            </Link>
          </div>

          <div>
            <Collapsible.Trigger asChild>
              <div className="flex items-center m-2 ">
                <div className="flex-none h-full w-12 aspect-square flex justify-center items-center">
                  <IoChevronForwardCircleOutline />
                </div>
                <Collapsible.Content>
                  <div
                    className={`text-sm ${
                      hasCollapsed ? 'animate-fade-in' : ''
                    }`}
                  >
                    Collapse
                  </div>
                </Collapsible.Content>
              </div>
            </Collapsible.Trigger>
          </div>
        </>
      </Collapsible.Root>
    </nav>
  );
}
