// pages/_app.js
import { PrivyProvider } from '@privy-io/react-auth';

function MyApp({ Component, pageProps }) {
  return (
    <PrivyProvider
      appId="cmd09vzas01b7k10mcn09snoo" // Replace with your actual Privy App ID
      config={{
        // Customize the login methods you want to support
        loginMethods: ['email', 'wallet', 'google', 'twitter', 'discord'],
        // Customize the appearance
        appearance: {
          theme: 'dark', // or 'dark'
          accentColor: '#676FFF',
          logo: 'https://your-logo-url.com/logo.png',
        },
        // Configure supported wallets
        embeddedWallets: {
          createOnLogin: 'users-without-wallets', // or 'all-users' or 'off'
        },
      }}
    >
      <Component {...pageProps} />
    </PrivyProvider>
  );
}

export default MyApp;