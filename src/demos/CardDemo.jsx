import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Card from '../components/Card/Card';
import simpleButtonPath from '../docs/card.md';

const HeadingDemo = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch(simpleButtonPath)
            .then((response) => response.text())
            .then((text) => {
                setMarkdown(text);
            });
    });

    return (
        <>
            <ReactMarkdown source={markdown} />
            <Card
                title="Heading"
                body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores et a repellendus magnam, illum aut quod molestiae. Ipsam mollitia vero, iure repellat deleniti ea, qui repellendus praesentium iste pariatur fugit!"
            />
        </>
    );
};

export default HeadingDemo;

