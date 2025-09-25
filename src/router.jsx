import { createBrowserRouter } from 'react-router-dom';
import { MainLayout, AuthLayout } from './components/layout';
import Home from './pages/Home/Home';

// 임시 컴포넌트들
const TempLogin = () => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-center mb-4">로그인</h1>
    <p className="text-center text-gray-600">로그인 페이지 준비중</p>
  </div>
);

const TempCommunity = () => (
  <div className="max-w-6xl mx-auto px-6 py-8">
    <h1 className="text-3xl font-bold mb-6">커뮤니티</h1>
    <p className="text-gray-600">커뮤니티 페이지 준비중입니다.</p>
  </div>
);

const TempGallery = () => (
  <div className="max-w-6xl mx-auto px-6 py-8">
    <h1 className="text-3xl font-bold mb-6">갤러리</h1>
    <p className="text-gray-600">갤러리 페이지 준비중입니다.</p>
  </div>
);

const TempCommunityCreate = () => (
  <div className="max-w-4xl mx-auto px-6 py-8">
    <h1 className="text-3xl font-bold mb-6">동호회 만들기</h1>
    <p className="text-gray-600">동호회 생성 페이지 준비중입니다.</p>
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
        <TempCommunity />
      </MainLayout>
    ),
  },
  {
    path: '/community/create',
    element: (
      <MainLayout>
        <TempCommunityCreate />
      </MainLayout>
    ),
  },
  {
    path: '/gallery',
    element: (
      <MainLayout>
        <TempGallery />
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

export default router;
