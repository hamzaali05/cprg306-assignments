import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div>
    <ul>
    <h1>CPRG 306: Web Development 2 - Assignments</h1>
    <Link href={"./week-2/"}>
    Link to week 2 page
    </Link>
    <li><Link href={"./week-3/"}> Link to week 3 page</Link></li>
    <li><Link href={"./week-4/"}> Link to week 4 page</Link></li>
    <li><Link href={"./week-5/"}> Link to week 5 page</Link></li>
    <li><Link href={"./week-6/"}> Link to week 6 page</Link></li>
    <li><Link href={"./week-7/"}> Link to week 7 page</Link></li>
    </ul>
  </div>
  );
}