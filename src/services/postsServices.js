function getAllPostsFromRest() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        response
          .json()
          .then((data) => {
            console.log(data)
            resolve(data)
          })
          .catch((error) => {
            console.error('Error fetching posts:', error)
            reject(error)
          })
      })
      .catch((error) => {
        console.error('Error fetching posts:', error)
        reject(error)
      })
  })
}
function getPostsCountFromRest() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        response
          .json()
          .then((data) => {
            resolve(data.length)
          })
          .catch((error) => {
            console.error('Error fetching posts:', error)
            reject(error)
          })
      })
      .catch((error) => {
        console.error('Error fetching posts:', error)
        reject(error)
      })
  })
}

export { getAllPostsFromRest, getPostsCountFromRest }
/*
async function getAllUsersFromRestAsync() {
  try {
  let response = await fetch('https://jsonplaceholder.typicode.com/users')
  let data = await response.json();
  console.log(data);
  } catch (error) {
    console.error('Error fetching users:', error);
  }

}
  */
