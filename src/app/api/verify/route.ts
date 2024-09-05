import { type NextRequest, NextResponse } from 'next/server'
// import { verifier } from 'l/verifier'

export async function POST(req: NextRequest) {
  const proof = await req.json()
  // const { valid }  = await verifier.verify(proof)
  // return NextResponse.json(valid)
  return NextResponse.json(true)
}
