'use client';

import Link from 'next/link';

export default function NewSetting(){
  return <><h1>Hey there I&apos;m a new setting!</h1>
    <Link href={'/settings'}>Back</Link>
  </>
}