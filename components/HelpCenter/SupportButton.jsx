'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SupportButton() {
	const pathname = usePathname();

  return (
    <button className="mx-5 flex justify-center items-center bg-customOrange rounded-[60px] text-base h-[56px] w-[226px] lg:w-[286px] text-[#FAFAFA] customBoxShadowOrange">
      <Link href={pathname === '/public-organization' ? '#payments' : '/public-organization'}>Підтримати організацію</Link>
    </button>
  )
}