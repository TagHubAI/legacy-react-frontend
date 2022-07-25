import SideNav from 'components/app/SideNav';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex">
      <SideNav />
      <main className="bg-gray-50 w-full">{children}</main>
    </div>
  );
}
