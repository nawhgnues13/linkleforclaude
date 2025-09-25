import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-7xl mx-auto">{/* 네비게이션 메뉴 */}</div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
