import BannerMain from '../../assets/banner-main.png'
import BannerShadow from '../../assets/bg-shadow.png'
function Banner() {
  return (
    <div className="bg-black rounded-2xl">
      <div
        className="hero py-10 rounded-2xl"
        style={{
          backgroundImage:
            `url(${BannerShadow})`,
        }}
      >

        <div className=" text-neutral-content text-center">
          <div className="">
            <div className="flex justify-center">
              <img src={BannerMain} alt="Bpl" className='w-[100px] lg:w-[248px]'/>
            </div>
            <h1 className="my-6 text-xl lg:text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="mb-5">
            Beyond Boundaries Beyond Limits
            </p>
            <div className="">
                <span className='p-2 border border-[#E7FE29] inline-block rounded-xl'>

            <button className="btn bg-gradient-to-r from-pink-500 via-purple-400 to-yellow-400">Claim Free Credit</button>
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
