import Header from './Header';
import Footer from './Footer';
import MyPageSidebar from './MyPageSidebar';

const MyPageLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-6 py-8 w-full">
        <div className="flex gap-8">
          {/* 왼쪽 사이드바 메뉴 */}
          <MyPageSidebar />

          {/* 오른쪽 메인 컨텐츠 영역 */}
          <div className="flex-1">{children}</div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyPageLayout;
