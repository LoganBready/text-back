import { clerkSetup } from '@clerk/testing/playwright'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../../.env.local') })

export default async function globalSetup() {
  await clerkSetup()
}
