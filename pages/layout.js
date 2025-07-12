// pages/layout.js
import { usePrivy } from '@privy-io/react-auth';
import { useEffect } from 'react';

export default function Layout({ children }) {
  const { ready, authenticated, user, login, logout } = usePrivy();

  // Wait for Privy to be ready
  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                My App
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {authenticated ? (
                <>
                  <span className="text-sm text-gray-600">
                    Welcome, {user?.email || user?.wallet?.address?.slice(0, 6) + '...'}
                  </span>
                  <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={login}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}