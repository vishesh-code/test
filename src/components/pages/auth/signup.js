import Head from 'next/head';
import Link from 'next/link';
import SignupForm from '../../components/auth/SignupForm';

export default function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-purple-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Head>
        <title>Sign Up | Forever Together</title>
        <meta name="description" content="Create your wedding website account" />
      </Head>
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-6">
        <Link href="/" className="flex justify-center">
          <span className="text-3xl font-serif font-bold text-pink-600">Forever Together</span>
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <SignupForm />
      </div>
    </div>
  );
}