import Link from "next/link";
export default function Navbar() {
  return (
    <nav class=" bg-blue-950 flex p-5">
      <div class="text-white ">
        <Link href="/" class="">
          ||| AIWA
        </Link>
      </div>
      <div class="text-white flex-grow text-right text-base font-bold space-x-5">
        <Link href="/project">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contacts">Contact</Link>
      </div>
    </nav>
  );
}
0;
