import React, { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
  });

  const [errors, setErrors] = useState({});
  const [passwordValid, setPasswordValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 비밀번호 유효성 검사
    if (name === 'password') {
      const isValid = value.length >= 8 && /[a-zA-Z]/.test(value) && /\d/.test(value);
      setPasswordValid(isValid);
    }

    // 에러 제거
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // 이메일 유효성 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다.';
    }

    // 비밀번호 유효성 검사
    if (!formData.password) {
      newErrors.password = '비밀번호를 입력해주세요.';
    } else if (!passwordValid) {
      newErrors.password = '비밀번호는 8자 이상, 영문과 숫자를 포함해야 합니다.';
    }

    // 비밀번호 확인
    if (!formData.passwordConfirm) {
      newErrors.passwordConfirm = '비밀번호를 다시 입력해주세요.';
    } else if (formData.password !== formData.passwordConfirm) {
      newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
    }

    // 이름 유효성 검사
    if (!formData.name) {
      newErrors.name = '이름을 입력해주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('다음 단계로:', formData);
      // 다음 단계로 이동 로직
    }
  };

  const handleKakaoLogin = () => {
    console.log('카카오 로그인');
  };

  return (
    <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">
      {/* 단계 표시 */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-[#4CA8FF] text-white rounded-full flex items-center justify-center text-sm font-medium">
            1
          </div>
          <div className="w-12 h-0.5 bg-gray-300 mx-2"></div>
          <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-medium">
            2
          </div>
          <div className="w-12 h-0.5 bg-gray-300 mx-2"></div>
          <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-medium">
            3
          </div>
        </div>
      </div>

      {/* 제목 */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">회원가입</h1>
        <p className="text-gray-500 text-sm">링클에서 다양한 친구를 만나세요</p>
      </div>

      {/* 폼 */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* 이메일 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="이메일"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CA8FF] focus:border-transparent"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <span className="mr-1">✕</span>
              {errors.email}
            </p>
          )}
        </div>

        {/* 비밀번호 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">비밀번호</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="비밀번호"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CA8FF] focus:border-transparent"
          />
          {formData.password && (
            <p
              className={`mt-1 text-sm flex items-center ${passwordValid ? 'text-green-500' : 'text-gray-400'}`}
            >
              <span className="mr-1">{passwordValid ? '✓' : '○'}</span>
              영문, 이의 영문 대소문자, 숫자 조치해 2글자 이상
            </p>
          )}
          {errors.password && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <span className="mr-1">✕</span>
              {errors.password}
            </p>
          )}
        </div>

        {/* 비밀번호 확인 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">비밀번호 확인</label>
          <input
            type="password"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleInputChange}
            placeholder="비밀번호 확인"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CA8FF] focus:border-transparent"
          />
          {errors.passwordConfirm && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <span className="mr-1">✕</span>
              {errors.passwordConfirm}
            </p>
          )}
        </div>

        {/* 이름 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">이름</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="이름을 입력해주세요"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CA8FF] focus:border-transparent"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <span className="mr-1">✕</span>
              {errors.name}
            </p>
          )}
        </div>

        {/* 다음 버튼 */}
        <button
          type="submit"
          className="w-full py-3 bg-[#4CA8FF] text-white rounded-lg font-semibold hover:bg-[#3b8de6] transition-colors mt-6"
        >
          다음
        </button>
      </form>

      {/* 구분선 */}
      <div className="flex items-center my-6">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="px-3 text-sm text-gray-400">간편 회원가입</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      {/* 카카오 로그인 */}
      <button
        type="button"
        onClick={handleKakaoLogin}
        className="w-full py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center justify-center"
      >
        <div className="w-5 h-5 bg-black rounded-sm mr-3 flex items-center justify-center">
          <span className="text-white text-xs font-bold">💬</span>
        </div>
        카카오 로그인
      </button>
    </div>
  );
}
