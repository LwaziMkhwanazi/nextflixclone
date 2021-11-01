import Head from "next/head";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-black'>
      <Head>
        <title>Netflix Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-col items-center justify-center flex-1 px-20 text-center '>
        <h1 className='text-5xl font-bold text-center text-white max-w-lg'>
          Unlimited movies, Tv <br />
          shows and more.
        </h1>
        <h2 className='text-2xl text-white mt-4 mb-8'>
          Whatch anywhere, Cancel anytime
        </h2>
        <p className='text-white'>
          Ready to Watch? Enter your email or restart your membership
        </p>
          <div className = "flex mt-4">
              <input className = "px-8 py-2" placeholder = "Email address"/>
                <button className = "bg-red-600 text-white ml-1 py-2 px-8">Get Started</button>
          </div>
      </main>
    </div>
  );
}
