function Hero() {
    return (
      <div>
        {/*
    Heads up! 👋
  
    This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
  */}
  
        <section className="relative bg-[url(https://framerusercontent.com/images/uzpCtuYDgW95T4BOxvHZMRJKE.png?scale-down-to=2048)] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
  
          <div className="relative mx-auto  text-white font-sans max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8  ">
            <div className="max-w-5xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-3xl font-sans  sm:text-8xl text-left ">
                Let us find your
                
                  {" "}
                 

                  Confortable Home.{" "}
                   
                
              </h1>
  
              <p className="mt-4 max-w-lg text-left sm:text-xl/relaxed">
              Your home away from home, crafted with care.

              </p>
  
              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <a
                  href="#"
                  className="block w-full rounded bg-rose-600 px-12 py-3 text-md font-semibold text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                Book your Hostel 
                </a>
  
                {/* <a
                  href="#"
                  className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Hero;