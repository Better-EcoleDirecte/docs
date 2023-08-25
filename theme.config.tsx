import React from 'react'
import { PartialDocsThemeConfig } from './src/theme/constants'
import { useConfig } from './src/theme'
import { getGitIssueUrl } from './src/theme/utils'
import { useRouter } from 'next/router'

const LOCALE = 'fr-fr'

const config: PartialDocsThemeConfig = {
  logo: <span>BetterEcoleDirecte</span>,
  project: {
    link: 'https://github.com/better-ecoledirecte',
  },
  docsRepositoryBase: 'https://github.com/better-ecoledirecte/docs',
  primaryHue: {
    dark: 40,
    light: 40
  },
  toc: {
    float: true,
    title: 'Sur cette page'
  },
  footer: {
    text: 'MIT 2023 © BetterEcoleDirecte'
  },
  editLink: {
    text: 'Modifier cette page'
  },
  notFound: {
    content: 'Signaler une erreur, un problème',
  },
  feedback: {
    content: 'Une question ? Faites-nous un retour !',
    useLink() {
      const config = useConfig()
      return getGitIssueUrl({
        labels: config.feedback.labels,
        repository: config.docsRepositoryBase,
        title: `Feedback pour “${config.title}”`
      })
    }
  },

  gitTimestamp: function GitTimestamp({ timestamp }) {
    const { locale = LOCALE } = useRouter()
    return (
      <>
        Dernière mise à jours le{' '}
        <time dateTime={timestamp.toISOString()}>
          {timestamp.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </time>
      </>
    )
  },
  useNextSeoProps: () => ({ titleTemplate: '%s – BetterEcoleDirecte' }),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#222129" />
      <meta httpEquiv="Content-Language" content="fr" />
      <meta name="description" content="BetterEcoleDirecte: documentation et base de connaissance du projet" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@shuding_" />
      <meta property="og:title" content="BetterEcoleDirecte: documentation et base de connaissance du projet" />
      <meta property="og:description" content="BetterEcoleDirecte: documentation et base de connaissance du projet" />
      <meta name="apple-mobile-web-app-title" content="BetterEcoleDirecte" />
    </>
  ),
}

export default config