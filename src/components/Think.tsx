import img from '../assets/beautiful-fashion-woman-posing-with-elegant-suit_1328-3308.jpg'

export default function Think() {
  return (
    <section className="w-[90%] m-auto grid grid-cols-2 my-12 gap-20">
        <div>
            <h1 className="text-6xl font-bold">WE THINK</h1>
            <span className="flex items-center gap-4">
                <h1 className="text-6xl font-bold">YOU'LL</h1> <h3 className="text-2xl font-bold">LIKE THESE</h3>
            </span>
            <p className="my-6 text-gray-400">Fashion is more than just clothing, it's an art form , a means of self expression and a reflection of culture and society.
                From houte couture runways to street style, fashion encompasses a wide spectrum of styles,trends and influences
            </p>
            <div className='flex gap-2'>
              <span className='flex items-center gap-4'>
              <i className="text-4xl fa-regular fa-circle-pause"></i>
              <div>
                <h3 className='font-bold'>Core Construction</h3>
                <p className='text-sm text-gray-400'>Machine wash at 30 C</p>
              </div>
              </span>
              <span className='flex items-center gap-4'>
              <i className="text-4xl fa-regular fa-circle-pause"></i>
              <div>
                <h3 className='font-bold'>Core Construction</h3>
                <p className='text-sm text-gray-400'>Machine wash at 30 C</p>
              </div>
              </span>
            </div>
        </div>
        
        <div className="flex justify-center">
        <img
          className="object-cover hex-alt w-[340px] h-[400px]"
          src={img}
          alt='img'
        />
    </div>
    </section>
  )
}
