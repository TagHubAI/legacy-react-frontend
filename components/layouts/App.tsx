import Navbar from 'components/app/Navbar';
import { Provider } from 'react-redux';
import store from 'redux/store';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Provider store={store}>
      <div className="sm:flex">
        <Navbar />
        <main className="w-full sm:h-screen overflow-scroll">{children}</main>
      </div>
    </Provider>
  );
}
