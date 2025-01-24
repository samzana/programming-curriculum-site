import Link from 'next/link';
import Navbar from '../components/Navbar'; 

const Team = () => {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: '1000px', margin: '20px auto', padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '20px 0' }}>Instruction Team and Support</h1>
        <p style={{ fontSize: '1rem', lineHeight: '1.5', margin: '10px 0' }}>
          The instruction team consists of dedicated instructors with a diverse set of skills in different programming
          domains using a variety langauges and frameworks. On this page you will find information about each member of 
          our team: their skillset and availability for support with advice, environments setup, explaining concepts and 
          debugging projects. 
        </p>
        <section style={{ margin: '50px 0', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', paddingBottom: '20px' }}>
            <Link href="/team/viewteam">View Team</Link>
          </h2> 
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
            <Link href="/team/supportcalendar">Support Calendar</Link>
          </h2> 
        </section>
      </main>
    </>
  );
};

export default Team;