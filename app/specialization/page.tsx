import Link from "next/link";
import Navbar from "../components/Navbar"

const Specialization = () => {
    return (
        <>
            <Navbar /> 
            <main style={{ maxWidth: '1000px', margin: '20px auto', padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '20px 0' }}>Specialization: Dive Deep into Your Track of Interest</h1>
                <p style={{ fontSize: '1rem', lineHeight: '1.5', margin: '10px 0' }}>
                    During specialization, you will choose a track between web development, mobile application development, data science and ML, 
                    and cybersecurity. With the support of the Uncommon team, you will learn by building projects, collaborating and acquiring 
                    certifications. Click on the links below for roadmaps, modules and resources for each track. 
                </p> 
                <section style={{ margin: '30px 0', textAlign: 'left' }}>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Specialization Tracks</h2>
                    <ul style={{ fontSize: '1rem', lineHeight: '1.5', paddingLeft: '20px' }}>
                        <li> 
                            <Link href="/specialization/webdevelopment">Web Development</Link>
                        </li>
                        <li> 
                            <Link href="/specialization/mobileapplicationsdevelopment">Mobile Application Development</Link>
                        </li>
                        <li> 
                            <Link href="/specialization/dataanalysis">Data Analysis</Link>
                        </li>
                        <li> 
                            <a href={''} target="_blank" rel="noopener noreferrer">
                                Cybersecurity 
                            </a>
                        </li>
                    </ul>   
                </section>
            </main>
        </>
    )
}

export default Specialization;