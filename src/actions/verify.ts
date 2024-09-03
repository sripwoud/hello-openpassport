'use server'
import type { OnSuccessCb } from 'l/types'
import { verifier } from 'l/verifier'

export const verify = async (inputs: Parameters<OnSuccessCb>[0]) => verifier.verify(inputs)
