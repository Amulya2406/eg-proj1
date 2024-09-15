document.addEventListener("DOMContentLoaded", async () => {
    const loader = document.getElementById('loader');
    const table = document.getElementById('postsTable');
    const tbody = table.querySelector('tbody');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();

        loader.style.display = 'none';
        table.style.display = 'table';

        tbody.innerHTML = posts.map(post => `
            <tr>
                <td>${post.title}</td>
                <td>${post.body}</td>
            </tr>
        `).join('');
    } catch (error) {
        loader.textContent = 'Failed to load posts';
    }
});