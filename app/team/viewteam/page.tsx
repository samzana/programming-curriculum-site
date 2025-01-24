import Navbar from "@/app/components/Navbar"
import TeamCard from '@/app/components/TeamCard';

const ViewTeam = () => {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: '1000px', margin: '20px auto', padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '20px 0' }}>Instruction Team</h1>
        <section style={{ margin: '50px 0', textAlign: 'left' }}>
            <TeamCard />
        </section>
      </main>
    </>
  );
};

export default ViewTeam;