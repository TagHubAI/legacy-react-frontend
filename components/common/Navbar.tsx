import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  IoChevronForwardOutline,
  IoGridOutline,
  IoLayersOutline,
  IoMenuOutline,
  IoServerOutline,
} from 'react-icons/io5';
import cx from 'clsx';
import logo from 'public/images/logo_white.png';

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

const NavLinkContent = ({ className, children }: ContentProps) => (
  <div
    className={cx(
      `data-layout-compact:mx-2 mx-1 transition-all duration-300
    data-layout-compact:opacity-0 compact:invisible overflow-hidden`,
      className
    )}
  >
    {children}
  </div>
);

interface NavLinkProps {
  title: string;
  icon: React.ReactElement;
  href: string;
}

const NavLink = ({ title, icon, href }: NavLinkProps) => {
  const Icon = icon.type;
  const iconArgs = {
    className: 'icons stroke-[1.5rem]',
    size: '24',
    title: `${title} icon`,
  };

  return (
    <Link href={href}>
      <a className="flex items-center px-2 sm:px-0 sm:mx-2 rounded-sm transition-colors hover:bg-gray-100">
        <div className="flex flex-none h-full w-12 aspect-square justify-center items-center">
          <Icon {...iconArgs} />
        </div>
        <NavLinkContent className="text-sm font-medium">{title}</NavLinkContent>
      </a>
    </Link>
  );
};

export default function SideNav() {
  const [isCollapsed, setCollapsed] = useState(false);
  const [isCollapsedMobile, setCollapsedMobile] = useState(false);

  const ref = useRef<HTMLElement>(null);
  const linkGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layout = localStorage.getItem('layout');
    if (
      layout === 'compact' &&
      document.body.getAttribute('data-layout') === 'compact'
    )
      setCollapsed(true);

    if (window.matchMedia('(max-width: 639px)').matches) {
      setDesktopNavCollapse(false);
    }

    if (ref.current)
      ref.current.classList.add('transition-all', 'duration-200', 'ease');
  }, []);

  useEffect(() => {
    if (linkGroupRef.current) {
      if (isCollapsedMobile) linkGroupRef.current.classList.remove('hidden');
      else linkGroupRef.current.classList.add('hidden');
    }
  }, [isCollapsedMobile]);

  const setDesktopNavCollapse = (value: boolean) => {
    setCollapsed(value);
    value && document.body.setAttribute('data-layout', 'compact');
    !value && document.body.setAttribute('data-layout', 'default');
    localStorage.setItem('layout', value ? 'compact' : 'default');
  };

  return (
    <nav
      ref={ref}
      className="flex fixed top-0 shrink-0 sm:flex-col w-full justify-between sm:h-screen bg-white
      border-b sm:border-r border-gray-200 data-layout-compact:sm:w-16 sm:w-64"
    >
      <>
        <div className="flex items-center px-2 py-1 sm:pt-2">
          <div className="flex-none h-full w-12 aspect-square flex justify-center items-center">
            <Link href="/">
              <a className="flex w-8 bg-black rounded-full">
                <Image
                  src={logo}
                  alt="TagHub Logo"
                  layout="intrinsic"
                  width={'72px'}
                  height={'72px'}
                />
              </a>
            </Link>
          </div>
          <NavLinkContent className="text-xl font-bold tracking-tight">
            TagHub
          </NavLinkContent>
        </div>

        <div
          ref={linkGroupRef}
          className="hidden sm:flex sm:z-0 -z-10 absolute sm:static flex-col top-14 py-2 sm:py-0 sm:my-2
          bg-white w-screen sm:w-full border-b border-t shadow-lg sm:shadow-none sm:border-none
           border-b-gray-300"
        >
          <NavLink title="Dashboard" href="/" icon={<IoGridOutline />} />

          <NavLink
            title="Workflows"
            href="/workflows"
            icon={<IoLayersOutline />}
          />

          <NavLink
            title="Datasets"
            href="/datasets"
            icon={<IoServerOutline />}
          />
        </div>

        <div className="flex-1"></div>

        <div className="hidden sm:flex flex-col mx-2 my-1 sm:my-2 ">
          <button
            className="flex items-center transition-colors hover:bg-gray-100 rounded-sm"
            onClick={() => setDesktopNavCollapse(!isCollapsed)}
          >
            <div className="flex-none h-full w-12 aspect-square flex justify-center items-center">
              <IoChevronForwardOutline
                title="Expand/collapse sidebar icon"
                size="16"
                className="icons stroke-[2.25rem]"
              />
            </div>
            <NavLinkContent className="text-sm font-medium">
              Collapse
            </NavLinkContent>
          </button>
        </div>

        <button
          className="flex sm:hidden items-center mx-2 my-1 sm:my-2 transition-colors rounded-sm"
          onClick={() => setCollapsedMobile(!isCollapsedMobile)}
        >
          <div className="flex-none h-full w-12 aspect-square flex justify-center items-center">
            <IoMenuOutline
              title="Expand/collapse sidebar icon"
              size="28"
              className="icons stroke-[1.5rem]"
            />
          </div>
        </button>
      </>
    </nav>
  );
}
