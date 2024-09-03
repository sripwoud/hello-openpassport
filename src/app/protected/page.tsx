'use client'
import Cookies from 'js-cookie'
import { config } from 'l/config'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ProtectedPage() {
  const router = useRouter()

  useEffect(() => {
    const authorized = Cookies.get(config.cookie.name)
    console.log({ authorized })
    if (authorized !== 'true') router.push('/')
  }, [router])

  return <h1>Protected Page</h1>
}
