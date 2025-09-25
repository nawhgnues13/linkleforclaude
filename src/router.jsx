import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@components/layout/MainLayout';
import AuthLayout from '@components/layout/AuthLayout';
// import ProfileLayout from '@components/layout/ProfileLayout';
import Home from '@pages/Home/Home';

// 임시 컴포넌트들 - 나중에 실제 페이지로 교체
const TempLogin = () => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-center mb-4">로그인</h1>
    <p className="text-center text-gray-600">로그인 페이지 준비중</p>
  </div>
);

const router = createBrowserRouter([
  // 메인 레이아웃 - 헤더/푸터 있는 일반 페이지들
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

  // 인증 레이아웃 - 로그인/회원가입 (헤더/푸터 없음)
  {
    path: '/login',
    element: (
      <AuthLayout>
        <TempLogin />
      </AuthLayout>
    ),
  },

  // 나중에 실제 페이지들을 만들면 이런 식으로 추가
  // {
  //   path: '/login',
  //   element: (
  //     <AuthLayout>
  //       <Login />  // 실제 Login 컴포넌트를 만든 후 import해서 사용
  //     </AuthLayout>
  //   ),
  // },
]);

export default router;
