import SiteNav from "@/components/site-nav";
import HeroVideo from "@/components/hero-video";
import CircularTestimonials from "@/components/circular-testimonials";
import { MagicText } from "@/components/ui/magic-text";

const KO = { fontFamily: "var(--font-ko)" } as React.CSSProperties;

const characters = [
  {
    quote: "차갑고 날카로운 외면 아래, 가장 깊은 감정을 노래에 담는 보컬. 뱀의 직감과 침묵을 지닌 The Strays의 중심.",
    name: "클로에",
    designation: "// VOCAL · 뱀 수인",
    src: "/characters/char-chloe.jpeg",
  },
  {
    quote: "부드럽고 온화한 성격 속에 흔들리지 않는 리듬을 품은 건반 연주자. 양의 온기로 밴드의 균형을 지킨다.",
    name: "승아",
    designation: "// KEYBOARD · 양 수인",
    src: "/characters/char-seungah.jpg",
  },
  {
    quote: "대지처럼 묵직하고 흔들림 없는 박자로 밴드를 이끄는 드러머. 소의 인내와 힘이 리듬 속에 살아있다.",
    name: "김주호",
    designation: "// DRUMS · 소 수인",
    src: "/characters/char-drum.jpeg",
  },
  {
    quote: "낮고 강렬한 베이스 라인으로 무대를 장악하는 연주자. 호랑이의 야성과 자존이 손끝에서 울린다.",
    name: "야미",
    designation: "// BASS · 호랑이 수인",
    src: "/characters/char-bass.jpg",
  },
  {
    quote: "빠르고 유연한 손놀림으로 멜로디를 유영하는 기타리스트. 원숭이의 재치와 즉흥성이 연주에 생기를 더한다.",
    name: "이원영",
    designation: "// GUITAR · 원숭이 수인",
    src: "/characters/char-guitar.png",
  },
];

const worldText1 = "1000년 전, 조선 땅에는 12명의 수호신이 있었다. 각각 12간지의 동물을 상징하는 이 신들은 조선 팔도 곳곳에 흩어져 땅과 사람 사이의 균형을 유지했다. 그러나 조선 중기, 권력을 가진 12개의 가문이 수호신의 힘을 착취하기 시작했다. 수호신들이 하나씩 무너지던 날, 하늘이 분노했다.";
const worldText2 = "하늘은 12가문에게 저주를 내렸다. 각 가문의 장남 혈통에서 태어나는 자녀는 반드시 해당 수호신의 동물 형상을 몸에 지닌 채 태어난다. 사람의 모습이지만 동물의 흔적이 신체에 새겨진 수인의 형태로. 이 저주는 매 생마다 반복된다.";

const s = {
  sectionInner: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "clamp(80px,10vw,140px) clamp(20px,5vw,60px)",
  } as React.CSSProperties,
  label: {
    display: "block",
    fontFamily: "var(--font-cta)",
    fontSize: "11px",
    fontWeight: 400,
    letterSpacing: "3px",
    color: "var(--light-50)",
    marginBottom: "12px",
    textTransform: "uppercase" as const,
  },
  title: {
    fontFamily: "var(--font-cta)",
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    fontWeight: 900,
    color: "var(--gold)",
    letterSpacing: "0.05em",
    textTransform: "uppercase" as const,
    lineHeight: 1,
  },
};

