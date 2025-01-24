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
        name: "Dylan Maupa",
        domains: "Mobile App Development, Web Development",
        languages: "JavaScript, HTML, Node.js",
        frameworks: "ReactJS, React Native"
    },
    {
        name: "Hudson W. Benhura",
        domains: "Web Development, System Design",
        languages: "Python, Javascript, Node.js, HTML",
        frameworks: "NextJS, ReactJS, Django, Express.js, Tailwind CSS"
    },
    {
        name: "Nigel Simon",
        domains: "Web Development, API Development, Cyber Security, Mobile App Development",
        languages: "JavaScript, TypeScript",
        frameworks: "ReactJS, React Native, Express.js, Next.js, Tailwind CSS, Node.js"
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
    {
        name: "Tonderai Kawere",
        domains: "Web Development, API Development", 
        languages: "JavaScript, TypeScript",
        frameworks: "React, Node.js, Express.js, Next.js, NestJS"
    }
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
    }, 
    {
        time: "2-3pm",
        instructor: "Tonderai Kawere",
        googlemeetLink: ""
    },
    {
        time: "2-3pm",
        instructor: "Nigel Simon",
        googlemeetLink: ""
    }
]

const wednesdaySupportHours: SupportHour[] = [
    {
        time: "10-11pm",
        instructor: "Hudson W Benhura",
        googlemeetLink: "",
    },
    {
        time: "2-3pm",
        instructor: "Nigel Simon",
        googlemeetLink: ""
    }
]

const thursdaySupportHours: SupportHour[] = [
    {
        time: "10-11am",
        instructor: "Dylan Maupa",
        googlemeetLink: "https://meet.google.com/frx-yjdj-gsv",
    },
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
        time: "10-11am",
        instructor: "Dylan Maupa",
        googlemeetLink: "https://meet.google.com/nng-rjom-vby",
    },
    {
        time: "11-12pm",
        instructor: "Sam Zana",
        googlemeetLink: "https://meet.google.com/pbx-etfq-xjx",
    },
    {
        time: "2-3pm",
        instructor: "Tonderai Kawere",
        googlemeetLink: ""
    }
]

export default team;
export { mondaySupportHours, tuesdaySupportHours, wednesdaySupportHours, thursdaySupportHours, fridaySupportHours };

