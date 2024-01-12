'use client';

import React from 'react';
import Navigation from '../navigation/page';

export default function About() {
    return (
        <>
            <Navigation />

            <div className='container mt-3 w-50 text-center'>
                <h1>About TODO's</h1>
                <p>
                    Welcome to TODO's, your trusted companion for efficient task management.
                    Our mission is to help you stay organized and focused, providing an intuitive and user-friendly Todo List app.
                </p>
                <h2>Key Features:</h2>
                <ul>
                    <li><strong>Easy Task Creation:</strong> Quickly add and organize your tasks with just a few taps.</li>
                    <li><strong>Intuitive Interface:</strong> Navigate seamlessly through the app for a hassle-free experience.</li>
                    <li><strong>Prioritize and Categorize:</strong> Stay on top of your tasks by assigning priorities and categories.</li>
                    <li><strong>Cross-Platform Sync:</strong> Access your tasks anytime, anywhere with our reliable cloud synchronization.</li>
                    <li><strong>Customization:</strong> Tailor the app to your preferences with themes and personalized settings.</li>
                </ul>
                <p>
                    Thank you for choosing TODO's to be your task management partner. We are dedicated to continually improving and providing you with the best tools to enhance your productivity. Feel free to reach out to us with any feedback or suggestions – we're here to make your life simpler and more organized.
                </p>
            </div>

        </>
    );
}
