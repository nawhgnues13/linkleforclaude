import { createBrowserRouter } from 'react-router-dom';
import { MainLayout, AuthLayout } from '@components/layout';
import Home from '@pages/Home/Home';

// 임시 컴포넌트들
const TempLogin = () => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-center mb-4">로그인</h1>
    <p className="text-center text-gray-600">로그인 페이지 준비중</p>
  </div>
);

const router = createBrowserRouter([
  // 메인 레이아웃을 사용하는 페이지들 (Header + Footer 있음)
  {
    path: '/',
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: '/community',
    element: (
      <MainLayout>
        <div className="p-8 text-center">커뮤니티 페이지 (준비중)</div>
      </MainLayout>
    ),
  },
  {
    path: '/gallery',
    element: (
      <MainLayout>
        <div className="p-8 text-center">갤러리 페이지 (준비중)</div>
      </MainLayout>
    ),
  },

  // 인증 레이아웃을 사용하는 페이지들 (Header + Footer 없음)
  {
    path: '/login',
    element: (
      <AuthLayout>
        <TempLogin />
      </AuthLayout>
    ),
  },
]);

export default router; // export { router }가 아닌 export default
