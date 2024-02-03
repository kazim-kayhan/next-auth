/**
 * A list of public routes
 * @type {string[]} publicRoutes
 */
export const publicRoutes = ['/'];

/**
 * A list of auth routes
 * These routes will redirect logged in users to the home dashboard page
 * @type {string[]} authRoutes
 */
export const privateRoutes = ['/auth/login', '/auth/register'];

/**
 * The prefix for auth routes
 * Routes that start with this prefix are used for authentication purposes
 * @type {string[]} apiAuthPrefix
 */
export const apiAuthPrefix = '/api/auth';

/**
 * The default redirect route for authenticated users
 * @type {string[]} DEFAULT_REDIRECT
 */
export const DEFAULT_REDIRECT = '/dashboard';
