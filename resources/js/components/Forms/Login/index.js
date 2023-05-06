import React from 'react'

function LoginForm() {
    return (
        <div>
            <div class="min-h-screen flex items-center justify-center bg-gray-100">
                <div class="w-full max-w-md">
                    <form class="bg-white rounded-lg shadow-md p-8">
                        <div class="flex justify-center"><h2 class="text-3xl font-bold mb-8">Room Management</h2></div>
                        <div class="space-y-4">
                            <div>
                                <label for="email" class="block font-medium text-gray-700">Email</label>
                                <input id="email" name="email" type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:outline-none focus:border-transparent focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4" />
                            </div>
                            <div>
                                <label for="password" class="block font-medium text-gray-700">Password</label>
                                <input id="password" name="password" type="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:outline-none focus:border-transparent focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4" />
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                    <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>
                                <div class="text-sm">
                                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>
                            <div>
                                <button type="submit" class="w-full px-4 py-2 rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            


        </div>
    )
}

export default LoginForm