import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className='flex justify-center items-center h-[80vh]'>
      <div>
        <h1>Coming Soon</h1>
        <p>We{`'`}re working on something amazing and exciting for you.</p>
        <div className="loader"></div>
      </div>
    </div>
    </>
  )
}
