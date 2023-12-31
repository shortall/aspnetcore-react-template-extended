import React from 'react';

export const Home: React.FC = () => {

    return (
        <>
            <h1>Hello, world!</h1>
            <p>Welcome to your new app!</p>
            <p>A clone of the .NET Blazor app template but demonstrating the following tech stack:</p>
            <ul className="list-group d-inline-block">
                <li className="list-group-item">React</li>
                <li className="list-group-item">Apollo</li>
                <li className="list-group-item">GraphQL Codegen</li>
                <li className="list-group-item">Hot Chocolate</li>
                <li className="list-group-item">Entity Framework</li>
            </ul>
        </>
    );
};