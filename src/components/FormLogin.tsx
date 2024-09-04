'use client'
import { verify } from 'a/verify'
// import { OpenPassportQRCode } from 'c/QRCode/OpenPassportQRCode'
import { useStore } from 'hooks/useStore'
import Cookies from 'js-cookie'
import { config } from 'l/config'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { type FormEvent, useEffect, useRef, useState } from 'react'

const OpenPassportQRCode = dynamic(
  () => import('c/QRCode/OpenPassportQRCode').then(({ OpenPassportQRCode }) => OpenPassportQRCode),
  { ssr: false },
)

export function FormLogin() {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  // state update with setProof is async
  // however state might not be updated when form is submitted by dispatching the submit event
  // we can to keep a reference to the proof state to be able to access the latest value when the form is submitted
  // const proofRef = useRef<OpenPassport1StepInputs | null>(null)
  // const [proof, setProof] = useState<OpenPassport1StepInputs | null>(null)

  const { proof } = useStore()
  useEffect(() => {
    if (proof !== null)
      formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
  }, [proof])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (proof === null) return
    try {
      const valid = await verify(proof)
      if (valid === false) return
      Cookies.set(config.cookie.name, 'true', { expires: config.cookie.expiresAfterDays })
      router.push('/protected')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <OpenPassportQRCode
        userId={crypto.randomUUID()}
      />
    </form>
  )
}
