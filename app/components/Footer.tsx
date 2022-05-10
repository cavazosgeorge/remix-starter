import React from 'react'

export default function Footer() {
    return (
        <footer className="absolute inset-x-0 bottom-0 h-16 w-100 bg-purple-100 sm:p-6 dark:bg-gray-800">
            <div className="flex justify-center items-center">
                <ul className="flex gap-6">
                    <h2>
                        LinkedIn
                    </h2>
                    <h2>
                        Github
                    </h2>
                    <h2>
                        Twitter
                    </h2>
                </ul>
            </div>
        </footer>
    );
}

