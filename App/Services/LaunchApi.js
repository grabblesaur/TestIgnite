import Parse from './parse'

const create = () => {

  const login = (data) => {
    console.log('login')
    const { phone, password } = data
    return Parse.User.logIn(phone, password)
      .then(user => {
        return Promise.resolve(user.toJSON());
      }, err => {
        return Promise.resolve({ error: err });
      })
  }

  return { login }
}

export default { create }
