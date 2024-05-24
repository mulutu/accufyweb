import React from 'react'

function EmailCapture() {
    return (
        <div className="flex justify-center items-center">
            <form className="relative w-full max-w-sm">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 pl-4 pr-20 border-2 border-orange-500 rounded focus:outline-none"
                    required
                />
                <button
                    type="submit"
                    className="absolute right-0 top-0 bottom-0 m-1 px-4 py-2 bg-orange-500 text-white font-bold rounded"
                >
                    Get Started
                </button>
            </form>
        </div>
    )
}

export default EmailCapture