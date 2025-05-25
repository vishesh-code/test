import Head from 'next/head';
import Link from 'next/link';
import LoginForm from '../../components/auth/LoginForm';

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-purple-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Head>
        <title >Log In | Forever Together</title>
        <meta name="description" content="Log in to your wedding website account" />
      </Head>
      
      <div className=" bg-red-500 sm:mx-auto sm:w-full sm:max-w-md mb-6">
        <Link href="/" className="flex justify-center">
          <span className="text-3xl font-serif font-bold text-pink-600">Forever Together</span>
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}