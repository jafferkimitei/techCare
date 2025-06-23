export default function OverviewPage() {
  return (
    <div className="min-h-screen text-gray-900">
      <main className="flex flex-col items-center justify-center h-full py-20 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#072635]">
          Welcome to TechCare
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl">
          This is the central dashboard where you can get a bird’s eye view of your activity. 🚀
          <br />
          Upcoming data like appointments, patient insights, and key stats will be displayed here.
        </p>
      </main>
    </div>
  );
}
