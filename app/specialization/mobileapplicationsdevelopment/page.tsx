import Accordion from "@/app/components/Accordion"
import Navbar from "@/app/components/Navbar"
import { frontEndBasicsResources } from "../webdevelopment/data"
import { flutterResources, frontEndFrameworksResources, reactNativeResources } from "./data"

const MobileApplicationsDevelopment = () => {
    return (
        <>
            <Navbar />
            <main style={{ maxWidth: '1000px', margin: '20px auto', padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '20px 0' }}>Mobile Applications Development</h1>
                <p style={{ fontSize: '1rem', lineHeight: '1.5', margin: '10px 0' }}>
                    Welcome to the mobile applications development track. Mobile application development focuses on designing and building 
                    cross platform mobile applications. Through hands-on projects, you will learn to create user-friendly interfaces, 
                    integrate backend services, and understand mobile-specific technologies and frameworks. You can either choose the Flutter or React Native 
                    path. 
                </p>
                <section style={{ margin: '50px 0', textAlign: 'left' }}>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Flutter Path Modules (click on a module to access its resources)</h2>  
                    <Accordion 
                        heading="Dart and Flutter"
                        content= {flutterResources}
                    />                                   
                </section>
                <section style={{ margin: '50px 0', textAlign: 'left' }}>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>React Native Path Modules (click on a module to access its resources)</h2>  
                    <Accordion 
                        heading="Frontend Basics: HTML, CSS and JavaScript"
                        content= { frontEndBasicsResources }
                    />  
                    <Accordion 
                        heading="TypeScript and React"
                        content= { frontEndFrameworksResources }
                    />  
                    <Accordion 
                        heading="React Native"
                        content= { reactNativeResources }
                    /> 
                                                     
                </section>
            </main>
        </>
    )
}

export default MobileApplicationsDevelopment