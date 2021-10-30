module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "Group9-img": "url('src/images/Group9.png')",
        "Group12-img": "url('src/images/Group12.png')",

        "dev-img": "url('src/images/dev.png')",
        "mobilet-img": "url('src/images/mobilet.jpg')",
        "prod-img": "url('src/images/prod.jpg')",
        "contact-img": "url('src/images/contact.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
