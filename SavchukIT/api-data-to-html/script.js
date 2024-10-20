fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        const list = document.querySelector('.posts-list')
        data.forEach((item, index) => {
            //creating elements
            const post = document.createElement('li')
            const span = document.createElement('span')
            const postTitle = document.createElement('h4')
            const postText = document.createElement('p')
            const linkMore = document.createElement('a')
            //adding classes
            post.classList.add('posts-list-item')
            span.classList.add('post-index')
            postTitle.classList.add('post-title')
            postText.classList.add('post-text')
            linkMore.classList.add('post-link')
            //updating content
            span.innerHTML = index + 1
            postTitle.innerHTML = item.title
            postText.innerHTML = item.body
            linkMore.innerHTML = 'Read more'
            //inserting item to list
            post.append(span, postTitle, postText, linkMore)
            list.appendChild(post)
        })

    })

