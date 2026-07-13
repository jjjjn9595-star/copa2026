const matches = [
  {
    day: "15",
    month: "JUN",
    weekday: "SEG",
    home: "Brasil",
    homeFlag: "🇧🇷",
    away: "Camarões",
    awayFlag: "🇨🇲",
    time: "18:00",
    venue: "Estádio a confirmar",
  },
  {
    day: "20",
    month: "JUN",
    weekday: "SÁB",
    home: "Brasil",
    homeFlag: "🇧🇷",
    away: "Croácia",
    awayFlag: "🇭🇷",
    time: "21:00",
    venue: "Estádio a confirmar",
  },
];

const standings = [
  ["Brasil", "🇧🇷"],
  ["Croácia", "🇭🇷"],
  ["Camarões", "🇨🇲"],
  ["A definir", "◌"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Copa 2026 — início">
          <span className="brand-ball" aria-hidden="true">◆</span>
          <span>COPA <strong>2026</strong></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#jogos">Jogos</a>
          <a href="#grupo">Grupo</a>
          <a href="#noticias">Notícias</a>
        </nav>
        <span className="live-pill"><i /> Central da Seleção</span>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span>RUMO AO HEXA</span><b>•</b> MUNDIAL 2026</div>
          <h1>A torcida começa <em>agora.</em></h1>
          <p>
            Acompanhe a Seleção Brasileira, confira os próximos confrontos e
            fique por dentro de tudo na fase de grupos.
          </p>
          <a className="primary-button" href="#jogos">Ver próximos jogos <span>↓</span></a>
        </div>

        <div className="hero-art" aria-label="Ilustração abstrata inspirada na camisa da Seleção Brasileira">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="shirt">
            <div className="shirt-collar" />
            <div className="crest">CBF<small>BRASIL</small></div>
            <strong>10</strong>
          </div>
          <span className="hero-star star-one">★</span>
          <span className="hero-star star-two">★</span>
          <span className="hero-star star-three">★</span>
          <span className="hero-number">26</span>
        </div>
      </section>

      <section className="content-section" id="jogos">
        <div className="section-heading">
          <div>
            <span className="kicker">FASE DE GRUPOS</span>
            <h2>Próximos jogos</h2>
          </div>
          <p>Horários de Brasília</p>
        </div>

        <div className="matches-grid">
          {matches.map((match, index) => (
            <article className="match-card" key={match.away}>
              <div className="date-block">
                <span>{match.weekday}</span>
                <strong>{match.day}</strong>
                <span>{match.month}</span>
              </div>
              <div className="match-info">
                <span className="round">GRUPO • RODADA {index + 1}</span>
                <div className="teams">
                  <div><span className="flag">{match.homeFlag}</span><strong>{match.home}</strong></div>
                  <span className="versus">VS</span>
                  <div><span className="flag">{match.awayFlag}</span><strong>{match.away}</strong></div>
                </div>
                <div className="match-meta">
                  <span>◷ {match.time}</span>
                  <span>⌖ {match.venue}</span>
                </div>
              </div>
              <span className="card-index">0{index + 1}</span>
            </article>
          ))}
        </div>
        <p className="schedule-note">Calendário demonstrativo baseado nas informações fornecidas. Consulte os canais oficiais para datas, locais e horários confirmados.</p>
      </section>

      <section className="group-section" id="grupo">
        <div className="group-intro">
          <span className="kicker light">CLASSIFICAÇÃO</span>
          <h2>O caminho do<br />Brasil no grupo</h2>
          <p>Os dois primeiros colocados avançam para a próxima fase.</p>
          <div className="legend"><span><i className="qualified" /> Classificado</span><span><i /> Eliminado</span></div>
        </div>
        <div className="standings-card">
          <div className="standings-head"><span>GRUPO A</span><span>J &nbsp; V &nbsp; SG &nbsp; PTS</span></div>
          {standings.map(([team, flag], index) => (
            <div className="standing-row" key={team}>
              <span className="position">{index + 1}</span>
              <span className="team-name"><b>{flag}</b> {team}</span>
              <span className="stats">0 &nbsp; 0 &nbsp; 0 &nbsp; <strong>0</strong></span>
            </div>
          ))}
          <div className="standings-footer"><span>Atualização após cada partida</span><span className="pulse" /> AO VIVO</div>
        </div>
      </section>

      <section className="news-section" id="noticias">
        <div>
          <span className="kicker">NOTÍCIAS DA SELEÇÃO</span>
          <h2>Não perca nenhum lance.</h2>
          <p>Programação, resultados e novidades reunidos em um só lugar.</p>
        </div>
        <a href="#jogos" className="outline-button">Consultar agenda</a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio"><span className="brand-ball">◆</span><span>COPA <strong>2026</strong></span></a>
        <p>Site demonstrativo não oficial. Feito para quem vive futebol.</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
