import Link from 'next/link';
import RootProvider from './RootProvider';

const Home = () => {
  return (
    <RootProvider>
      <main>
        <h1>HOME PAGE</h1>
        <Link href="/country">Country</Link>
      </main>
    </RootProvider>
  )
}

export default Home;