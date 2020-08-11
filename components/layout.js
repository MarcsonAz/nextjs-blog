import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import alertStyles from '../styles/alert.module.css'
import Link from 'next/link'
import cn from 'classnames'

const name = 'Marcson'
export const siteTitle = 'Next.js Sample Website'

export function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
        {home ? (
          <div className={`${styles.homeHeader}`}>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h3 className={utilStyles.headingXl}>{name}</h3>
          </div>
        ) : (
          <>
          <div className={`${styles.headerContent}`}>
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            <h2 className={utilStyles.headingLg}>
                <a className={utilStyles.colorInherit}>{name}</a>
            </h2>
          </div>
          </>

        )}
      </header>

      <main>{children}</main>
      <footer className={styles.footer}>
        <p> 
          <Link href="https://github.com/marcsonaz">
            <a>MarcsonAz</a>
          </Link> 
          applying 
          <Link href="https://nextjs.org/docs/getting-started">
            <a>NEXT.JS</a>
          </Link>  
          tutorial @2020
        </p>
      </footer>
    </div>
  )
}

export function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [alertStyles.success]: type === 'success',
        [alertStyles.error]: type === 'error'
      })}
    >
      {children}
    </div>
  )
}