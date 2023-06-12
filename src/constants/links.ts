const Links = {
  user: {
    LOGOUT: "/logout",
  },
  landingPage: "/",
  liveCasino: "/live-casino",
  faq: "/faq",
  privacy: "/privacy-policy",
  terms: "/terms-of-service",
  responsibleGambling: "/responsible-gambling",
  about: "/about-us",
  affiliateProgram: "/affiliate-program",
  contactUs: "/contact-us",
  html5Games: "/html5-games",
  mobileGames: "/mobile-games",
  promotions: "/promotions",
};

export const menuLinks = [
  {
    name: "Home",
    localeName: "home",
    icon: "/icons/home.svg",
    path: "/",
    showIconOnPageNavigationOnly: true,
  },
  {
    name: "HTML5 Games",
    localeName: "html5_games",
    icon: "/icons/all-games.svg",
    parent: true,
    path: "/html5-games",
    children: [
      {
        name: "Classic",
        localeName: "classic",
        path: "/html5-games/xe88",
        icon: "/icons/baccarat.svg",
      },
      {
        name: "Pragmatic",
        localeName: "pragmatic",
        path: "/html5-games/prag",
        icon: "/icons/table-games.svg",
      },
      {
        name: "PG Soft",
        localeName: "pg_soft",
        path: "/html5-games/pg",
        icon: "/icons/poker-game.svg",
      },
    ],
  },
  {
    name: "Mobile Games",
    localeName: "mobile_games",
    icon: "/icons/diamond.svg",
    parent: true,
    path: "/mobile-games",
    children: [
      {
        name: "XE88",
        localeName: "xe88",
        path: "/mobile-games/xe88",
        icon: "/icons/jackpot-games.svg",
      },
      {
        name: "Mega888",
        localeName: "mega888",
        path: "/mobile-games/mega888",
        icon: "/icons/top-games.svg",
      },
      {
        name: "918Kiss",
        localeName: "918kiss",
        path: "/mobile-games/918kiss",
        icon: "/icons/big-blackjack.svg",
      },
    ],
  },
  {
    name: "Live Casino",
    localeName: "live_casino",
    icon: "/icons/slot-page.svg",
    path: "/live-casino",
  },
  {
    name: "Sports",
    localeName: "sports",
    icon: "/icons/poker-games.svg",
    path: "/sports",
  },
  {
    name: "Lottery",
    localeName: "lottery",
    icon: "/icons/black-jack.svg",
    path: "/lottery",
  },
];

export const subMenuLinks = [
  {
    name: "Promotions",
    localeName: "promotions",
    path: "/promotions",
    icon: "/icons/promotion.svg",
  },
  {
    name: "VIP Club",
    localeName: "vip_club",
    path: "/vips",
    icon: "/icons/affiliate.svg",
  },
];

export const html5GamesLinks = [
  {
    name: "All Games",
    localeName: "all_games",
    icon: "/icons/all-games.svg",
    path: "/",
    query: `all`,
  },
  {
    name: "New Games",
    localeName: "new_games",
    icon: "/icons/new-games.svg",
    path: "/new-games",
    query: "new",
  },
  {
    name: "Famous",
    localeName: "famous",
    icon: "/icons/baccarat.svg",
    path: "/famous",
    query: "famous",
  },
  {
    name: "Jackpot",
    localeName: "jackpot",
    icon: "/icons/jackpot-games.svg",
    path: "/jackpot",
    query: "jackpt",
  },
  {
    name: "Table",
    localeName: "table",
    icon: "/icons/table-games.svg",
    path: "/table",
    query: "table",
  },
];

export const mobileGamesLinks = [
  {
    name: "XE88",
    localeName: "xe88",
    icon: "/icons/home.svg",
    path: `/xe88`,
    query: "",
  },
  {
    name: "Mega888",
    localeName: "mega888",
    icon: "/icons/home.svg",
    path: `/mega888`,
    query: "",
  },
  {
    name: "918kiss",
    localeName: "918kiss",
    icon: "/icons/home.svg",
    path: `/918kiss`,
    query: "",
  },
];

export const liveCasinoLinks = [
  {
    name: "Top Games",
    localeName: "top_games",
    icon: "/icons/top-games.svg",
    path: "/",
    query: `top-games`,
  },
  {
    name: "888 Exclusive",
    localeName: "888_exclusive",
    icon: "/icons/888-exlusive.svg",
    path: "/888-exclusive",
    query: "888-exclusive",
  },
  {
    name: "New Games",
    localeName: "new_games",
    icon: "/icons/new-games.svg",
    path: "/new-games",
    query: "new-games",
  },
  {
    name: "Roulette",
    localeName: "roulette",
    icon: "/icons/roulette.svg",
    path: "/roulette",
    query: "roulette",
  },
  {
    name: "Black Jack",
    localeName: "black_jack",
    icon: "/icons/big-blackjack.svg",
    path: "/black-jack",
    query: "black-jack",
  },
  {
    name: "Poker Games",
    localeName: "poker_games",
    icon: "/icons/poker-game.svg",
    path: "/poker-games",
    query: "poker-games",
  },
  {
    name: "Baccarat",
    localeName: "baccarat",
    icon: "/icons/baccarat.svg",
    path: "/baccarat",
    query: "baccarat",
  },
  {
    name: "Game Shows",
    localeName: "game_shows",
    icon: "/icons/game-show.svg",
    path: "/game-shows",
    query: "game-shows",
  },
];

export const linkNameMapping = {
  xe88: {
    name: "Classic",
    localeName: "classic",
  },
  prag: {
    name: "Pragmatic",
    localeName: "pragmatic",
  },
  pg: {
    name: "PG Soft",
    localeName: "pg_soft",
  },
};

export default Links;
