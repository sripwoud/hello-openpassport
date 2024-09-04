'use server'
import type { OpenPassport1StepInputs } from '@openpassport/sdk'

export const verify = async (inputs: OpenPassport1StepInputs) => {
  try {
    // TODO: perform a real verification of the proof
    const valid = await Promise.resolve({ valid: true })
    return valid
  } catch (error) {
    console.log(error)
    return false
  }
}
