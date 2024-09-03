import { OpenPassportQRcode } from '@openpassport/sdk'
import { config } from 'l/config'
import type { OnSuccessCb } from 'l/types'

export const QRCode = ({ onSuccess }: { onSuccess: OnSuccessCb }) => (
  <OpenPassportQRcode
    {...config.openPassport}
    onSuccess={onSuccess}
  />
)
