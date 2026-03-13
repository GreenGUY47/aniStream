// ============================================================
//  NAVBAR — your original code, untouched
// ============================================================
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".openNavbar");
const overlay = document.querySelector(".nav-overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  hamburger.classList.remove("active");
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

const btn = document.querySelector("#btn");
const input = document.querySelector(".inputSearchBtn");

btn.addEventListener("click", function () {
  input.classList.toggle("active");
  if (input.classList.contains("active")) {
    input.focus();
  }
});

document.addEventListener("click", function (e) {
  if (!btn.contains(e.target) && !input.contains(e.target)) {
    input.classList.remove("active");
  }
});

// ============================================================
//  VIDEO PLAYER (URL params) — your original code, untouched
// ============================================================
const params = new URLSearchParams(window.location.search);
const video = params.get("video");
const type = params.get("type");
const player = document.querySelector(".video");

if (type === "youtube") {
  const url = new URL(video);
  const videoID = url.searchParams.get("v");
  player.innerHTML = `
    <iframe width="100%" height="600"
    src="https://www.youtube.com/embed/${videoID}"
    frameborder="0"
    allowfullscreen>
    </iframe>
  `;
} else if (video) {
  player.innerHTML = `
    <video width="100%" controls>
      <source src="${video}" type="video/mp4">
    </video>
  `;
}

// ============================================================
//  DOMContentLoaded — your Plyr init + new episode system
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  // ── YOUR ORIGINAL PLYR INIT (untouched) ──────────────────
  const params = new URLSearchParams(window.location.search);
  const video = params.get("video");
  const type = params.get("type");
  const container = document.querySelector(".video");

  if (type === "youtube" && video) {
    const url = new URL(video);
    const videoID = url.searchParams.get("v");
    container.innerHTML = `
      <div class="plyr__video-embed" id="player">
        <iframe
          src="https://www.youtube.com/embed/${videoID}?rel=0&modestbranding=1&controls=0&origin=${location.origin}"
          allowfullscreen
          allow="autoplay"
        ></iframe>
      </div>
    `;
    const player = new Plyr("#player", {
      controls: [
        "play",
        "progress",
        "current-time",
        "mute",
        "volume",
        "settings",
        "fullscreen",
      ],
    });
  }

  // ── EPISODE SYSTEM ───────────────────────────────────────
  // Only activates on video.html — requires .vp-hero to exist in the page.
  // Your home page is completely safe and unaffected.
  if (!document.querySelector(".vp-hero")) return;

  // ── CATALOG DATA ─────────────────────────────────────────
  // Replace youtubeId values with your actual YouTube video IDs.
  // For local MP4 files use: src: "../videos/ep1.mp4" instead of youtubeId.
  const CATALOG = [
    {
      id: "aot",
      title: "Attack on Titan",
      genre: ["Action", "Drama"],
      rating: "9.0",
      year: 2013,
      studio: "MAPPA",
      banner: "https://img.youtube.com/vi/MGRm4IzK1SQ/maxresdefault.jpg",
      seasons: [
        {
          label: "Season 1",
          episodes: [
            {
              ep: 1,
              title: "To You, in 2000 Years",
              duration: "24m",
              youtubeId: "MGRm4IzK1SQ",
              thumb: "https://img.youtube.com/vi/MGRm4IzK1SQ/mqdefault.jpg",
            },
            {
              ep: 2,
              title: "That Day",
              duration: "24m",
              youtubeId: "MGRm4IzK1SQ",
              thumb: "https://img.youtube.com/vi/MGRm4IzK1SQ/mqdefault.jpg",
            },
            {
              ep: 3,
              title: "A Dim Light Amid Despair",
              duration: "24m",
              youtubeId: "MGRm4IzK1SQ",
              thumb: "https://img.youtube.com/vi/MGRm4IzK1SQ/mqdefault.jpg",
            },
            {
              ep: 4,
              title: "The Night of the Closing Ceremony",
              duration: "24m",
              youtubeId: "MGRm4IzK1SQ",
              thumb: "https://img.youtube.com/vi/MGRm4IzK1SQ/mqdefault.jpg",
            },
            {
              ep: 5,
              title: "First Battle",
              duration: "24m",
              youtubeId: "MGRm4IzK1SQ",
              thumb: "https://img.youtube.com/vi/MGRm4IzK1SQ/mqdefault.jpg",
            },
            {
              ep: 6,
              title: "The World the Girl Saw",
              duration: "24m",
              youtubeId: "MGRm4IzK1SQ",
              thumb: "https://img.youtube.com/vi/MGRm4IzK1SQ/mqdefault.jpg",
            },
          ],
        },
        {
          label: "Season 2",
          episodes: [
            {
              ep: 1,
              title: "Beast Titan",
              duration: "24m",
              youtubeId: "MGRm4IzK1SQ",
              thumb: "https://img.youtube.com/vi/MGRm4IzK1SQ/mqdefault.jpg",
            },
            {
              ep: 2,
              title: "I'm Home",
              duration: "24m",
              youtubeId: "MGRm4IzK1SQ",
              thumb: "https://img.youtube.com/vi/MGRm4IzK1SQ/mqdefault.jpg",
            },
            {
              ep: 3,
              title: "Southwestward",
              duration: "24m",
              youtubeId: "MGRm4IzK1SQ",
              thumb: "https://img.youtube.com/vi/MGRm4IzK1SQ/mqdefault.jpg",
            },
          ],
        },
      ],
    },
    {
      id: "demonslayer",
      title: "Demon Slayer",
      genre: ["Action", "Supernatural"],
      rating: "8.7",
      year: 2019,
      studio: "ufotable",
      banner: "https://img.youtube.com/vi/VQGCKyvzIM4/maxresdefault.jpg",
      seasons: [
        {
          label: "Season 1",
          episodes: [
            {
              ep: 1,
              title: "Cruelty",
              duration: "26m",
              youtubeId: "VQGCKyvzIM4",
              thumb: "https://img.youtube.com/vi/VQGCKyvzIM4/mqdefault.jpg",
            },
            {
              ep: 2,
              title: "Trainer Sakonji Urokodaki",
              duration: "26m",
              youtubeId: "VQGCKyvzIM4",
              thumb: "https://img.youtube.com/vi/VQGCKyvzIM4/mqdefault.jpg",
            },
            {
              ep: 3,
              title: "Sabito and Makomo",
              duration: "26m",
              youtubeId: "VQGCKyvzIM4",
              thumb: "https://img.youtube.com/vi/VQGCKyvzIM4/mqdefault.jpg",
            },
            {
              ep: 4,
              title: "Final Selection",
              duration: "26m",
              youtubeId: "VQGCKyvzIM4",
              thumb: "https://img.youtube.com/vi/VQGCKyvzIM4/mqdefault.jpg",
            },
            {
              ep: 5,
              title: "My Own Steel",
              duration: "26m",
              youtubeId: "VQGCKyvzIM4",
              thumb: "https://img.youtube.com/vi/VQGCKyvzIM4/mqdefault.jpg",
            },
          ],
        },
        {
          label: "Entertainment District Arc",
          episodes: [
            {
              ep: 1,
              title: "Sound Hashira Tengen Uzui",
              duration: "44m",
              youtubeId: "VQGCKyvzIM4",
              thumb: "https://img.youtube.com/vi/VQGCKyvzIM4/mqdefault.jpg",
            },
            {
              ep: 2,
              title: "Infiltrating the Entertainment District",
              duration: "26m",
              youtubeId: "VQGCKyvzIM4",
              thumb: "https://img.youtube.com/vi/VQGCKyvzIM4/mqdefault.jpg",
            },
            {
              ep: 3,
              title: "What Are You?",
              duration: "26m",
              youtubeId: "VQGCKyvzIM4",
              thumb: "https://img.youtube.com/vi/VQGCKyvzIM4/mqdefault.jpg",
            },
          ],
        },
      ],
    },
    {
      id: "jjk",
      title: "Jujutsu Kaisen",
      genre: ["Action", "Horror"],
      rating: "8.6",
      year: 2020,
      studio: "MAPPA",
      banner: "https://img.youtube.com/vi/4A_X-Dvl0ws/maxresdefault.jpg",
      seasons: [
        {
          label: "Season 1",
          episodes: [
            {
              ep: 1,
              title: "Ryomen Sukuna",
              duration: "24m",
              youtubeId: "4A_X-Dvl0ws",
              thumb: "https://img.youtube.com/vi/4A_X-Dvl0ws/mqdefault.jpg",
            },
            {
              ep: 2,
              title: "For Myself",
              duration: "24m",
              youtubeId: "4A_X-Dvl0ws",
              thumb: "https://img.youtube.com/vi/4A_X-Dvl0ws/mqdefault.jpg",
            },
            {
              ep: 3,
              title: "Girl of Steel",
              duration: "24m",
              youtubeId: "4A_X-Dvl0ws",
              thumb: "https://img.youtube.com/vi/4A_X-Dvl0ws/mqdefault.jpg",
            },
            {
              ep: 4,
              title: "Curse Womb Must Die",
              duration: "24m",
              youtubeId: "4A_X-Dvl0ws",
              thumb: "https://img.youtube.com/vi/4A_X-Dvl0ws/mqdefault.jpg",
            },
          ],
        },
        {
          label: "Season 2 — Shibuya Incident",
          episodes: [
            {
              ep: 1,
              title: "It's Like That",
              duration: "24m",
              youtubeId: "4A_X-Dvl0ws",
              thumb: "https://img.youtube.com/vi/4A_X-Dvl0ws/mqdefault.jpg",
            },
            {
              ep: 2,
              title: "Hidden Inventory",
              duration: "24m",
              youtubeId: "4A_X-Dvl0ws",
              thumb: "https://img.youtube.com/vi/4A_X-Dvl0ws/mqdefault.jpg",
            },
            {
              ep: 3,
              title: "Thunderclap",
              duration: "24m",
              youtubeId: "4A_X-Dvl0ws",
              thumb: "https://img.youtube.com/vi/4A_X-Dvl0ws/mqdefault.jpg",
            },
            {
              ep: 4,
              title: "Shibuya Incident — Gate Open",
              duration: "24m",
              youtubeId: "4A_X-Dvl0ws",
              thumb: "https://img.youtube.com/vi/4A_X-Dvl0ws/mqdefault.jpg",
            },
            {
              ep: 5,
              title: "Pandemonium",
              duration: "24m",
              youtubeId: "4A_X-Dvl0ws",
              thumb: "https://img.youtube.com/vi/4A_X-Dvl0ws/mqdefault.jpg",
            },
          ],
        },
      ],
    },
  ];

  // ── STATE ──────────────────────────────────────────────────
  // Reads ?show=aot from URL so you can link directly to a show.
  // Falls back to first catalog item if not found.
  const urlShow = new URLSearchParams(window.location.search).get("show");
  const vpState = {
    showId:
      urlShow && CATALOG.find((s) => s.id === urlShow)
        ? urlShow
        : CATALOG[0].id,
    seasonIdx: 0,
    epIdx: 0,
  };

  // ── HELPERS ────────────────────────────────────────────────
  function vpGetShow() {
    return CATALOG.find((s) => s.id === vpState.showId) || CATALOG[0];
  }

  function vpBuildIframe(youtubeId) {
    return `
      <div class="plyr__video-embed" id="vpPlyr">
        <iframe
          src="https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&controls=0&origin=${location.origin}"
          allowfullscreen
          allow="autoplay"
        ></iframe>
      </div>`;
  }

  function vpInitPlyr() {
    if (document.getElementById("vpPlyr") && typeof Plyr !== "undefined") {
      new Plyr("#vpPlyr", {
        controls: [
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "settings",
          "fullscreen",
        ],
      });
    }
  }

  function vpBuildNextBtn(show, seasonIdx, epIdx) {
    const nextEp = show.seasons[seasonIdx].episodes[epIdx + 1];
    if (nextEp) {
      return `<button class="next-ep-btn" onclick="vpPlayEpisode(${seasonIdx},${epIdx + 1})">
        <span class="next-label">NEXT UP</span>
        <span class="next-info">EP ${nextEp.ep}: ${nextEp.title}</span>
        <i class="fa-solid fa-chevron-right"></i>
      </button>`;
    }
    const nextSeason = show.seasons[seasonIdx + 1];
    if (nextSeason) {
      const first = nextSeason.episodes[0];
      return `<button class="next-ep-btn" onclick="vpPlayEpisode(${seasonIdx + 1},0)">
        <span class="next-label">NEXT UP</span>
        <span class="next-info">${nextSeason.label} — EP 1: ${first.title}</span>
        <i class="fa-solid fa-chevron-right"></i>
      </button>`;
    }
    return "";
  }

  function vpBuildEpisodeCards(seasonIdx) {
    const show = vpGetShow();
    const season = show.seasons[seasonIdx];
    return season.episodes
      .map((ep, i) => {
        const active = seasonIdx === vpState.seasonIdx && i === vpState.epIdx;
        return `
        <div class="ep-card ${active ? "ep-card--active" : ""}" onclick="vpPlayEpisode(${seasonIdx},${i})">
          <div class="ep-thumb">
            <img src="${ep.thumb}" alt="EP ${ep.ep}" loading="lazy"/>
            <div class="ep-thumb-overlay">
              <div class="ep-play-icon">
                <i class="fa-solid ${active ? "fa-pause" : "fa-play"}"></i>
              </div>
            </div>
            <span class="ep-duration">${ep.duration}</span>
            ${active ? '<div class="ep-now-playing"><span>▶ NOW PLAYING</span></div>' : ""}
          </div>
          <div class="ep-card-info">
            <div class="ep-number">EP ${ep.ep}</div>
            <div class="ep-card-title">${ep.title}</div>
            <div class="ep-card-dur">${ep.duration}</div>
          </div>
        </div>`;
      })
      .join("");
  }

  function vpBuildMoreCards() {
    return CATALOG.filter((s) => s.id !== vpState.showId)
      .map((s) => {
        const totalEps = s.seasons.reduce(
          (sum, season) => sum + season.episodes.length,
          0,
        );
        return `
          <div class="more-card" onclick="vpSwitchShow('${s.id}')">
            <div class="more-thumb">
              <img src="${s.banner}" alt="${s.title}" loading="lazy"/>
              <div class="more-overlay">
                <div class="more-play"><i class="fa-solid fa-play"></i></div>
              </div>
              <span class="more-ep-badge">${totalEps} Episodes</span>
            </div>
            <div class="more-info">
              <p class="more-title">${s.title}</p>
              <p class="more-meta">★ ${s.rating} · ${s.seasons.length} Season${s.seasons.length > 1 ? "s" : ""} · ${s.year}</p>
            </div>
          </div>`;
      })
      .join("");
  }

  // ── BUILD ENTIRE PLAYER PAGE ───────────────────────────────
  function vpBuildPage() {
    const main = document.querySelector("main");
    if (!main) return;

    const show = vpGetShow();
    const season = show.seasons[vpState.seasonIdx];
    const ep = season.episodes[vpState.epIdx];

    main.innerHTML = `
      <section class="vp-hero">
        <div class="vp-iframe-wrap" id="vpWrap">
          ${vpBuildIframe(ep.youtubeId)}
        </div>
      </section>

      <section class="vp-meta">
        <div class="vp-meta-inner">
          <div class="vp-title-row">
            <div>
              <p class="vp-show-name">${show.title}</p>
              <h1 class="vp-ep-title">EP ${ep.ep} — ${ep.title}</h1>
            </div>
            <div class="vp-badges">
              <span class="badge badge-rating">★ ${show.rating}</span>
              <span class="badge badge-year">${show.year}</span>
              <span class="badge badge-studio">${show.studio}</span>
              ${show.genre.map((g) => `<span class="badge badge-genre">${g}</span>`).join("")}
            </div>
          </div>
          ${vpBuildNextBtn(show, vpState.seasonIdx, vpState.epIdx)}
        </div>
      </section>

      <section class="vp-episodes">
        <div class="vp-ep-inner">
          <div class="vp-section-header">
            <h2>Episodes</h2>
            <div class="season-tabs" id="vpSeasonTabs">
              ${show.seasons
                .map(
                  (s, i) => `
                <button class="season-tab ${i === vpState.seasonIdx ? "active" : ""}"
                        onclick="vpSwitchSeason(${i})">
                  ${s.label}
                  <span class="ep-count">${s.episodes.length}</span>
                </button>`,
                )
                .join("")}
            </div>
          </div>
          <div class="ep-grid" id="vpEpGrid">
            ${vpBuildEpisodeCards(vpState.seasonIdx)}
          </div>
        </div>
      </section>

      <section class="vp-more">
        <div class="vp-ep-inner">
          <h2>More to Watch</h2>
          <div class="more-grid">
            ${vpBuildMoreCards()}
          </div>
        </div>
      </section>
    `;

    vpInitPlyr();
  }

  // ── PUBLIC ACTIONS (called via onclick in injected HTML) ───
  window.vpPlayEpisode = function (seasonIdx, epIdx) {
    vpState.seasonIdx = seasonIdx;
    vpState.epIdx = epIdx;

    const show = vpGetShow();
    const ep = show.seasons[seasonIdx].episodes[epIdx];

    // Swap video smoothly
    const wrap = document.getElementById("vpWrap");
    if (wrap) {
      wrap.style.opacity = "0";
      setTimeout(() => {
        wrap.innerHTML = vpBuildIframe(ep.youtubeId);
        wrap.style.opacity = "1";
        vpInitPlyr();
      }, 180);
    }

    // Update title area
    const showNameEl = document.querySelector(".vp-show-name");
    const epTitleEl = document.querySelector(".vp-ep-title");
    if (showNameEl) showNameEl.textContent = show.title;
    if (epTitleEl) epTitleEl.textContent = `EP ${ep.ep} — ${ep.title}`;

    // Update next button
    const metaInner = document.querySelector(".vp-meta-inner");
    const oldNext = metaInner?.querySelector(".next-ep-btn");
    const newNextHTML = vpBuildNextBtn(show, seasonIdx, epIdx);
    if (oldNext) {
      oldNext.outerHTML = newNextHTML;
    } else if (metaInner && newNextHTML) {
      metaInner.insertAdjacentHTML("beforeend", newNextHTML);
    }

    // Refresh episode cards
    vpRefreshGrid(seasonIdx);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.vpSwitchSeason = function (seasonIdx) {
    vpState.seasonIdx = seasonIdx;
    vpState.epIdx = 0;
    vpRefreshGrid(seasonIdx);
  };

  window.vpSwitchShow = function (showId) {
    vpState.showId = showId;
    vpState.seasonIdx = 0;
    vpState.epIdx = 0;
    vpBuildPage();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function vpRefreshGrid(seasonIdx) {
    const grid = document.getElementById("vpEpGrid");
    if (grid) grid.innerHTML = vpBuildEpisodeCards(seasonIdx);
    document.querySelectorAll(".season-tab").forEach((tab, i) => {
      tab.classList.toggle("active", i === seasonIdx);
    });
  }

  // ── START ──────────────────────────────────────────────────
  vpBuildPage();
}); // end DOMContentLoaded
