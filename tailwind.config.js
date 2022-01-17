module.exports = {
  content: ['./src/**/*.js', './src/components/**/*.js', './src/pages/**/*.js', './public/index.html'],
  theme: {
      fontFamily: {
          sans: ['Roboto', 'sans-serif'],
          serif: ['"Roboto Slab"', 'serif'],
          body: ['Roboto', 'sans-serif'],
      },
      extend: {
          backgroundImage: () => ({
              'login-background':
                  "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/road.jpg')",
              'landing-background':
                  "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/port.jpg')",
              'profile-background':
                  "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/port.jpg')",
          }),
      },
  },
  plugins: [],
};
