var postInput = document.getElementById('post-input');
var postButton = document.getElementById('post-button');
let postList = document.querySelector('#post-list');
let upvoteButton = document.querySelectorAll('.upvote');
let downvoteButton = document.querySelectorAll('.downvote');
let posts = [{ body: "Hello world", voteCount: 0, created_at: Date.now() }];

renderPosts(posts);

postButton.addEventListener('click', () => {
    if (postInput.value !== "") {
        // menambahkan post baru
        var newPost = {
            body: postInput.value,
            voteCount: 0,
            created_at: Date.now(),
        }
        postInput.value = "";
        posts.unshift(newPost);
        removeAllChildNodes(postList);
        renderPosts(posts);
    } else {
        alert("Post tidak boleh kosong!");
    }
});

function renderPosts(posts) {
    posts.forEach(post => {
        postList.append(createPostElement(post));
    });

    upvoteButton = document.querySelectorAll('.upvote');
    downvoteButton = document.querySelectorAll('.downvote');

    upvoteButton.forEach((upvote, i) => {
        upvoteButton[i].addEventListener('click', () => {
            console.log("up");
            posts[i].voteCount++;
            document.querySelectorAll('small')[i].innerText = posts[i].voteCount;
            if (posts[i].voteCount >= 0) {
                document.querySelectorAll('small')[i].classList.remove('text-danger');
                document.querySelectorAll('small')[i].classList.add('text-success');
            } else {
                document.querySelectorAll('small')[i].classList.remove('text-success');
                document.querySelectorAll('small')[i].classList.add('text-danger');
            }
            console.log(posts[i].voteCount);
        });
    });
    
    downvoteButton.forEach((downvote, i) => {
        downvoteButton[i].addEventListener('click', () => {
            console.log("down");
            posts[i].voteCount--;
            document.querySelectorAll('small')[i].innerText = posts[i].voteCount;
            if (posts[i].voteCount >= 0) {
                document.querySelectorAll('small')[i].classList.remove('text-danger');
                document.querySelectorAll('small')[i].classList.add('text-success');
            } else {
                document.querySelectorAll('small')[i].classList.remove('text-success');
                document.querySelectorAll('small')[i].classList.add('text-danger');
            }
            console.log(posts[i].voteCount);
        });
    });
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createPostElement(post) {
    // bs5 card class
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('mb-3');
    card.classList.add('border-0');
    card.classList.add('shadow');

    // bs5 card-body class
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    // post body
    let h3 = document.createElement('h3');
    h3.innerText = post.body;
    
    // post created_at
    let small = document.createElement('p');
    small.classList.add('text-muted');
    small.innerText = `Posted at: ${post.created_at}`;

    let upvote = document.createElement('button');
    upvote.classList.add('btn');
    upvote.classList.add('btn-sm');
    upvote.classList.add('upvote');
    upvote.classList.add('btn-outline-secondary');
    upvote.innerText = "^";

    let downvote = document.createElement('button');
    downvote.classList.add('btn');
    downvote.classList.add('btn-sm');
    downvote.classList.add('downvote');
    downvote.classList.add('btn-outline-secondary');
    downvote.innerText = "v";

    let voteCount = document.createElement('small');
    voteCount.classList.add('h5');
    voteCount.classList.add('mx-3');
    voteCount.innerText = post.voteCount;
    
    // Append to one component
    card.appendChild(cardBody);
    cardBody.appendChild(h3);
    cardBody.appendChild(small);
    cardBody.appendChild(upvote);
    cardBody.appendChild(downvote);
    cardBody.appendChild(voteCount);
    
    return card;
}