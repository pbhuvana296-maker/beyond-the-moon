
import { useEffect, useRef } from "react";
import "./App.css";

import moonImg from "./assets/images/moon.jpg";
import astronautImg from "./assets/images/astronaut.png";
import galaxyImg from "./assets/images/milky way galaxy.png";
import earthImg from "./assets/images/earth.png";
import solarImg from "./assets/images/solar system.png";
import asteroidImg from "./assets/images/asteroid Belt.png";
import nebulaImg from "./assets/images/nebula.png";
import blackholeImg from "./assets/images/black hoel.png";
import cometImg from "./assets/images/comet.png";
import constellationImg from "./assets/images/constellations.png";
import quasarImg from "./assets/images/quasar.png";
import supernovaImg from "./assets/images/supernova.png";
import exoplanetImg from "./assets/images/.exoplanet.png";
import skyImg from "./assets/images/Starry Sky.png";

const IMAGES = {
  hero: moonImg,
  river: galaxyImg,
  surface: earthImg,
  universe: galaxyImg,
  solar: solarImg,
  asteroid: asteroidImg,
  born: nebulaImg,
  binary: galaxyImg,
  nova: supernovaImg,
  hole: blackholeImg,
  quasar: quasarImg,
  comet: cometImg,
  exo: exoplanetImg,
  aurora: nebulaImg,
  skies: skyImg,
  stories: constellationImg,
  home: earthImg,
  outro: moonImg,
};

const MOON_IMG = moonImg;
const ASTRO_IMG = astronautImg;

const seed = ((s) => () => (s = (s * 16807) % 2147483647) / 2147483647)(7);

const STARS = Array.from({ length: 320 }, () => ({
  x: seed(),
  y: seed(),
  z: 0.2 + seed() * 0.8,
  p: seed() * 6,
}));

const ROCKS = Array.from({ length: 30 }, () => ({
  x: seed() * 100,
  y: seed() * 100,
  s: 1 + seed() * 2.4,
  d: 0.3 + seed() * 1.6,
}));

