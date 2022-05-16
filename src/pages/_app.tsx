import { AppProps } from 'next/app'
import '../styles/home.css'
//import LeaderLine from 'leader-line-new'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
