import { CircleDollarSign } from 'lucide-react';

export default function Logo() {
  return (
    <span className='flex items-center gap-2 font-semibold flex-shrink-0 text-lg'>
      <CircleDollarSign className='size-8'/>
      <span>Easy PPP</span>
    </span>
  )
}