const S = [
  { id: "hero", len: 240 },
  {
    id: "river",
    len: 120,
    eb: "Milky Way",
    t: "A River of Stars",
    p: [
      "Beyond the portal, the galactic band unfolds — a soft river of light made of a hundred billion suns. Dust lanes carve dark paths through glowing clouds.",
      "You are inside the Milky Way now. Every spark ahead is a distant sun, older than Earth itself.",
    ],
    c: [
      "Galaxy · Milky Way",
      "Stars · 100B+",
      "Diameter · ~100,000 ly",
      "Type · Barred spiral",
    ],
  },
  {
    id: "surface",
    len: 140,
    l: 1,
    eb: "Liftoff",
    t: "Leave the Surface",
    p: [
      "Engines quiet. Earth glows like a blue lantern below. An astronaut floats between worlds — and silence becomes the soundtrack of ascent.",
      "From orbit, borders disappear. Oceans shine. Clouds spiral. You are one planet, one crew, one shared sky.",
    ],
    c: [
      "Orbit · Low Earth",
      "Speed · 7.8 km/s",
      "Altitude · 400 km",
      "View · Pale blue dot",
    ],
  },
  {
    id: "universe",
    len: 140,
    eb: "Deep Space",
    words: ["The", "Universe", "Never", "Ends"],
    p: [
      "Worlds rush past the corners like sparks, each one beyond the next — each one a possible beginning.",
      "You are no longer a visitor. You are the voyage.",
    ],
    c: [
      "Observable · 93B ly",
      "Light speed · 300,000 km/s",
      "Horizon · True flight",
    ],
  },
  {
    id: "solar",
    len: 140,
    eb: "Solar Family",
    t: "Our Solar System",
    p: [
      "Eight worlds and one blazing star — a family born from the same cosmic cloud. Every planet has its story, size, and secrets.",
    ],
    c: ["Age · 4.6 billion years", "Star · G-type Sun", "Planets · 8"],
  },
  {
    id: "asteroid",
    len: 120,
    eb: "Debris Field",
    t: "The Asteroid Belt",
    p: [
      "Between Mars and Jupiter, leftover stones from the birth of the system drift in silence. Not a wall of rock — a sparse sea of ancient fragments.",
      "Each one is a time capsule from 4.6 billion years ago.",
    ],
    c: [
      "Between · Mars–Jupiter",
      "Objects · Millions",
      "Largest · Ceres",
      "Origin · Primordial",
    ],
  },
  {
    id: "born",
    len: 120,
    eb: "Star Nursery",
    t: "Where Stars Are Born",
    p: [
      "Inside glowing gas and dust, gravity gathers light into new suns. Pillars of cloud cradle stars — blue, fierce, and brand new.",
      "Every star you know began in a place like this. Creation is quiet, patient, and endlessly bright.",
    ],
    c: [
      "Nebula · Emission",
      "Age · Millions of years",
      "Fuel · Hydrogen",
      "Birth · Now",
    ],
  },
  {
    id: "binary",
    len: 130,
    eb: "Twin Suns",
    t: "A Binary Dance",
    p: [
      "Two stars bound by gravity — forever orbiting a shared center. Days would have two suns. Shadows would split and twist.",
      "Most stars in the galaxy are not alone. Companionship is cosmic.",
    ],
    c: [
      "Type · Binary system",
      "Orbit · Barycenter",
      "Period · Hours to ages",
    ],
  },
  {
    id: "nova",
    len: 130,
    eb: "Collapse",
    t: "Supernova",
    p: [
      "A giant star ends in a flash brighter than a galaxy. Elements forged in its heart — iron, gold, silver — scatter into space.",
      "The calcium in your bones, the iron in your blood — gifts from ancient explosions.",
    ],
    c: [
      "Energy · 10⁴⁴ joules",
      "Born · Heavy elements",
      "Leaves · Neutron star or black hole",
    ],
  },
  {
    id: "hole",
    len: 150,
    eb: "Event Horizon",
    t: "Where Light Ends",
    p: [
      "Gravity bends spacetime itself. Stars stretch into glowing rings. At the edge of the abyss, time slows — and even light cannot return.",
      "Beyond this line lies the unknown: a singularity where known physics fails.",
    ],
    c: [
      "Mass · Millions of suns",
      "Spacetime · Warped",
      "Velocity · Escape > c",
      "Singularity · Unknown",
    ],
  },
  {
    id: "quasar",
    len: 120,
    eb: "Distant Beacon",
    t: "Quasar",
    p: [
      "A hungry black hole feeds on a swirling disk — and launches jets of light across billions of years. Among the brightest objects in the universe.",
      "Looking at a quasar is looking deep into the early cosmos.",
    ],
    c: [
      "Engine · Supermassive black hole",
      "Jets · Light-years long",
      "Distance · Billions of ly",
    ],
  },
  {
    id: "comet",
    len: 120,
    l: 1,
    eb: "Visitor",
    t: "A Comet Crosses",
    p: [
      "Ice and dust wake as they near the Sun, and a glowing coma blooms. Twin tails stream across the dark — one of gas, one of glittering grains.",
      "Some return every lifetime. Others visit once and vanish forever. Either way, they are messengers from the outer cold.",
    ],
    c: [
      "Origin · Oort cloud",
      "Core · Ice + dust",
      "Tail · Millions of km",
      "Speed · Tens of km/s",
    ],
  },
  {
    id: "exo",
    len: 130,
    l: 1,
    eb: "Other Worlds",
    t: "Exoplanet",
    p: [
      "A world orbiting another star. Thousands confirmed, millions probable — each one a new sky to wonder about.",
      "Somewhere, another sky may look back.",
    ],
    c: [
      "Count · 5,500+",
      "Type · Rocky / gas giant",
      "Nearest · Proxima b",
    ],
  },
  {
    id: "aurora",
    len: 120,
    eb: "Northern Lights",
    t: "Aurora",
    p: [
      "Solar wind kisses Earth's magnetic shield. Particles rain into the upper air and paint the night in green and violet fire.",
      "Space weather made visible — a living curtain over the poles.",
    ],
    c: [
      "From · Solar wind",
      "Height · 100–300 km",
      "Colors · Green, violet",
    ],
  },
  {
    id: "skies",
    len: 120,
    eb: "Stargazing",
    t: "Skies Without Borders",
    p: [
      "Move away from the city and the calm dark canopy opens. Constellations draw ancient maps. Meteors streak like brief wishes. The night sky is Earth's oldest window into the horizon.",
      "Look up — and you are already traveling. Every star you see is a message from deep time.",
    ],
    cards: [
      ["Unplug", "When city lights fall away, thousands of stars appear."],
      ["Milky band", "Our galaxy seen edge-on: a hundred billion suns."],
      ["Dawn return", "Morning erases the stars, but their light keeps traveling."],
    ],
    c: [
      "Naked eye · 4,500 stars",
      "Seasons · All year",
      "Best · Moonless nights",
    ],
  },
  {
    id: "stories",
    len: 140,
    eb: "Star Maps",
    t: "Stories Written in Light",
    p: [
      "Long before telescopes, humans connected dots into myths and guides. Hunters, bears, and scorpions — maps for sailors, farmers, and dreamers.",
      "The patterns are ours. The stars are older than every story ever told.",
    ],
    c: [
      "Official · 88 constellations",
      "Use · Navigation",
      "Culture · Every age",
    ],
  },
  {
    id: "home",
    len: 110,
    eb: "Pale Blue Dot",
    t: "Home From Afar",
    p: [
      "From the outer dark, Earth is a single pixel of light — everyone you love, every story, on that pale blue mote.",
      "“That's here. That's home. That's us.” — Carl Sagan",
    ],
    c: [
      "Snapshot · 1990",
      "Distance · 6B km",
      "Pixel · 0.12",
      "Lesson · Humility",
    ],
  },
  { id: "outro", len: 120 },
];

