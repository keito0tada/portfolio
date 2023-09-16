'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [text, setText] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [content, setContent] = useState<string>('');
  return (
    <div className='bg-red-100 pt-3 mx-20 my-5'>
      <label className='block text-lg font-bold leading-6 text-gray-800 text-center'>
        お問い合わせフォーム
      </label>
      <div className='px-5 py-5 my-5 mx-5'>
        <div className='flex items-center my-1'>
          <div className='flex-initial w-32'>
            <label className='text-gray-800'>お名前</label>
          </div>
          <input
            type='text'
            name='name'
            id='name'
            value={text}
            onChange={(event) => setText(event.target.value)}
            className='flex-initial rounded-md w-96 h-10 px-2 text-gray-900'
          />
        </div>
        <div className='flex items-center my-1'>
          <div className='flex-initial w-32'>
            <label className='text-gray-800'>Email</label>
          </div>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className='flex-initial rounded-md w-96 h-10 px-2 text-gray-900'
          />
        </div>
        <div className='flex items-center my-1'>
          <div className='flex-initial w-32'>
            <label className='text-gray-800'>内容</label>
          </div>
          <textarea
            name='email'
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className='flex-auto rounded-md h-96 px-2 text-gray-900'
          />
          <div className='flex-initial w-32'></div>
        </div>
        <div className='flex justify-center'>
          <button
            className='btn btn-blue w-64 mx-auto'
            onClick={() =>
              confirm('この内容でお間違いないですか？')
                ? console.log('ok')
                : console.log('cancel')
            }
          >
            送信
          </button>
        </div>
      </div>
    </div>
  );
}
