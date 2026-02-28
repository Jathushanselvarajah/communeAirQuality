export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  app: {
    baseURL: "/communeAirQuality/",
    head: {
      title: "Commune Details 📍",
      meta: [
        {
          name: "description",
          content:
            "Découvrez les informations détaillées sur les communes en France, incluant le code postal, la population, et la qualité de l’air avec des cartes interactives.",
        },
        {
          name: "keywords",
          content:
            "communes, France, carte interactive, AQI, qualité de l’air, Vue.js, Leaflet, API",
        },
        {
          property: "og:title",
          content: "Commune Details 📍",
        },
        {
          property: "og:description",
          content:
            "Explorez les informations détaillées sur les communes en France avec une carte interactive et des données sur la qualité de l’air.",
        },
        {
          property: "og:type",
          content: "website",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/communeAirQuality/favicon.ico",
        },
      ],
    },
  },

  nitro: {
    preset: "github_pages",
  },
});
