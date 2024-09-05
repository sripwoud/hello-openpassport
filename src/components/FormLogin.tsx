'use client'
import type { OpenPassport1StepInputs } from '@openpassport/sdk'
import { OpenPassportQRcode } from '@openpassport/sdk'
// import { verify } from 'a/verify'
import Cookies from 'js-cookie'
import { config } from 'l/config'
import { useRouter } from 'next/navigation'

export function FormLogin() {
  const router = useRouter()

  const onSuccess = async (proof: OpenPassport1StepInputs) => {
    const valid = await fetch('/api/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(proof),
    }).then(res => res.json())

    if (valid === true) {
      Cookies.set(config.cookie.name, 'true', { expires: config.cookie.expiresAfterDays })
      router.push('/protected')
    }
  }

  return (
    <OpenPassportQRcode
      {...config.openPassport}
      userId={crypto.randomUUID()}
      onSuccess={onSuccess}
    />
  )
}
