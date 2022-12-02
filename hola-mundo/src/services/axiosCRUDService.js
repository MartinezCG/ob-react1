import axios from 'axios'

/**
 *  Login method to reqres endpoint
 * @param { string } email 
 * @param { string } password 
 */
export const login = (email, password) => {

        let body = {
            email,
            password
        }

        // Returns the promise with a promise
        return axios.post('https://reqres.in/api/login', body )
}

// Obtain all users

export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users')
}

// Obtain All paged users

export const getAllPagedUsers = (page) => {
    return axios.get(`https://reqres.in/api/users=${page}`)
}

// Obtain user by ID

export const getUserByID = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`)
}

// Create User
export const createUser = (name, job) => {
    let body = {
        name,
        job
    }

    // Returns the promise with a promise
    return axios.post('https://reqres.in/api/users', body )
}

// Update User
export const updateUser = (id, name, job) => {
    let body = {
        name,
        job
    }

    // Returns the promise with a promise
    return axios.put(`https://reqres.in/api/users/${id}`, body )
}


// Delete User
export const deleteUser = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`)
}