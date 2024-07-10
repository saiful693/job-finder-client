
const Blogs = () => {
    return (
        <div>          
                <div className="bg-gray-100 min-h-screen">
                    <header className="h-60 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 flex justify-center items-center">
                        <h1 className="text-4xl font-bold text-center">My Blog</h1>
                    </header>
                    <div className="container mx-auto px-4 py-8">
                        <div className="max-w-3xl mx-auto">
                            {/* Question 1 */}
                            <div className="bg-white rounded-lg shadow-md mb-8 p-6">
                                <h2 className="text-3xl font-bold mb-4">What is an Access Token and Refresh Token?</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    An access token is a short-lived token used to access protected resources. It is typically included in the headers of API requests to authenticate the user.
                                    <br /><br />
                                    A refresh token is a long-lived token used to obtain a new access token without re-authenticating the user. It is typically used to keep the user logged in for an extended period without needing to re-enter credentials.
                                    <br /><br />
                                    **How They Work:**
                                    - When a user logs in, they receive both an access token and a refresh token.
                                    - The access token is used for authentication with the server.
                                    - When the access token expires, the refresh token can be sent to the server to obtain a new access token.
                                    <br /><br />
                                    **Where to Store Them:**
                                    - Access tokens are often stored in memory or in a short-lived storage like session storage.
                                    - Refresh tokens should be stored in a more secure location, such as HTTP-only cookies, to prevent XSS attacks.
                                </p>
                            </div>

                            {/* Question 2 */}
                            <div className="bg-white rounded-lg shadow-md mb-8 p-6">
                                <h2 className="text-3xl font-bold mb-4">What is Express.js?</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is used to build single-page, multi-page, and hybrid web applications.
                                    <br /><br />
                                    **Features of Express.js:**
                                    - Middleware support: Allows adding additional request handling layers.
                                    - Routing: Defines routing tables for different HTTP verbs.
                                    - Quick to set up and simple to configure.
                                </p>
                            </div>

                            {/* Question 3 */}
                            <div className="bg-white rounded-lg shadow-md mb-8 p-6">
                                <h2 className="text-3xl font-bold mb-4">What is Nest.js?</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Nest.js is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It uses TypeScript by default and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).
                                </p>
                                <ul className="list-disc list-inside mt-4">
                                    <li>Built-in support for TypeScript.</li>
                                    <li>Dependency Injection container.</li>
                                    <li>Modular architecture for organizing code.</li>
                                    <li>Extensible with a rich ecosystem of modules.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
};

export default Blogs;