export default function Home() {
  return (
    <main className="min-h-screen p-24 bg-[#D0E3C4]">
      <div className="bg-white border-2 rounded-2xl p-10 text-black">
        <div>
          <h1 className="text-4xl">Tasks</h1>
        </div>
        <div className="flex justify-between items-center mt-5">
          <input
            className="border-2 rounded-lg p-2 w-full"
            type="text"
            placeholder="Add a task"
          />
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
    </main>
  );
}
