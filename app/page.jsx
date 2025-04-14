export default function Home() {
  return (
    <div className="min-h-[90vh] grid grid-cols-1 md:grid-cols-2 px-3 ">
      <div className="flex items-center">
        <h1 className="text-3xl md:text-5xl font-light">
          Lumeo &mdash; Create Engaging Thumbnails Using GenAI
        </h1>
      </div>
      <div className="flex items-center ">
        <form
          action=""
          method="POST"
          className="w-full flex flex-col items-start"
        >
          <input
            type="text"
            placeholder="Username"
            className="input"
            required
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            className="input"
            required
          />
          <br />
          <button type="submit" className="btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
