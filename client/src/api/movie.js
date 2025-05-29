

export async function getShowing() {
    try {
        const res = await fetch('http://localhost:5000/api/movie/getShowing', {
            credentials: 'include'
        });

        // Lấy dữ liệu JSON từ response
        const data = await res.json();
        
        // In kết quả ra console
        console.log('Dữ liệu từ API:', data);

        return data;
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
        return { imageUrls: false };
    }
}
