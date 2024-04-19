import { Hero } from "./components/Hero/Hero";

export default function Home() {
  const itemsforcards = [
    {
      id: 1,
      title: 'Todo List',
      description: 'Keep track of your tasks with our todo list feature. Add, edit, and delete tasks with ease.',
    }, 
    {
      id: 2,
      title: 'Reminders',
      description: 'Set reminders for important tasks and never miss a deadline again.',
    },
    {
      id: 3,
      title: 'Notes',
      description: 'Take notes and keep them organized with our notes feature. Access your notes from anywhere.',
    },
    {
      id: 4,
      title: 'Tags',
      description: 'Organize your tasks with tags. Use tags to group tasks by category or priority.',
    }
  ]

  return (
    <main>
        <Hero/>
        <div className="min-h-screen bg-[#D1B3C4]">
          <div className="text-center items-center grid pt-36">
            <h1 className="text-6xl font-bold text-[#735D78]">
              Features that make your life easier
            </h1>
            <h2 className="text-xl pt-4 text-[#B392AC]">
              Our todo app is packed with powerful features to help you stay organized and productive.
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-10 m-10">
            {itemsforcards.map((item) => (
              <div key={item.id} className="p-4">
                <div className="bg-[#735D78] p-6 h-[15vh] rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-[#F7D1CD]">{item.title}</h3>
                  <p className="text-[#B392AC] pt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </main>
  );
}
