import Accordion from "@/app/components/Accordion"
import Navbar from "@/app/components/Navbar"
import internetBasicsResources, { apiDevelopmentResources, databaseResources, frontEndBasicsResources, frontEndFrameworksResources } from "./data"


const WebDevelopment = () => {
    return (
        <>
            <Navbar />
            <main style={{ maxWidth: '1000px', margin: '20px auto', padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '20px 0' }}>Web Development</h1>
                <p style={{ fontSize: '1rem', lineHeight: '1.5', margin: '10px 0' }}>
                    Welcome to the web development track. Web development focuses on creating and maintaining websites and web applications 
                    that are accessible on the internet. Through hands on projects, you will learn to build interactive user interfaces, 
                    manage servers, and understand web technologies.
                </p>
                <section style={{ margin: '50px 0', textAlign: 'left' }}>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Modules (click on a module to access its resources)</h2>
                    <Accordion 
                        heading="How the Internet Works"
                        content= {internetBasicsResources}
                    />
                    <Accordion 
                        heading="Frontend Basics: HTML, CSS and JavaScript"
                        content= {frontEndBasicsResources}
                    />  
                    <Accordion 
                        heading="JS Frontend Frameworks/Libraries"
                        content= {frontEndFrameworksResources}
                    />
                    <Accordion 
                        heading="Database Basics"
                        content= {databaseResources}
                    />                  
                    <Accordion 
                        heading="API Development"
                        content= {apiDevelopmentResources}
                    />                                      
                </section>
            </main>
        </>
    )
}

export default WebDevelopment 