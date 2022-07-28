import * as Collapsible from '@radix-ui/react-collapsible';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { IoChevronForwardCircleOutline, IoHomeOutline } from 'react-icons/io5';
import logo from 'public/images/logo_white.png';

const CollapsibleContent = ({ children }: { children: React.ReactNode }) => (
  <Collapsible.Content className="data-state-open:animate-fade-in data-state-closed:animate-fade-out">
    {children}
  </Collapsible.Content>
);

export default function SideNav() {
  const [isCollapsed, setCollapse] = useState(false);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) isMounted.current = true;
  }, []);

  return (
    <nav
      className={`flex md:flex-col relative justify-between transition-all duration-200 
      ease-in-out bg-white border-b md:h-screen md:border-r border-gray-200
      ${isCollapsed ? 'md:w-16' : 'md:w-80'}`}
    >
      <Collapsible.Root
        asChild={true}
        open={!isCollapsed}
        onOpenChange={(e) => setCollapse(!e)}
      >
        <>
          <div className="flex items-center p-2 md:border-b border-gray-200">
            <div className="flex-none h-full w-12 aspect-square flex justify-center items-center">
              <div className="flex w-8 bg-black rounded-full">
                <Image
                  src={logo}
                  alt="TagHub Logo"
                  layout="intrinsic"
                  width={'72px'}
                  height={'72px'}
                />
              </div>
            </div>
            <CollapsibleContent>
              <div className="hidden md:block text-xl font-bold tracking-tight">
                TagHub
              </div>
            </CollapsibleContent>
          </div>

          <div className="flex flex-col absolute my-2 top-14 w-screen md:w-full bg-white md:static">
            <Link href="/app">
              <a className="flex items-center md:mx-2 rounded-sm transition-colors hover:bg-gray-100">
                <div className="hidden md:flex flex-none h-full w-12 aspect-square justify-center items-center">
                  <IoHomeOutline />
                </div>
                <CollapsibleContent>
                  <div className="text-sm">Dashboard</div>
                </CollapsibleContent>
              </a>
            </Link>
            <Link href="/workflows">
              <a className="flex items-center md:mx-2 rounded-sm transition-colors hover:bg-gray-100">
                <div className="hidden md:flex flex-none h-full w-12 aspect-square justify-center items-center">
                  <IoHomeOutline />
                </div>
                <CollapsibleContent>
                  <div className="text-sm">Workflows</div>
                </CollapsibleContent>
              </a>
            </Link>
          </div>

          <div className="flex-1"></div>

          <div>
            <Collapsible.Trigger asChild>
              <div className="flex items-center m-2 ">
                <div className="flex-none h-full w-12 aspect-square flex justify-center items-center">
                  <IoChevronForwardCircleOutline />
                </div>
                <CollapsibleContent>
                  <div className="text-sm">Collapse</div>
                </CollapsibleContent>
              </div>
            </Collapsible.Trigger>
          </div>
        </>
      </Collapsible.Root>
    </nav>
  );
}
