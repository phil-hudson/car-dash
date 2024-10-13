import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function PageContentContainer({ children }: Props) {
  return (
    <div className="px-4 pb-6">
      <div className="max-w-7xl mx-auto sm:px-6 md:px-8 lg:px-8 my-6">
        {children}
      </div>
    </div>
  );
}
