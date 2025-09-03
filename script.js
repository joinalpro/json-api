// loading the JSON data
const loadPost = ()=> {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then(response => response.json())
      .then(json => displayData(json))
};

const displayData = (posts) => {
    // 1. get the container and empty the container
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = "";
    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.innerHTML = `
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `
        postContainer.appendChild(postCard);
    });
}

