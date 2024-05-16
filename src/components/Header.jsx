import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <header className="px-2 py-4  flex justify-center gap-8 shadow-md font-Cafe24Shiningstar  bg-gray-600">
      <Link
        className={`link-style ${
          location.pathname === "/" &&
          " py-2 px-3  bg-yellow-600 rounded-lg text-white  "
        }`}
        to="/"
      >
        질문하기
      </Link>
      <Link
        className={`link-style ${
          location.pathname === "/chat-list" &&
          "py-2 px-3  bg-yellow-600 rounded-lg text-white  "
        }`}
        to="/chat-list"
      >
        내 질문리스트
      </Link>
    </header>
  );
};

export default Header;
