import Navbar from 'components/app/Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="md:flex">
      <Navbar />
      {children}
    </div>
  );
}
