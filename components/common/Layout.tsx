import Navbar from 'components/common/Navbar';
import { Provider } from 'react-redux';
import store from 'redux/store';
import cx from 'clsx';
import SearchBar from './SearchBar';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('mocks');
}

const variants = {
  default: 'mx-auto',
};

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  padded?: boolean;
}

export default function Layout({
  children,
  variant = 'default',
  padded = true,
}: LayoutProps) {
  return (
    <Provider store={store}>
      <div className="bg-gray-50 flex min-h-screen">
        <Navbar />
        <div
          className="hidden sm:block shrink-0 data-layout-compact:sm:w-16 sm:w-64
          h-14 sm:h-full bg-black transition-all ease duration-300"
        />
        <main
          className={cx(
            `xl:max-w-7xl w-full justify-center mx-auto`,
            variants[variant],
            padded && 'px-6 sm:px-8 py-4'
          )}
        >
          <SearchBar />
          {children}
        </main>
      </div>
    </Provider>
  );
}
