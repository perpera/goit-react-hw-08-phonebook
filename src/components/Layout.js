import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { TopLine } from './TopLine/TopLine';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <TopLine />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};
