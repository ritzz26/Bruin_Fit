import Link from 'next/link';
import HomeClientComponent from './components/HomeClientComponents';

export default function Home() {
  return (
    <div>
      <HomeClientComponent />
      <div className="flex justify-center mt-4">
        <Link href="/create" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Create Event
        </Link>
      </div>
    </div>
  );
}
