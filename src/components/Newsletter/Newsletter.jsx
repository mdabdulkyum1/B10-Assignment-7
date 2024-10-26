
function Newsletter() {
  return (
    <div className=" lg:w-3/4 mx-auto translate-y-[180px] ">
      <div className="flex justify-center items-center p-6 border border-white rounded-2xl bg-[#ffffff38]">
        <div
          className="w-full rounded-2xl text-center py-20 bg-[linear-gradient(54deg,rgba(175,231,246,1)_0%,rgba(255,255,255,1)_18%,rgba(255,255,255,1)_82%,rgba(250,218,153,1)_100%)]"
        >
          <h1 className="font-bold text-lg lg:text-3xl">
            Subscribe to our Newsletter
          </h1>
          <p className="mt-4">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="mt-6 flex flex-col lg:flex-row justify-center gap-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered "
            />
            <button className="btn bg-gradient-to-r from-pink-500 via-purple-400 to-yellow-400">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
