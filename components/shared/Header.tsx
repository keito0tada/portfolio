import Link from 'next/link';
export default function Header() {
  return (
    <header>
      <nav>
        <h1 className='h-10 my-5 text-3xl text-center'>
          <Link href='/'>Keito Tada</Link>
        </h1>
        <ul className='flex justify-end'>
          <li className='header-item'>
            <Link href='/about' className='hover:underline'>
              About
            </Link>
          </li>
          <li className='header-item'>
            <Link href='/works' className='hover:underline'>
              Works
            </Link>
          </li>
          <li className='header-item'>
            <Link href='/blog' className='hover:underline'>
              Blog
            </Link>
          </li>
          <li className='header-item'>
            <Link href='contact' className='hover:underline'>
              Contact
            </Link>
          </li>
          <li className='header-item'>
            <Link href='/link' className='hover:underline'>
              Link
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
