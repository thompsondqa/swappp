// pages/page.js or pages/index.js
import { usePrivy } from '@privy-io/react-auth';
import Layout from './layout';


export default function HomePage() {
  const { ready, authenticated, user, login } = usePrivy();

  if (!ready) {
    return <Layout><div>Loading...</div></Layout>;
  }

  return (
    <Layout>
      <div className="px-4 py-8">
        {authenticated ? (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Welcome back!
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    User ID
                  </label>
                  <p className="mt-1 text-sm text-gray-900">{user?.id}</p>
                </div>

                {user?.email && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <p className="mt-1 text-sm text-gray-900">{user.email.address}</p>
                  </div>
                )}

                {user?.wallet && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Wallet Address
                    </label>
                    <p className="mt-1 text-sm text-gray-900 font-mono">
                      {user.wallet.address}
                    </p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Created At
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {new Date(user?.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
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
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow p-8 max-w-md mx-auto">
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
          </div>
        )}
      </div>
    </Layout>
  );
}