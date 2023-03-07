import AuthHeader from "./AuthHeader";
import Link from "next/link";

const Header = () => {
  return (
    <div className="min-w-full px-6 md:px-0 bg-white h-16 border border-b-2 border-gray-100 flex justify-center">
      <div className="max-w-screen-lg w-full flex justify-between items-center">
        <Link href="/">
          <h1 className="text-slate-700 font-bold text-lg">T3 Blog</h1>
        </Link>
        <AuthHeader />
      </div>
    </div>
  )
}

export default Header;
