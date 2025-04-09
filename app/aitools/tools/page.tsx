import AIToolCard from "@/app/components/AIToolCard";
import Navbar from "@/app/components/Navbar"
import aiTools from "../data";

const Tools = () => {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: '1000px', margin: '20px auto', padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '10px 0' }}>AI Tools</h1>
        <section style={{ margin: '50px 0', textAlign: 'left' }}>
            {aiTools.map((tool, index) => (
                <AIToolCard key={index} tool={tool} />
            ))}
        </section>
      </main>
    </>
  );
};

export default Tools;