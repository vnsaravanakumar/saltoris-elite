module.exports = {
  content: [ './public/index.html', './src/**/*.js', './src/components/**/*.js', './src/pages/**/*.js'],
  theme: {
      typography: (theme) => {
        console.log(theme("fontSize.3xl"));
        return {
          DEFAULT: {
            css: {
              '.sm': {
                fontSize: theme("fontSize.xs"), // not reflected.
                // fontSize: "32px", // reflected
                marginTop: theme("margin.4"), // reflected
              },
            },
          },
        };
      },
      colors: {
          'primary-blue': '#3A6AFD',
          'primary-ketic': '#171725',
          'primary-manatee': '#92929D',
          'secondary-red': '#FC5A5A',
          'secondary-blue': '#50B5FF',
          'secondary-green': '#3DD598',
          'mild': '#FAFAFB',
          'table-heading': '#44444F',
          'status-sent': "#3DD598",
          'status-payment': "#50B5FF",
          'status-approved': "#0062FF",
          'status-rejected': "#FC5A5A"
      },
      fontFamily: {
          sans: ['Poppins', 'sans-serif'],
          serif: ['Poppins', 'serif'],
          display: ['Poppins'],
          body: ['Poppins'],
      },
      fontSize: {
          'sm': ['10px', '16px'] 
      },
      extend: {
          colors: {
            'background': '#E5E5E5',
          },
          backgroundImage: () => ({
              'login-background':
                  "url('/src/assets/img/login-background.png')",
              'register-background':
                  "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/road.jpg')",
              'landing-background':
                  "linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)), url('/src/assets/img/port.jpg')",
              'profile-background':
                  "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/port.jpg')",
          }),
      },
  },
  plugins: [],
};
