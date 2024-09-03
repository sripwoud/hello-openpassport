'use client'
import type { OpenPassport1StepInputs } from '@openpassport/sdk'
// import { verify } from 'a/verify'
import { QRCode } from 'c/QRCode'
import Cookies from 'js-cookie'
import { config } from 'l/config'
import { useRouter } from 'next/navigation'
import { type FormEvent, useEffect, useRef, useState } from 'react'

export function FormLogin() {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  // state update with setProof is async
  // however state might not be updated when form is submitted by dispatching the submit event
  // we can to keep a reference to the proof state to be able to access the latest value when the form is submitted
  const proofRef = useRef<OpenPassport1StepInputs | null>(null)
  const [proof, setProof] = useState<OpenPassport1StepInputs | null>(null)

  useEffect(() => {
    if (proof !== null) formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
  }, [proof])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (proof === null) return
    Cookies.set(config.cookie.name, 'true', { expires: config.cookie.expiresAfterDays })
    router.push('/protected')
  }

  const onSuccess = (proof: OpenPassport1StepInputs) => {
    proofRef.current = proof
    setProof(proof)
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <QRCode
        onSuccess={onSuccess}
      />
    </form>
  )
}
