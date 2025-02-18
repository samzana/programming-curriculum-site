import Accordion from "@/app/components/Accordion"
import Navbar from "@/app/components/Navbar"
import { dataCleaningResources, dataCollectionResources, dataExplorationResources, dataScienceHandbookResources, dataVisualizationResources, nextLevelMinicourseResources, projectsResources } from "./data"

const DataAnalysis = () => {
    return (
        <>
            <Navbar />
            <main style={{ maxWidth: '1000px', margin: '20px auto', padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '20px 0' }}>Data Analysis</h1>
                <p style={{ fontSize: '1rem', lineHeight: '1.5', margin: '10px 0' }}>
                    Welcome to the data analysis track. Data analysis focuses on transforming raw data into meaningful insights to 
                    guide decision-making. Through hands-on projects, you will learn key processes such as collecting data from various 
                    sources, cleaning and organizing datasets to ensure accuracy, analyzing trends and patterns using statistical methods, 
                    and creating compelling visualizations to communicate your findings.
                </p>
                <section style={{ margin: '50px 0', textAlign: 'left' }}>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Modules (click on a module to access its resources)</h2>  
                    <Accordion 
                        heading="Data Collection"
                        content= { dataCollectionResources}
                    />   
                    <Accordion 
                        heading="Data Cleaning"
                        content= { dataCleaningResources}
                    />  
                    <Accordion 
                        heading="Data Exploration"
                        content= { dataExplorationResources }
                    />  
                    <Accordion 
                        heading="Data Visualization"
                        content= { dataVisualizationResources}
                    /> 
                    <Accordion 
                        heading="The Data Science Handbook"
                        content= { dataScienceHandbookResources }
                    /> 
                    <Accordion 
                        heading="Data Science 7 Day Mini-Course"
                        content= { nextLevelMinicourseResources }
                    /> 
                    <Accordion 
                        heading="Projects and Tools"
                        content= { projectsResources }
                    /> 
                </section>
            </main>
        </>
    )
}

export default DataAnalysis;