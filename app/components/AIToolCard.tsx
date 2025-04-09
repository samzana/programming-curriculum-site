import React from 'react';
import { AITool } from '../aitools/data';

interface AIToolCardProps {
    tool: AITool;
}

const AIToolCard: React.FC<AIToolCardProps> = ({ tool }) => {
    return (
        <div className="border rounded-lg shadow-md p-4 mb-6">
            <h2 className="text-xl font-bold mb-2">
                <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {tool.name}
                </a>
            </h2>
            <p className="text-gray-700 mb-4">{tool.description}</p>
            <h3 className="text-lg font-semibold mb-2">Resources:</h3>
            <ul className="list-disc list-inside">
                {tool.resources.map((resource, index) => (
                    <li key={index}>
                        <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            {resource.description}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AIToolCard;

// Add bottom padding to the card