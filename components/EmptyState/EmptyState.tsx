import React from 'react';

interface EmptyStateProps {
  title: string;
  message: string;
  actionText: string;
  onAction: VoidFunction;
}

const EmptyState = ({
  title,
  message,
  onAction,
  actionText,
}: EmptyStateProps) => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center py-12 md:py-32 lg:py-40 text-center space-y-4'>
      <h1 className='text-zinc-50 text-2xl sm:text-3xl  md:text-4xl font-semibold my-2'>
        {title}
      </h1>
      <p className='text-zinc-300 sm:w-1/2 md:w-3/5 lg:w-1/3 text-center'>
        {message}
      </p>
      <div>
        <button
          onClick={onAction}
          className='inline-flex items-center px-6 py-3 space-x-2 text-white  focus:outline-none focus:ring bg-blue-700 border border-blue-600 rounded-lg hover:bg-transparent hover:text-blue-500 hover:border-blue-500 active:text-blue-500'
        >
          {actionText}
        </button>
      </div>
    </div>
  );
};

export default EmptyState;
