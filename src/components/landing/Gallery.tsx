'use client'
import { CreditCard, LucideBookText } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button';

const Gallery = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-medium'>Gallery</h1>
        <div className='flex gap-4'>
        <Button variant={"ghost"} size={"sm"} className='hover:bg-muted text-foreground'>
          <LucideBookText className='mr-2' size={16} />
          Legal
        </Button>
        <Button variant={"ghost"} size={"sm"} className='hover:bg-muted text-foreground'>
          <CreditCard className='mr-2' size={16} />
          Pricing
        </Button>

        </div>
      </div>
    </div>
  );
}

export default Gallery