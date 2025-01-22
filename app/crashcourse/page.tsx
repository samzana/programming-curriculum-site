import Navbar from '../components/Navbar'; // Adjust the path to match your project structure
import resourceList from './data';

const CrashCourse = () => {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: '1000px', margin: '20px auto', padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '20px 0' }}>Crash Course: Introduction to Computer Programming</h1>
        <p style={{ fontSize: '1rem', lineHeight: '1.5', margin: '10px 0' }}>
          During the crash course, you will be introduced to programming fundamentals in Python. We use Python becuase its syntax resembles 
          natural language, making it beginner friendly. Python is also very versatile and has applications in domains like web development, data science,
          machine learning etc. Python is excellent for grasping core concepts like variables, loops, and functions, which are common across all programming languages.
          It provides a solid foundation for learning more advanced languages later.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: '1.5', margin: '10px 0' }}>
          After the introduction to programming fundamentals in Python, you will be introduced to AI driven programming where you will learn how language models work 
          and how to effectively prompt engineer them to generate code and assist you during debugging. 
        </p>
        <section style={{ margin: '30px 0', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>What You&apos;ll Learn:</h2>
          <ul style={{ fontSize: '1rem', lineHeight: '1.5', paddingLeft: '20px' }}>
            <li>Programming Fundamentals (variables, loops, functions, collections etc)</li>
            <li>Debugging Techniques</li>
            <li>ChatGPT and Prompt Engineering</li>
            <li>Version Control with Git and Github</li>
          </ul>
        </section>
        <section style={{ margin: '30px 0', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Resources (click on the resources)</h2>
            <ul style={{ fontSize: '1rem', lineHeight: '1.5', paddingLeft: '20px' }}>
            {resourceList.map((resource, index) => (
              <li key={index}>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.name}
              </a>
              </li>
            ))}
            </ul>
        </section>
      </main>
    </>
  );
};

export default CrashCourse;
