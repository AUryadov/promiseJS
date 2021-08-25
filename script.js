// Async Event loop
// console.log("Start..."); // Sync // Block

// //for (let i = 0; i < 5_000_000_000; i++) {} // Sync blocking

// console.log("Start 2...");

// setTimeout(() => {
//     console.log("Inside set timeout after 5 sec"); // Async // Non-blocking
// }, 5000);

// setTimeout(() => {
//     console.log("Inside set timeout after 0 sec"); // Async // Non-blocking
// }, 0);

// console.log("End");

// Promise
// console.log("Requesting data...");

// setTimeout(() => {
//     console.log("Preparing data for 'Alex'");

//     const user = {
//         id: 1,
//         name: "Alex",
//         age: 29,
//     };

//     setTimeout(() => {
//         console.log(`Requesting posts for id: ${user.id}`);
//         const posts = {
//             userId: 1,
//             posts: [
//                 {
//                     id: 1,
//                     title: "Post 1",
//                     body: "Some text",
//                 },
//             ],
//         };

//         setTimeout(() => {
//             console.log(`Requesting comments for post with id: ${posts.posts}`);

//             const comment = { id: 2, body: "Text" };
//             console.log(comment);
//         }, 2000);
//     }, 2000);
// }, 2000);

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Preparing data for 'Alex'");

//         const user = {
//             id: 1,
//             name: "Alex",
//             age: 29,
//             hasError: true,
//         };
//         if (!user.hasError) {
//             resolve(user);
//         } else {
//             reject("Has error");
//         }
//     }, 2000);
// });

// p.then((user) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Requesting posts for id: ${user.id}`);

//             const posts = {
//                 userId: 1,
//                 posts: [
//                     {
//                         id: 1,
//                         title: "Post 1",
//                         body: "Some text",
//                     },
//                 ],
//             };

//             resolve(posts);
//         }, 2000);
//     });
// })
//     .then((posts) => {
//         console.log("Promise 2 resolved: ", posts);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log(
//                     `Requesting comments for post with id: ${posts.posts}`
//                 );

//                 const comment = { id: 2, body: "Text" };
//                 resolve(comment);
//                 //reject("Server down");
//             }, 2000);
//         });
//     })
//     .then((cmt) => {
//         cmt.modified = true;
//         return cmt;
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("Finally"));

// delay(3).then((sec) => console.log(`After ${sec} sec`));
// delay(5).then((sec) => console.log(`After ${sec} sec`));
// Promise.all([delay(3), delay(1), delay(5)]).then((res) =>
//     console.log(res.sort())
// );
// Promise.race([delay(3), delay(1), delay(5)]).then((res) => console.log(res));

// Async await

// const delay = (sec) =>
//     new Promise((resolve) => setTimeout(() => resolve(sec), sec * 1000));

// async function loadUsers() {
//     const data = await delay(3);
//     console.log(data);
// }

// loadUsers();

const url = "https://jsonplaceholder.typicode.com/posts";

// function fetchPost(url) {
//     fetch(url)
//         .then((res) => {
//             if (res.ok) {
//                 return res.json();
//             } else {
//                 throw new Error("Xeta bas verdi!");
//             }
//         })
//         .then((data) => console.log(data))
//         .catch((err) => console.log(err));
// }

async function fetchPosts(url) {
    try {
        const res = await fetch(url);
        if (res.ok) {
            const data = await res.json();
            console.log(data);
        } else {
            throw new Error("Xeta bas verdi");
        }
    } catch (e) {
        console.log(e);
    }
}

fetchPosts(url);
