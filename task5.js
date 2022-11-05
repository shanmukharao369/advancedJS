const posts =[
    {title : 'Post One',body : "This is post one",createdAt:new Date().getTime()},
    {title : 'Post Two',body : "This is post two",createdAt:new Date().getTime()}
];

// function getPosts(){
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post,index) => {
//             output += `<li>${post.title}</li>`;
//         });
//     document.body.innerHTML = output;
//     },1000);
// }
let intervalId = 0;

function getPosts(){
    clearInterval(intervalId);
    intervalId = setInterval(()=>{
        let output='';
        for(let i=0;i<posts.length;i++){
            output+=`<li>${posts[i].title} - last upadated ${(new Date().getTime() - posts[i].createdAt)/1000} seconds ago</li>`
        }
        document.body.innerHTML=output;
    },1000)
    
}
function createPost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
    },2000);
}

function create4thPost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt:new Date().getTime()});
        callback()
    },3000);
    
}
//getPosts();
createPost({title:'post Three',body:"This is post three"},getPosts)
create4thPost({title : 'Post Four',body : "This is post Four",},getPosts)

var timer;
var count=0
function lastEditedInSecondsAgo(){
    count=0;
    clearInterval(timer)
    timer=setInterval(()=>{
        count++;
        console.log(count)
    },5000);
}

lastEditedInSecondsAgo()