import SideNav from 'components/app/SideNav';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="md:flex">
      <SideNav />
      {children}
    </div>
  );
}
