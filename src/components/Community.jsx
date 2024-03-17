import React from 'react';

const Community = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-gray-800 text-white py-4">
                <div className="container mx-auto">
                    <h1 className="text-xl font-bold">Visually Impaired Community</h1>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto py-8">
                {/* Clubs Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Clubs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Club Card Example */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Book Club</h3>
                            <p className="text-gray-700">A club for book lovers.</p>
                        </div>
                        {/* Add more club cards here */}
                    </div>
                </section>

                {/* Job Portal Section */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Job Portal</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Job Card Example */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Software Engineer</h3>
                            <p className="text-gray-700">Company XYZ is hiring a software engineer.</p>
                        </div>
                        {/* Add more job cards here */}
                    </div>
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

export default Community;
