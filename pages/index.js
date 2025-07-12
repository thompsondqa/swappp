// pages/page.js or pages/index.js
import { usePrivy } from '@privy-io/react-auth';
import Layout from './layout';
import '../styles/global.css' // Ensure you have a global CSS file for styles


export default function HomePage() {
  const { ready, authenticated, user, login } = usePrivy();

  if (!ready) {
    return <Layout><div>Loading...</div></Layout>;
  }

  return (
    <Layout>
      <div
        className="flex flex-col items-center justify-center h-screen"
        style={{
          backgroundImage: "url(./img/realbg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="px-4 py-8 w-full max-w-2xl">
          {authenticated ? (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Welcome back!
                </h2>
                {/* ...existing code... */}
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    You're successfully connected! You can now access all protected features.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Connect Your Wallet
              </h2>
              <p className="text-gray-600 mb-6">
                Please connect your wallet to access the application.
              </p>
              <button
                onClick={login}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium"
              >
                Connect Wallet
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}