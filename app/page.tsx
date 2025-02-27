import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ maxWidth: '1000px', margin: '200px auto', padding: '0 20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold'}}>Welcome to Computer Programming at Uncommon. </h1>
        <p>
          Use the navigation bar to explore our curriculum roadmaps, resources, our team and how to build with AI. 
        </p>
      </main>

    </div>
  );
}
