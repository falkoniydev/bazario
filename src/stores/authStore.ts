import { defineStore } from 'pinia'
import axios from 'axios'
import type { RegisteredUser } from '@/types/userTypes'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    token: localStorage.getItem('authToken') || null,
    registeredUsers: JSON.parse(
      localStorage.getItem('registeredUsers') || '[]',
    ) as RegisteredUser[],
    fakeApiUsers: [
      { username: 'johnd', password: 'm38rmF$' },
      { username: 'kevinryan', password: 'kev02937@' },
      { username: 'donero', password: 'ewedon' },
      { username: 'david_r', password: '3478*#54' },
    ] as { username: string; password: string }[],
    error: '',
    loading: false,
  }),
  actions: {
    register(username: string, email: string, password: string) {
      this.loading = true
      setTimeout(() => {
        const randomApiUser =
          this.fakeApiUsers[Math.floor(Math.random() * this.fakeApiUsers.length)]

        const newUser: RegisteredUser = {
          username,
          email,
          password,
          apiUser: randomApiUser,
        }

        this.registeredUsers.push(newUser)
        localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers))

        this.loading = false
      }, 1000)
    },

    async login(username: string, password: string) {
      this.loading = true
      this.error = ''
      try {
        const user = this.registeredUsers.find(
          (u) => u.username === username && u.password === password,
        )

        if (user) {
          const response = await axios.post('https://fakestoreapi.com/auth/login', {
            username: user.apiUser.username,
            password: user.apiUser.password,
          })

          this.token = response.data.token
          localStorage.setItem('authToken', this.token as string)

          axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
        } else {
          throw new Error('Login yoki parol xato!')
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          this.error = err.message || 'Login yoki parol xato!'
        } else {
          this.error = 'Noma’lum xatolik yuz berdi!'
        }
      } finally {
        this.loading = false
      }
    },
    logout() {
      this.token = null
      localStorage.removeItem('authToken')
      delete axios.defaults.headers.common['Authorization']
    },
    deleteInfo() {
      localStorage.removeItem('registeredUsers')
      this.registeredUsers = []
    },
  },
})