const TOTAL = S.reduce((a, s) => a + s.len, 0);

const ease = (x) =>
  x < 0.5
    ? 2 * x * x
    : 1 - Math.pow(-2 * x + 2, 2) / 2;

const cl = (x) => Math.min(1, Math.max(0, x));

const Moon = ({ s = 24, cls = "" }) => (
  <div
    className={`moon ${cls}`}
    style={{
      "--s": s,
      backgroundImage: `url("${MOON_IMG}")`,
    }}
  />
);

const Astro = () => (
  <img className="astro" src={ASTRO_IMG} alt="Astronaut" />
);

const V = {
  river: (
    <>
      <i className="band b1" />
      <i className="band b2" />
      <i className="glow" />
    </>
  ),

  surface: (
    <>
      <div
        className="port"
        style={{ backgroundImage: `url("${IMAGES.surface}")` }}
      >
        <i />
      </div>
      <Moon s={9} cls="mini" />
      <b className="tag t1">Companion moon</b>
      <div className="float">
        <Astro />
      </div>
      <b className="tag t2">Crew · Major Tom</b>
    </>
  ),

  universe: (
    <>
      <i className="neb" />
      <Moon s={12} cls="o1" />
      <Moon s={14} cls="o2" />
      <Moon s={10} cls="o3" />
    </>
  ),

  solar: (
    <>
      <i
        className="sun"
        style={{
          backgroundImage: `url("${IMAGES.solar}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {[10, 17, 25, 33].map((r, i) => (
        <div
          key={r}
          className="orbit"
          style={{ "--r": r, "--d": `${14 + i * 9}s` }}
        >
          <i
            className="pl"
            style={{
              "--c": ["#e8734a", "#e7c85a", "#4a8de8", "#59d4e8"][i],
            }}
          />
        </div>
      ))}
      <b className="foot">Scroll a glowing world to unlock its secrets.</b>
    </>
  ),

  asteroid: (
    <>
      <div
        className="image-bg"
        style={{ backgroundImage: `url("${IMAGES.asteroid}")` }}
      />
      {ROCKS.map((r, i) => (
        <i
          key={i}
          className="rock"
          style={{
            left: `${r.x}%`,
            top: `${r.y}%`,
            "--s": r.s,
            "--d": `${r.d}s`,
          }}
        />
      ))}
    </>
  ),

  born: (
    <>
      <div
        className="image-bg"
        style={{ backgroundImage: `url("${IMAGES.born}")` }}
      />
      <i className="blob a" />
      <i className="blob b" />
      <i className="blob c" />
    </>
  ),

  binary: (
    <>
      <div
        className="image-bg"
        style={{ backgroundImage: `url("${IMAGES.binary}")` }}
      />
      <div className="bin">
        <i className="s1" />
        <i className="s2" />
      </div>
    </>
  ),

  nova: (
    <>
      <div
        className="image-bg"
        style={{ backgroundImage: `url("${IMAGES.nova}")` }}
      />
      <i className="sn n1" />
      <i className="sn n2" />
      <i className="sn n3" />
      <i className="flare" />
    </>
  ),

  hole: (
    <>
      <div
        className="image-bg"
        style={{ backgroundImage: `url("${IMAGES.hole}")` }}
      />
      <div className="bh">
        <i className="acc" />
        <i className="acc a2" />
        <i className="void" />
      </div>
    </>
  ),

  quasar: (
    <>
      <div
        className="image-bg"
        style={{ backgroundImage: `url("${IMAGES.quasar}")` }}
      />
      <i className="beam" />
      <i className="beamh" />
      <i className="qcore" />
    </>
  ),

  comet: (
    <>
      <div
        className="image-bg"
        style={{ backgroundImage: `url("${IMAGES.comet}")` }}
      />
      <div className="comet">
        <i />
      </div>
    </>
  ),

  exo: (
    <>
      <div
        className="image-bg"
        style={{ backgroundImage: `url("${IMAGES.exo}")` }}
      />
      <i className="planet" />
      <i className="pring" />
      <i className="gstar" />
    </>
  ),

  aurora: (
    <>
      <div
        className="image-bg"
        style={{ backgroundImage: `url("${IMAGES.aurora}")` }}
      />
      <i className="cur c1" />
      <i className="cur c2" />
      <i className="cur c3" />
    </>
  ),

  skies: (
    <>
      <div
        className="image-bg"
        style={{ backgroundImage: `url("${IMAGES.skies}")` }}
      />
      <i className="calm" />
    </>
  ),

  stories: (
    <>
      <div
        className="image-bg"
        style={{ backgroundImage: `url("${IMAGES.stories}")` }}
      />
      <svg
        className="cons"
        viewBox="0 0 100 50"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {[
          "8,12 18,8 24,18 14,22 8,12",
          "24,18 32,30 40,40",
          "70,10 78,18 86,16 90,26 84,40",
          "78,18 82,32 74,44",
        ].map((p, i) => (
          <polyline key={i} points={p} pathLength="1" />
        ))}

        {[
          [8, 12],
          [18, 8],
          [24, 18],
          [14, 22],
          [32, 30],
          [40, 40],
          [70, 10],
          [78, 18],
          [86, 16],
          [90, 26],
          [84, 40],
          [82, 32],
          [74, 44],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r=".7" />
        ))}

        <text x="72" y="49">
          SCORPIUS · THE SCORPION
        </text>
      </svg>
    </>
  ),

  home: (
    <>
      <div
        className="image-bg"
        style={{ backgroundImage: `url("${IMAGES.home}")` }}
      />
      <i className="ray" />
      <i className="dot" />
    </>
  ),
};

export default function Home() {
  const root = useRef(null);
  const cv = useRef(null);

  useEffect(() => {
    const el = root.current;
    const canvas = cv.current;

    if (!el || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const sc = [...el.querySelectorAll(".sc")];

    let cur = window.scrollY;
    let raf;
    let W = 0;
    let H = 0;
    let range = [];

    const size = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;

      let a = 0;

      range = S.map((s) => {
        const r = [(a * H) / 100, ((a + s.len) * H) / 100];
        a += s.len;
        return r;
      });
    };

    size();
    window.addEventListener("resize", size);

    const tick = (time) => {
      cur += (window.scrollY - cur) * 0.075;

      ctx.clearRect(0, 0, W, H);

      const zoom = 1 + (cur / (TOTAL * H / 100)) * 0.4;

      for (const s of STARS) {
        const y =
          (((s.y * H - cur * s.z * 0.12) % H) + H) % H;

        const x =
          (s.x - 0.5) * W * Math.pow(zoom, s.z) + W / 2;

        ctx.globalAlpha =
          0.35 + 0.65 * Math.abs(Math.sin(time / 800 + s.p));

        ctx.fillStyle = "#cfe0ff";
        ctx.beginPath();
        ctx.arc(x, y, s.z * 1.3, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      el.style.setProperty("--y", cur);

      sc.forEach((n, i) => {
        const [a, b] = range[i];
        const t = (cur - a) / (b - a);

        const o =
          ease(cl(i ? t / 0.16 : 1)) *
          ease(
            cl(i < S.length - 1 ? (1 - t) / 0.16 : 1)
          );

        const vis = t > -0.02 && t < 1.02 && o > 0.002;

        n.style.visibility = vis ? "visible" : "hidden";

        if (!vis) return;

        n.style.setProperty("--t", cl(t).toFixed(4));
        n.style.setProperty("--e", ease(cl(t)).toFixed(4));
        n.style.setProperty("--o", o.toFixed(3));
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
    };
  }, []);

  return (
    <div className="moon-page" ref={root}>
      <div style={{ height: `${TOTAL + 100}vh` }} />

      <div className="stage">
        <div className="haze">
          <i />
          <i />
          <i />
        </div>

        <canvas ref={cv} className="stars" />
        <i className="shoot" />

        {S.map((s) => (
          <section
            key={s.id}
            className={`sc ${s.id} ${s.l ? "left" : ""}`}
          >
            <div
              className="vis"
              style={{
                backgroundImage: IMAGES[s.id]
                  ? `linear-gradient(rgba(2,3,10,.2),rgba(2,3,10,.45)),url("${IMAGES[s.id]}")`
                  : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {V[s.id]}
            </div>

            {s.id === "hero" && (
              <>
                <div className="core">
                  <i className="ring r1" />
                  <i className="ring r2" />
                  <i className="ring r3" />
                  <i className="ring r4" />
                  <i className="ring dots" />

                  <div className="mwrap">
                    <Moon s={24} />
                    <i className="portal" />
                  </div>
                </div>

                <div className="txt hero-txt">
                  <b className="eb">Departure</b>

                  <h1>
                    Beyond The <span className="mw">Moon</span>
                  </h1>

                  <p>
                    A cinematic flight through silence, gravity, and light.
                    Enter the ring portal and begin your voyage across the
                    cosmos.
                  </p>

                  <em>
                    “We are all connected to the Moon by wonder.”
                  </em>

                  <div className="chips">
                    {[
                      "Distance from Earth · 384,400 km",
                      "Age · 4.5 billion years",
                      "Gravity · 1/6 of Earth",
                      "Diameter · 3,474 km",
                    ].map((c) => (
                      <span key={c}>{c}</span>
                    ))}
                  </div>
                </div>

                <div className="cue">
                  <i />
                </div>
              </>
            )}

            {s.id === "outro" && (
              <div className="txt outro-txt">
                <Moon s={14} cls="halo" />

                <p>
                  Eighteen chapters. Every scene is curiosity — and every
                  night is a new invitation to wonder, to explore, to go
                  beyond the moon.
                </p>

                <ul>
                  {[
                    "You crossed oceans of space and rivers of light",
                    "You watched stars being born and stars being broken",
                    "You found the oldest and the darkest worlds",
                    "You saw sunny skies and a pale blue home",
                    "You looked up — and returned",
                  ].map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>

                <small>Thank you for flying Beyond The Moon.</small>

                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Explore again
                </button>
              </div>
            )}

            {!["hero", "outro"].includes(s.id) && (
              <div className="txt">
                <b className="eb">{s.eb}</b>

                <h2>
                  {s.words
                    ? s.words.map((w, i) => (
                        <span
                          key={w}
                          className="w"
                          style={{
                            "--dx": [-30, 20, 40, -10][i] + "u",
                            "--dy": [6, -8, 10, 14][i] + "u",
                            "--r": [-8, 6, -5, 9][i] + "deg",
                          }}
                        >
                          {w}{" "}
                        </span>
                      ))
                    : s.t}
                </h2>

                {s.p.map((x) => (
                  <p key={x}>{x}</p>
                ))}

                {s.cards && (
                  <div className="cards">
                    {s.cards.map(([h, x]) => (
                      <div key={h}>
                        <b>{h}</b>
                        <span>{x}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="chips">
                  {s.c.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
