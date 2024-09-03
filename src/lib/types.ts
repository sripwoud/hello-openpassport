import type { OpenPassportQRcode } from '@openpassport/sdk'
import type { ComponentProps } from 'react'

export type OpenPassportQRcodeProps = ComponentProps<typeof OpenPassportQRcode>
export type OnSuccessCb = OpenPassportQRcodeProps['onSuccess']
