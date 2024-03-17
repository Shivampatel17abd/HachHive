import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-gray-800 text-white py-4">
                <div className="container mx-auto">
                    <h1 className="text-xl font-bold">About Us</h1>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto py-8">
                <section className="bg-white p-8 rounded-lg shadow-md mb-8">
                    <h2 className="text-2xl font-bold mb-4">Our Project</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our project aims to create an inclusive community and platform for visually impaired individuals,
                        providing them with resources, support, and opportunities tailored to their needs.
                    </p>
                </section>

                <section className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li className="mb-2">Accessible job portal with features for visually impaired users.</li>
                        <li className="mb-2">Dedicated clubs and interest groups within the community.</li>
                        <li className="mb-2">Supportive resources and tools for daily living and empowerment.</li>
                        <li className="mb-2">Regular events and workshops promoting inclusivity and awareness.</li>
                        {/* Add more features here */}
                    </ul>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Visually Impaired Community</p>
                </div>
            </footer>
        </div>
    );
};

export default About;
