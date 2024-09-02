'use client'
import { type OpenPassport1StepInputs, OpenPassportQRcode, type OpenPassportVerifierReport } from '@openpassport/sdk'
import { config } from 'config'

export const QRCode = () => (
  <OpenPassportQRcode
    appName={config.appTitle}
    scope={config.scope}
    userId={config.userId}
    requirements={[['nationality', 'France'], ['older_than', '18']]}
    onSuccess={(proof: OpenPassport1StepInputs, report: OpenPassportVerifierReport) => {
      console.log({ proof, report })
    }}
    devMode={true}
    size={300}
  />
)
