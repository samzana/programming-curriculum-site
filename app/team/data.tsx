export interface TeamMember {
    name: string;
    domains: string;
    languages: string;
    frameworks: string;
}

export interface SupportHour {
    time: string;
    instructor: string;
    googlemeetLink: string;
}


const team: TeamMember[] = [
    {
        name: "Hudson W. Benhura",
        domains: "Web Development, System Design",
        languages: "Python, Javascript, Node.js, HTML",
        frameworks: "NextJS, ReactJS, Django, Express.js, Tailwind CSS"
    },
    {
        name: "Simbarashe Mahlaulo",
        domains: "Cyber Security, Web Development, Prompt Engineering",
        languages: "Python, JavaScript, SQL",
        frameworks: "ReactJS, NextJS"
    },
    {
        name: "Sam Zana",
        domains: "Mobile App Development, API Development, System Design, Data Analysis, Generative AI",
        languages: "Python, Dart, SQL",
        frameworks: "FastAPI, Flutter, LangChain"
    },
]

const mondaySupportHours: SupportHour[] = [

]

const tuesdaySupportHours: SupportHour[] = [
    {
        time: "10-11pm",
        instructor: "Simbarashe Mahlaulo",
        googlemeetLink: "",
    },
    {
        time: "2-3pm",
        instructor: "Hudson W Benhura",
        googlemeetLink: "", 
    }
]

const wednesdaySupportHours: SupportHour[] = [
    {
        time: "10-11pm",
        instructor: "Hudson W Benhura",
        googlemeetLink: "",
    }
]

const thursdaySupportHours: SupportHour[] = [
    {
        time: "11-12pm",
        instructor: "Simbarashe Mahlaulo",
        googlemeetLink: "",
    },
    {
        time: "3-4pm",
        instructor: "Sam Zana",
        googlemeetLink: "https://meet.google.com/ytd-xgcq-myo",
    }
]

const fridaySupportHours: SupportHour[] = [
    {
        time: "11-12pm",
        instructor: "Sam Zana",
        googlemeetLink: "https://meet.google.com/pbx-etfq-xjx",
    }
]

export default team;
export { mondaySupportHours, tuesdaySupportHours, wednesdaySupportHours, thursdaySupportHours, fridaySupportHours };

