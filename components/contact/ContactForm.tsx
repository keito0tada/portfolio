'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [text, setText] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [content, setContent] = useState<string>('');
  return (
    <div className='bg-red-100 pt-3 mx-20 my-5'>
      <label className='block text-lg font-medium leading-6 text-gray-800 text-center'>
        お問い合わせフォーム
      </label>
      <div className='px-5 py-5 my-5 mx-5'>
        <div>
          <label className='text-gray-800'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={text}
            onChange={(event) => setText(event.target.value)}
            className='rounded-md mx-10 py-1.5 pl-1 pr-20 text-gray-900'
          />
        </div>
        <div>
          <label className='text-gray-800'>Email</label>
          <input
            type='text'
            name='email'
            id='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className='rounded-md mx-10 py-1.5 pl-1 pr-20 text-gray-900'
          />
        </div>
        <div>
          <label className='text-gray-800'>内容</label>
          <input
            type='text'
            name='email'
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className='rounded-md mx-10 py-1.5 pl-1 pr-96 text-gray-900'
          />
        </div>
        <button className='rounded-md  bg-blue-200 text-gray-900'>送信</button>
      </div>
    </div>
  );
}