export default function Home() {
  return (
    <>
      <SiteNav />

      {/* ─── 01. HERO ─── */}
      <section
        id="hero"
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <HeroVideo />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <p style={{ fontFamily: "var(--font-cta)", fontSize: "11px", letterSpacing: "4px", color: "var(--light-50)", textTransform: "uppercase" }}>
            // MUSIC VIDEO
          </p>
          <h1 style={{ fontFamily: "'Barlow', sans-serif", fontSize: "clamp(3.5rem,10vw,8rem)", fontWeight: 900, color: "var(--gold)", letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1 }}>
            THE STRAYS
          </h1>
          <a
            href="#story"
            style={{
              display: "inline-flex",
              alignItems: "center",
              border: "2px solid var(--gold)",
              color: "var(--gold)",
              background: "transparent",
              fontFamily: "var(--font-cta)",
              fontSize: "12px",
              fontWeight: 900,
              letterSpacing: "4px",
              textTransform: "uppercase",
              padding: "14px 32px",
              transition: "background 0.3s, color 0.3s",
              cursor: "pointer",
            }}
          >
            WATCH NOW
          </a>
        </div>
      </section>

      {/* ─── 02. STORY ─── */}
      <section id="story" style={{ background: "linear-gradient(to bottom, #000, var(--bg))" }}>
        <div style={s.sectionInner}>
          <div style={{ marginBottom: "60px" }}>
            <span style={s.label}>// STORY</span>
            <h2 style={s.title}>CHARACTERS</h2>
          </div>

          <div style={KO}>
          <CircularTestimonials
            testimonials={characters}
            autoplay={true}
            colors={{
              name: "#F24C00",
              designation: "rgba(242,240,228,0.5)",
              testimony: "rgba(242,240,228,0.75)",
              arrowBackground: "#141414",
              arrowForeground: "#F2F0E4",
              arrowHoverBackground: "#F24C00",
            }}
          />
          </div>

          {/* 세계관 */}
          <div style={{ borderTop: "1px solid var(--gold-20)", paddingTop: "60px", maxWidth: "780px", marginTop: "80px", fontFamily: "var(--font-ko)" }}>
            <span style={s.label}>// WORLD — 저주의 기원</span>
            <MagicText text={worldText1} />
            <MagicText text={worldText2} />
          </div>
        </div>
      </section>

      {/* ─── 03. DIRECTOR ─── */}
      <section id="director" style={{ background: "var(--bg)", borderTop: "1px solid var(--gold-10)" }}>
        <div style={s.sectionInner}>
          <div style={{ marginBottom: "60px" }}>
            <span style={s.label}>// DIRECTOR</span>
            <h2 style={s.title}>BEHIND THE LENS</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "80px", alignItems: "start" }}>
            <div style={{ aspectRatio: "3/4", overflow: "hidden", border: "1px solid var(--gold-20)", background: "#0a0a0a" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/media/director.jpg.jpeg" alt="Leella" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-cta)", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "var(--gold)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "10px" }}>
                LEELLA
              </h3>
              <p style={{ fontFamily: "var(--font-sub)", fontSize: "13px", letterSpacing: "2px", color: "var(--light-50)", textTransform: "uppercase", marginBottom: "32px" }}>
                // Director &amp; Visual Creator
              </p>
              <p style={{ fontFamily: "var(--font-ko)", fontSize: "clamp(1rem,1.8vw,1.2rem)", lineHeight: 1.85, color: "var(--light-70)", marginBottom: "20px" }}>
                영상이라는 언어로 사람들과 소통합니다.
              </p>
              <p style={{ fontFamily: "var(--font-ko)", fontSize: "clamp(1rem,1.8vw,1.2rem)", lineHeight: 1.85, color: "var(--light-70)", marginBottom: "20px" }}>
                The Strays는 1000년의 저주 속에서도 음악으로 연결된 다섯 존재의 이야기입니다.
                각 수인이 짊어진 운명을 빛과 그림자, 그리고 소리로 담아냈습니다.
              </p>
              <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "10px", borderTop: "1px solid var(--gold-20)", paddingTop: "28px" }}>
                <span style={{ fontFamily: "var(--font-sub)", fontSize: "12px", letterSpacing: "1.5px", color: "var(--light-50)", textTransform: "uppercase" }}>
                  Directed by <strong style={{ color: "var(--light-70)", fontWeight: 600 }}>Leella</strong>
                </span>
                <span style={{ fontFamily: "var(--font-sub)", fontSize: "12px", letterSpacing: "1.5px", color: "var(--light-50)", textTransform: "uppercase" }}>
                  Music by <strong style={{ color: "var(--light-70)", fontWeight: 600 }}>Leella</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 04. CONTACT ─── */}
      <section id="contact" style={{ background: "linear-gradient(to bottom, var(--bg), #000)", borderTop: "1px solid var(--gold-10)" }}>
        <div style={{ ...s.sectionInner, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "40px" }}>
          <div>
            <span style={s.label}>// CONTACT</span>
            <h2 style={s.title}>GET IN TOUCH</h2>
          </div>

          <a
            href="mailto:from.leella@gmail.com"
            style={{
              fontFamily: "var(--font-cta)",
              fontSize: "clamp(1.1rem,3vw,2rem)",
              fontWeight: 900,
              color: "var(--gold)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              borderBottom: "1px solid transparent",
              transition: "border-color 0.2s",
            }}
          >
            from.leella@gmail.com
          </a>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="https://www.instagram.com/from.leella"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                border: "1px solid var(--gold-20)",
                color: "var(--light-70)",
                fontFamily: "var(--font-cta)",
                fontSize: "11px",
                fontWeight: 900,
                letterSpacing: "2px",
                textTransform: "uppercase",
                padding: "12px 20px",
                transition: "border-color 0.2s, color 0.2s",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
              <span>@from.leella</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: "#000", borderTop: "1px solid var(--gold-20)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "28px clamp(20px,5vw,60px)", display: "flex", justifyContent: "center" }}>
          <span style={{ fontFamily: "var(--font-sub)", fontSize: "11px", letterSpacing: "2px", color: "var(--light-35)", textTransform: "uppercase" }}>
            © 2025 THE STRAYS · LEELLA. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
