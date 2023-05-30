'use client';

import Link from 'next/link';

export default function Settings(){
  return (<><h1>Settings</h1>
    <Link href={'/'}>teste</Link><br/>
    <Link href={'/settings/anotherSetting'}>forwards</Link>
  </>)
}