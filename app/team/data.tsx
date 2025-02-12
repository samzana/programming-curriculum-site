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
        name: "Craig Togarepi",
        domains: "Mobile App Development, Web Development, Cyber Security",
        languages: "Python, JavaScript, SQL",
        frameworks: "ReactJS, Next.js, NestJS"
    },
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
        name: "Precell Saini",
        domains: "Web Development, Mobile App Development, API Development, Database Management",
        languages: "JavaScript, Python, SQL",
        frameworks: "ReactJS, React Native, Express.js, Next.js, Flask API, Node.js"
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
        name: "Tadiwanashe Kunaka",
        domains: "Web Development, Mobile App Development",
        languages: "JavaScript, TypeScript",
        frameworks: "ReactJS, Node.js, Express.js, Next.js, React Native"
    },
    {
        name: "Tonderai Kawere",
        domains: "Web Development, API Development", 
        languages: "JavaScript, TypeScript",
        frameworks: "React, Node.js, Express.js, Next.js, NestJS"
    },
    {
        name: "Vincent Mugondora",
        domains: "Web Development", 
        languages: "JavaScript, HTML",
        frameworks: "React, Node.js, Express.js, Tailwind CSS"
    },  
]

const mondaySupportHours: SupportHour[] = [
    {
        time: "10-11am",
        instructor: "Craig Togarepi",
        googlemeetLink: "https://meet.google.com/cvk-vafs-jwo",
    },
    {
        time: "2-3pm",
        instructor: "Precell Saini",
        googlemeetLink: "https://meet.google.com/jiw-hieh-yko",
    },
    {
        time: "2-3pm",
        instructor: "Vincent Mugondora",
        googlemeetLink: "https://meet.google.com/hry-ictv-ono",
    },
]

const tuesdaySupportHours: SupportHour[] = [
    {
        time: "10-11am",
        instructor: "Simbarashe Mahlaulo",
        googlemeetLink: "https://meet.google.com/brg-zwix-uxr",
    },
    {
        time: "2-3pm",
        instructor: "Hudson W Benhura",
        googlemeetLink: "https://meet.google.com/tmz-fnuq-tuq", 
    }, 
    {
        time: "2-3pm",
        instructor: "Tonderai Kawere",
        googlemeetLink: "https://meet.google.com/avn-ezf-ufz"
    },
    {
        time: "2-3pm",
        instructor: "Nigel Simon",
        googlemeetLink: "https://meet.google.com/kzp-btnw-tdo"
    }
]

const wednesdaySupportHours: SupportHour[] = [
    {
        time: "10-11am",
        instructor: "Hudson W Benhura",
        googlemeetLink: "https://meet.google.com/tmz-fnuq-tuq",
    },
    {
        time: "11-12pm",
        instructor: "Craig Togarepi",
        googlemeetLink: "https://meet.google.com/jdi-xkoy-ctd",
    },
    {
        time: "2-3pm",
        instructor: "Precell Saini",
        googlemeetLink: "https://meet.google.com/rrq-haot-ibt",
    },
    {
        time: "2-3pm",
        instructor: "Nigel Simon",
        googlemeetLink: "https://meet.google.com/kzp-btnw-tdo"
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
        googlemeetLink: "https://meet.google.com/brg-zwix-uxr",
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
        googlemeetLink: "https://meet.google.com/avn-ezf-ufz"
    },
    {
        time: "2-3pm",
        instructor: "Vincent Mugondora",
        googlemeetLink: "https://meet.google.com/neu-xixq-uun",
    }
]

export default team;
export { mondaySupportHours, tuesdaySupportHours, wednesdaySupportHours, thursdaySupportHours, fridaySupportHours };

