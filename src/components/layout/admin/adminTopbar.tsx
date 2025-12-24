 const Topbar = () => {

  return (
    <div className="flex justify-between items-center px-6 h-16 shadow bg-white w-full">
      <h1 className="text-lg font-semibold">Admin Dashboard</h1>

      <div className="flex items-center gap-4">
        <input
        type="text"
        placeholder="Search..."
        className="px-3 py-1 border rounded-md outline-none"/>

        <div className="w-9 h-9 bg-gray-300 rounded-full">Ava</div>
      </div>
    </div>
  );
 };

 export default Topbar;