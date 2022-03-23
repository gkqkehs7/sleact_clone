const isDevelopment = process.env.NODE_ENV !== 'production';
export const backUrl = isDevelopment ? 'http://localhost:3095' : '';
