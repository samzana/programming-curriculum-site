export interface AITool {
    name: string;
    url: string;
    description: string;
    resources: {
        link: string;
        description: string;
    }[];
}

const aiTools: AITool[] = [
    {
        name: "Bolt",
        url: "https://bolt.new/",
        description: "Bolt is an in-browser AI web development agent that allows building full-stack applications.",
        resources: [
            {
                link: "https://support.bolt.new/docs/getting-started",
                description: "Bolt Official Documentation"
            },
            {
                link: "https://www.youtube.com/watch?v=1SfUMQ1yTY8",
                description: "Greg Isenberg's Bolt Tutorial for Beginners with the Bolt CEO"
            }
        ]
    },
    {
        name: "Lovable",
        url: "https://lovable.dev/",
        description: "Lovable is a web-based AI agent that allows you to build full-stack applications using natural language.",
        resources: [
            {
                link: "https://docs.lovable.dev/introduction",
                description: "Lovable Official Documentation"
            },
            {
                link: "https://www.youtube.com/watch?v=gqsZGxuymTk",
                description: "Lovable's YouTube Tutorial"
            }
        ]
    },
    {
        name: "v0",
        url: "https://v0.dev/",
        description: "v0 is a web based pair programmer for generating UIs and code for your projects using natural language.",
        resources: [
            {
                link: "https://v0.dev/docs",
                description: "v0 Official Documentation",
            },
            {
                link: "https://www.youtube.com/watch?v=sCFS_U7d9Do",
                description: "Greq Isenberg v0 Tutorial with Vercel's VP of Product",
            }
        ]
    },
    {
        name: "Replit",
        url: "https://replit.com/",
        description: "Replit is a collaborative browser-based IDE that allows you to build and deploy applications powered by AI.",
        resources: [
            {
               link: "https://replit.com/guides",
               description: "Replit Official Guides"
            },
            {
                link: "https://www.youtube.com/watch?v=fNnmWtf9wYo",
                description: "David Ondrej's YouTube Tutorial"
            }
        ]
    },
    {
        name: "Cursor",
        url: "https://www.cursor.com/",
        description: "Cursor is an IDE for Windows, macOS and Linux that enhances developer productivity by integrating AI directly into the coding environment.",
        resources: [
            {
                link: "https://www.cursor.com/downloads",
                description: "Download Cursor for Your OS"
            },
            {
                link: "https://www.cursor.com/features",
                description: "Cursor Features Guide"
            },
            {
                link: "https://www.youtube.com/watch?v=gqUQbjsYZLQ",
                description: "Greg Isenberg's Cursor YouTube Tutorial"
            }
        ]
    },
    {
        name: "Windsurf",
        url: "https://codeium.com/windsurf",
        description: "Windsurf is an AI powered IDE with both Agentic and Copilot features",
        resources: [
            {
                link: "https://codeium.com/windsurf/download",
                description: "Download Windsurf for Your OS"
            },
            {
                link: "https://docs.windsurf.com/windsurf/getting-started",
                description: "Windsurf Official Documentation"
            },
            {
                link: "https://www.youtube.com/watch?v=8TcWGk1DJVs",
                description: "Tech with Tim's Windsurf YouTube Tutorial"
            }
        ]
    }
]

export default aiTools;