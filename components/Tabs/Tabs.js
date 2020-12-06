export default function Tabs({ active, setActive }) {
  function Tab({ tabName }) {
    return (
      <button
        className={`flex-1 py-4 px-6 text-gray-c333333 font-mont font-semibold text-sm focus:outline-none ${
          active === tabName
            ? "border-b-2 border-blue-c2F80ED"
            : "text-gray-cBDBDBD"
        }`}
        onClick={() => setActive(tabName)}
      >
        {tabName}
      </button>
    )
  }
  return (
    <div className="flex justify-center border-b-2 border-gray-cBDBDBD">
      <Tab tabName="All" />
      <Tab tabName="Active" />
      <Tab tabName="Completed" />
    </div>
  )
}
