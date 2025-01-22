'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
      <nav style={{ borderBottom: '1px solid black', maxWidth: '1000px', margin: '0 auto', padding: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '150px' }}>
        <h1 
            style={{ margin: '10px 0', fontSize: '20px', fontWeight: 'bold' }}
            onClick={() => window.location.href = '/'}
        >
            Programming at Uncommon
        </h1>
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, gap: '10px' }}>
          <li>
            <Link href="/crashcourse">Crash Course</Link>
          </li>
          <li>
            <Link href="/specialization">Specialization</Link>
          </li>
          <li>
            <Link href="/aiandprogramming">AI and Programming</Link>
          </li>
          <li>
            <Link href="/team">Team</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;


