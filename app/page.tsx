import { TempleAura } from "./TempleAura";

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <TempleAura />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">TEMPLE ONLINE SERVICE</p>
          <h1 id="hero-title">宮廟官網，<br />讓信仰隨時在身旁</h1>
          <p className="hero-copy">收驚、普渡、發財金與風水諮詢，<br />一個地方安心預約、誠心完成。</p>
          <p className="hero-tagline">Faith Near, Heart at Ease.</p>
          <a className="button button-primary" href="#cta">免費下載 App <span aria-hidden="true">→</span></a>
        </div>
        <div className="hero-note">敬天．安心．有求必應</div>
      </section>

      <section className="pain section" aria-labelledby="pain-title">
        <p className="eyebrow centered">WHEN YOU NEED A LITTLE PEACE</p>
        <h2 id="pain-title">需要一份心安時，<br />不必再四處尋找。</h2>
        <p className="lead">想收驚卻不知道哪間廟能服務？想安排普渡、詢問發財金或風水，<br className="desktop" />卻總得配合開放時間與繁瑣流程。把心願交給我們，事情可以更簡單。</p>
        <div className="pain-chips"><span>找不到合適的宮廟</span><span>電話預約總是撲空</span><span>心事無處安放</span></div>
      </section>

      <section className="benefits section" aria-labelledby="benefits-title">
        <div className="section-heading"><p className="eyebrow">ONE PLACE, THREE KINDS OF PEACE</p><h2 id="benefits-title">把信仰的事，<br />好好安排。</h2></div>
        <div className="benefit-grid">
          <article className="benefit-card"><div className="icon-sprite icon-one" aria-hidden="true" /><p className="number">01</p><h3>線上收驚</h3><p>不用奔波，在安心的引導下完成祈福儀式，讓心慢慢安定下來。</p></article>
          <article className="benefit-card"><div className="icon-sprite icon-two" aria-hidden="true" /><p className="number">02</p><h3>快速預約</h3><p>選擇服務與時段，幾分鐘就能完成預約，把時間留給自己與家人。</p></article>
          <article className="benefit-card"><div className="icon-sprite icon-three" aria-hidden="true" /><p className="number">03</p><h3>即刻心靈寄託</h3><p>需要支持的時候，隨時找到適合的宮廟服務，讓信念陪伴你前行。</p></article>
        </div>
      </section>

      <section className="testimonials section" aria-labelledby="quote-title">
        <p className="eyebrow centered">FROM THE COMMUNITY</p>
        <h2 id="quote-title">大家說，心安<br />就是最好的安排。</h2>
        <div className="quote-grid">
          <figure><blockquote>「第一次線上幫孩子收驚，流程清楚又很溫暖，真的放心很多。」</blockquote><figcaption>林小姐 <span>・ 台中</span></figcaption></figure>
          <figure className="featured"><blockquote>「不用再一直打電話問時間，預約完成後就知道該怎麼準備，很貼心。」</blockquote><figcaption>陳先生 <span>・ 新北</span></figcaption></figure>
          <figure><blockquote>「遇到低潮時能快速找到可以請益的宮廟，像是多了一個安心的出口。」</blockquote><figcaption>黃小姐 <span>・ 高雄</span></figcaption></figure>
        </div>
      </section>

      <section id="cta" className="cta">
        <p className="eyebrow">START WITH A PEACEFUL HEART</p>
        <h2>今天，就為心安<br />留一個位置。</h2>
        <p>下載宮廟官網 App，快速找到適合你的服務與信仰陪伴。</p>
        <a className="button button-light" href="mailto:service@example.com">免費下載 App <span aria-hidden="true">→</span></a>
        <p className="fine-print">服務上線通知與最新宮廟資訊，將由 App 提供。</p>
      </section>
    </main>
  );
}
