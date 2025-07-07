export const logout = (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
};