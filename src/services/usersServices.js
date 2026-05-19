import { appStore } from 'src/stores/example-store.js'

function getAllUsersFromRest() {
  return new Promise((resolve, reject) => {
    if (appStore.users.length > 0) {
      resolve(appStore.users)
      return
    } else {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          response
            .json()
            .then((data) => {
              console.log(data)
              appStore.users = data
              resolve(data)
            })
            .catch((error) => {
              console.error('Error fetching users:', error)
              reject(error)
            })
        })
        .catch((error) => {
          console.error('Error fetching users:', error)
          reject(error)
        })
    }
  })
}
function getUserById(id) {
  console.log('getUserById', id)
  console.log(appStore.users.length)
  const user = appStore.users.find((user) => user.id == id)
  return user
}
export { getAllUsersFromRest, getUserById }
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
