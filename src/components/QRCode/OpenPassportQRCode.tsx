import type { OpenPassport1StepInputs } from '@openpassport/sdk'
import { useProofSocket } from 'hooks/useProofSocket'
import { useQRCode } from 'hooks/useQRCode'
import { ProofStep } from 'l/constants'
import { type FC, useState } from 'react'
import { BounceLoader } from 'react-spinners'
import LED from './LED'
import { ProofAnimation } from './ProofAnimation'
import { QRCodeDisplay } from './QRCodeDisplay'

interface OpenPassportQRcodeProps {
  userId: string
}

export const OpenPassportQRCode: FC<OpenPassportQRcodeProps> = ({
  userId,
}) => {
  const [sessionId, setSessionId] = useState(crypto.randomUUID())
  const [showAnimation, setShowAnimation] = useState(false)

  const qrElement = useQRCode({ userId, sessionId })
  const { proofStep, connectionStatus } = useProofSocket(sessionId)

  const handleAnimationComplete = () => {
    setShowAnimation(false)
    setSessionId(crypto.randomUUID())
  }

  const renderProofStatus = () => {
    switch (proofStep) {
      case ProofStep.WAITING_FOR_MOBILE:
      case ProofStep.MOBILE_CONNECTED:
        return qrElement ? <QRCodeDisplay qrElement={qrElement} /> : null
      case ProofStep.PROOF_GENERATION_STARTED:
        return <BounceLoader loading={true} size={200} color='#94FBAB' />
      case ProofStep.PROOF_GENERATED:
        return showAnimation
          ? <ProofAnimation onComplete={handleAnimationComplete} />
          : qrElement
          ? <QRCodeDisplay qrElement={qrElement} />
          : null
      default:
        return null
    }
  }

  return (
    <div className='flex flex-col items-center'>
      <LED connectionStatus={connectionStatus} />
      <div className='w-[300px] h-[300px] flex items-center justify-center'>
        {renderProofStatus()}
      </div>
    </div>
  )
}
