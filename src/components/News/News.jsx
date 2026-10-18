import s from './News.module.css'

export function News() {
  return (
    <div className={s.newsBlock} id="news">
      <div className={s.newsInfo}>
        <h2 className={s.newsTitle}>Следите за новостями</h2>
        <p className={s.newsDesc}>Подпишитесь на рассылку чтобы первым узнать о новинках!</p>

        <form className={s.newsForm}>
          <input type="email" className={s.newsInput} placeholder="Введите email" />
          <button type="submit" className={s.newsBtn}>Подписаться</button>
        </form>
      </div>

      <div className={s.newsImg}>
        <img src="/images/news.png" alt="Новости" />
      </div>
    </div>
  )
}