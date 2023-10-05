import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const FirebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
}
// if a Firebase instance doesn't exist, create one
const app = initializeApp(FirebaseCredentials)
export const db = getFirestore(app)

export default app
