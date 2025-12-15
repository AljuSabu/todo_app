
function App() {
  

  return (
    
    <>
    <div className="bg-linear-to-r from-fuchsia-500 to-blue-500 relative h-120 flex justify-center items-center">
      <img src="/background.jpg" alt="img" className="h-120 w-full absolute mix-blend-overlay" />
      <div className="h-180 w-180 relative top-50 p-2">
        <div className="flex justify-between p-1">
          <h1 className="text-6xl font-bold text-white">TODO</h1>
          <div className="text-6xl font-orbitron">00:00:00</div>
        </div>
        <form className="flex justify-between mt-15">
          <input type="text" className="shadow-md shadow-black pl-5 w-140 h-15 text-xl text-gray-500 bg-stone-50 rounded-xl focus:outline-none" placeholder="Enter your Task" />
          <button type="submit" className="bg-purple-600 text-2xl py-3 px-5 rounded-xl shadow-md shadow-black hover:bg-purple-500 hover:shadow-lg text-white">Enter  </button>
        </form>
        <div className="w-full bg-stone-50 h-full rounded-xl shadow-md shadow-black mt-10"></div>
      </div>
    </div>
    </>
  )
}

export default App
