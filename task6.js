const posts =[
    {title : 'Post One',body : "This is post one"},
    {title : 'Post Two',body : "This is post two"}
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`;
        });
    document.body.innerHTML = output;
    },1000);
}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error:Something went wrong');
            }
        },2000);
    });  
}

function deletePosts(post){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if(posts.length>0){
                const lastelement = posts.pop()
                resolve(lastelement);
            }else{
                reject('Array is empty now')
            }
        },1000)
    });
}

getPosts();
createPost({title:'post Three',body:"This is post three"})
createPost({title:'post Four',body:"This is post Four"})
.then(()=>{
    getPosts();
    deletePosts().then((deletedElement)=>{
        console.log(deletedElement)
        getPosts();
        deletePosts().then(()=>{
            getPosts();
            deletePosts().then(()=>{
                getPosts();
                deletePosts().then(()=>{
                    getPosts();
                    deletePosts().then(()=>{})
                    .catch((err)=>{
                        console.log('Inside catch block',err)
                    })
                })
            })
        })
    })
})

.catch(err => console.log(err));

// const Promise1 = Promise.resolve('hello worls');
// const Promise2 = 10;
// const Promise3 = new Promise((resolve,reject)=>
//     setTimeout(resolve,2000,'Goodbye')
// );
// Promise.all([Promise1,Promise2,Promise3]).then(values => console.log(values));