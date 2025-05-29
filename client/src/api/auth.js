const baseURL = import.meta.env.VITE_API_BASE_URL;


export async function checkSession() {
	try {
		const res = await fetch('http://localhost:5000/api/auth/checkSession', {
			credentials: 'include'
		});
		return await res.json();
	} catch (error) {
		console.error('Error fetching session:', error);
		return { loggedIn: false };
	}
}

export async function logout() {
	try {
		await fetch('http://localhost:5000/api/auth/logout', {
			method: 'POST',
			credentials: 'include'
		});
		window.location.href = '/';
	} catch (error) {
		console.error('Error during logout:', error);
	}
}
