import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('로그인 시도:', { email, password });
  };

  const handleKakaoLogin = () => {
    console.log('카카오 로그인');
  };

  return (
    <div className="w-full max-w-6xl grid grid-cols-2 gap-16">
      <div className="flex items-center justify-start">
        <h1 className="text-8xl font-extrabold text-slate-700 leading-none">Linkle</h1>
      </div>

      <div className="flex justify-end">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">로그인</h2>

          <form onSubmit={onSubmit} noValidate className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일"
                className="w-full h-12 px-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CA8FF] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">비밀번호</label>
              <input
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                className="w-full h-12 px-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CA8FF] focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-[#4CA8FF] text-white rounded-md font-semibold hover:bg-[#3b8de6] transition-colors"
            >
              로그인
            </button>

            <div className="text-center text-xs text-gray-500 py-2 space-x-2">
              <Link to="/signup" className="hover:underline">
                회원가입
              </Link>
              <span>|</span>
              <Link to="/find-id" className="hover:underline">
                아이디 찾기
              </Link>
              <span>|</span>
              <Link to="/find-password" className="hover:underline">
                비밀번호 찾기
              </Link>
            </div>

            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300" />
              <span className="px-3 text-sm text-gray-400">간편 로그인</span>
              <div className="flex-grow border-t border-gray-300" />
            </div>

            <button
              type="button"
              onClick={handleKakaoLogin}
              className="w-full h-14 bg-yellow-400 text-black rounded-md font-semibold hover:bg-yellow-500 transition-colors flex items-center justify-center"
              aria-label="카카오 로그인"
            >
              <span className="w-4 h-4 bg-black rounded-full mr-3" aria-hidden="true" />
              카카오 로그인
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
