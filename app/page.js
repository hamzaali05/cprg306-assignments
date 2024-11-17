import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div>
    <h1>CPRG 306: Web Development 2 - Assignments</h1>
    <Link href={"./week-2/"}>
    Link to week 2 page
    </Link>
    <div className="flex flex-col gap-2">
    <Link href={"./week-3/"}> Link to week 3 page</Link>
    <Link href={"./week-4/"}> Link to week 4 page</Link>
    <Link href={"./week-5/"}> Link to week 5 page</Link>
    <Link href={"./week-6/"}> Link to week 6 page</Link>
    <Link href={"./week-7/"}> Link to week 7 page</Link>
    <Link href={"./week-8/"}> Link to week 8 page</Link>
    <Link href={"./week-9/"}> Link to week 9 page</Link>
    </div>
  </div>
  );
}