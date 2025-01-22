'use client'

import React, { useState } from 'react';

interface AccordionProps {
    heading: string;
    content: { description: string; url: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ heading, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    const contentStyle = {
        paddingLeft: '20px'
    };
    return (
        <div style={contentStyle}>
            <div onClick={toggleAccordion} style={{ paddingTop: '20px', cursor: 'pointer', fontWeight: 'bold' }}>
                {heading}
            </div>
            {isOpen && (
                <div style={contentStyle}>
                    {content.map((item, index) => (
                        <p key={index}>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                {item.description}
                            </a>
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Accordion;