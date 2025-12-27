export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
      <div className="max-w-lg w-full bg-black/20  border-2 border-amber-800 rounded-xl shadow-lg p-6 sm:p-8 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-4">
          How to Use the App
        </h1>
        <p className="text-gray-700 mb-6 sm:text-lg">
          First, log in to your account to access the features based on your
          role:
        </p>
        <ul className="list-disc list-inside text-center text-gray-700 space-y-3 sm:space-y-4">
          <li>
            <strong>Admin:</strong> Full access to the dashboard and all
            Projects data and visualizations.
          </li>
          <li>
            <strong>Developer:</strong> Access the visualizations only.
          </li>
          <li>
            <strong>Project Manager:</strong> Access to the dashboard only.
          </li>
        </ul>
      </div>
    </main>
  );
}
