import type { OpenPassportQRcode } from '@openpassport/sdk'
import type { SocketStatus } from 'l/constants'
import type { randomUUID } from 'node:crypto'
import type { ComponentProps } from 'react'

export type OpenPassportQRcodeProps = ComponentProps<typeof OpenPassportQRcode>
export type OnSuccessCb = OpenPassportQRcodeProps['onSuccess']
export type Id = ReturnType<typeof randomUUID>

export type ConnectionStatus = SocketStatus.DISCONNECTED | SocketStatus.WEB_CONNECTED | SocketStatus.MOBILE_CONNECTED
