import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bitcoin agora</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.moeda}>
          <Image src="/bitcoin-logo.png" alt="Bitcoin" width="64" height="64" />
          <h1 className={styles.title}>
            Bitcoin
          </h1>
        </div>

        <div className={styles.cotacao}>
          B$<input type="text" className={styles.campoValor} value="1" /> = R$ <input type="text" className={styles.campoValor} value="260 000,00"/>
        </div>
      </main>

      <footer className={styles.footer}>
      Usamos cookies e tecnologias semelhantes de acordo com a nossa Política de Privacidade. Ao continuar navegando, você concorda com essas condições.
      </footer>
    </div>
  )
}
