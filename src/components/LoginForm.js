import { useState } from "react"
import { useRouter } from "next/router"
import Head from "next/head"

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      })

      if (response.status === 200) {
        router.push('/dashboard')
      } else {
        const data = await response.json()
        setError(data.message)
      }
    } catch (error) {
      console.error('Error: ', error)
    }
  }

  return (
    <>
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by Afiocca. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>
      <div className="grid place-items-center h-screen">
        <div className="form-bg text-center">
          <h1 className="text-xl font-bold my-4 text-white">Enter the details</h1>
          <form className="flex flex-col gap-3" onSubmit={handleLogin}>
            <input type="text" placeholder="Username" className="focus:outline-none focus:border-blue-500" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" className="focus:outline-none focus:border-blue-500"
              value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold cursor-pointer px-6 py-2" type="submit">Login</button>
            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
            )}
          </form>
        </div>
      </div>
    </>
  )
}
