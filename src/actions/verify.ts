'use server'
import type { OpenPassport1StepInputs } from '@openpassport/sdk'
import { verifier } from 'l/verifier'

export const verify = async (inputs: OpenPassport1StepInputs) => verifier.verify(inputs)
