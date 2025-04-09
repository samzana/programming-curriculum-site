import Link from 'next/link';
import Navbar from '../components/Navbar'; 

const AiTools = () => {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: '1000px', margin: '20px auto', padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '20px 0' }}>AI Tools and Best Practices</h1>
        <p style={{ fontSize: '1rem', lineHeight: '1.5', margin: '10px 0' }}>
          AI is undeniably reshaping the software development landscape, influencing the workflows, tools and skills in demand. 
          In this shifting landscape, it is more than important for developers to understand and utilize AI effectiviely in their work.
          On this page, you will find a curated list of AI tools and best practices that can help you leverage AI in software development. 
        </p>
        <section style={{ margin: '50px 0', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', paddingBottom: '20px' }}>
            <Link href="/aitools/tools">AI Tools</Link>
          </h2> 
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
            <Link href="/aitools/bestpractices">Best Practices</Link>
          </h2> 
        </section>
      </main>
    </>
  );
};

export default AiTools;