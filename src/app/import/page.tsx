'use client';

export default function TableDemo() {
  return (
    <div>
      {/* <div className="flex justify-center items-center mt-4  ">
        <h2 className="text-2xl font-semibold">Import Your Data</h2>
        </div> */}
      <div className='container m-auto ml-[10rem] flex h-screen flex-col items-center justify-center'>
        {/* Import Data Section */}
        <div className='w-full max-w-md rounded-lg border bg-white p-6 shadow-lg'>
          <h2 className='mb-4 text-center text-2xl font-bold'>Import Data</h2>
          <input
            type='file'
            accept='.csv, .xlsx'
            className='block w-full text-sm text-gray-500 file:mr-4 file:rounded file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100'
          />
          <button className='mt-4 w-full rounded bg-black px-4 py-2 text-white hover:bg-black'>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
