const isDevelopment = process.env.NODE_ENV !== 'production';
export const backUrl = !isDevelopment ? 'http://15.164.103.236/' : 'http://localhost:80';
