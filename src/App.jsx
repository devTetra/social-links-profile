import profile from "./assets/avatar-jessica.jpeg";

function App() {
  return (
    <>
      <main className="flex h-screen items-center justify-center bg-grey-900 font-inter">
        <article className="flex flex-col gap-6 rounded-lg bg-grey-800 p-8 text-white">
          <header className="flex flex-col items-center gap-5">
            <img
              src={profile}
              alt="Jessica's profile picture"
              className="h-1/4 w-1/4 rounded-full"
            />
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-2xl font-bold">Jessica Randall</h1>
              <h2 className="text-xs font-bold text-lemon">
                London,United Kingdom
              </h2>
            </div>
            <p className="text-xs">"Front-end developer and avid reader."</p>
          </header>
          <div className="flex flex-col gap-3 text-center text-sm">
            <a href="#" className="btn-social">
              Github
            </a>
            <a href="#" className="btn-social">
              Frontend Mentor
            </a>
            <a href="#" className="btn-social">
              LinkedIn
            </a>
            <a href="#" className="btn-social">
              Twitter
            </a>
            <a href="#" className="btn-social">
              Instagram
            </a>
          </div>
        </article>
      </main>
    </>
  );
}

export default App;
