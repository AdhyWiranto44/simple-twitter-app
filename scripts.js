var postInput = document.getElementById('post-input');
var postButton = document.getElementById('post-button');
let postList = document.querySelector('#post-list');
let posts = [];

postButton.addEventListener('click', () => {
    if (postInput.value !== "") {
        // menambahkan post baru
        var newPost = {
            body: postInput.value,
            created_at: Date.now()
        }
        postInput.value = "";
        posts.unshift(newPost);
        removeAllChildNodes(postList);
        posts.forEach(post => {
            postList.append(createPostElement(post));
        });
    } else {
        alert("Post tidak boleh kosong!");
    }
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

var createPostElement = (post) => {
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
    
    // Append to one component
    card.appendChild(cardBody);
    cardBody.appendChild(h3);
    cardBody.appendChild(small);
    
    return card;
}