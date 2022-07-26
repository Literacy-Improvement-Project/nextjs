import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Seo from '../components/seo/Seo'
import SearchWord from '../components/organism/SearchWordMeaning/SearchWord'

export default function Home() {
  return (
    <div className={`${styles.container} ${styles.scroll_container}`}>
      <Seo title="Kotudy" subtitle="문해력 향상을 위해"></Seo>

      <ul>
        <li>
          <a name="searchWords"></a>
          <SearchWord></SearchWord>
        </li>
      </ul>
    </div>
  )
}
