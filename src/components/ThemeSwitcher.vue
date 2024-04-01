<template>
  <div id="page" :class="{ 'theme-dark': nightMode }">
    <input type="checkbox" id="theme-toggle" v-model="nightMode" @click="toggleTheme" />
    <label for="theme-toggle"><span></span></label>
  </div>
</template>

<script>
export default {
  name: 'ThemeSwitcher',
  data() {
    return {
      nightMode: false,
	  isLightTheme: true,

    }
  },
  mounted() {
    // Retrieve the theme preference from localStorage when the component is mounted
	const storedTheme = localStorage.getItem('theme-dark');
	if (storedTheme) {
      this.nightMode = storedTheme === 'dark';
      this.nightMode = storedTheme === 'light';
	  const root = document.documentElement;
      if (this.nightMode) {
		root.classList.add("dark");
        root.setAttribute("data-mode", "dark");
       
      } else {
        root.classList.remove("light");
        root.removeAttribute("data-mode");
      }
    }
  },
  methods: {
	toggleTheme() {
      const root = document.documentElement;
      const isDarkMode = root.classList.contains("dark");

      if (isDarkMode) {
		root.classList.remove("dark");
		
        root.setAttribute("data-mode", "dark");
      
      } else {
		root.classList.add("dark");
        root.removeAttribute("data-mode");
      }

      this.isLightTheme = !isDarkMode;

      // Store the current theme in localStorage
      localStorage.setItem('theme-dark', this.nightMode ? 'dark' : 'light');
    }
  }
}
</script>
<style>
:root {
  --toggle-size: 1rem;
  --switch-w: 4em;
  --switch-h: 2em;
  --switch-handle-scale: 0.65;
  --switch-off-handle-x: -0.125em;
  --switch-on-handle-x: calc(100% - 0.125em);
  --switch-transition-duration: 0.2s;
}

#theme-toggle {
  display: none;

  & + label {
    font-size: var(--toggle-size);
    display: flex;
    height: var(--switch-h);
    width: var(--switch-w);
    border-radius: calc(var(--switch-h) / 2);
    background-size: auto 8em;
    background-position: bottom;
    background-image: linear-gradient(180deg, #021037 0%, #20206a 19%, #4184b1 66%, #62e7f7 100%);
    transition: var(--switch-transition-duration);
    border: 0.125em solid hsl(207, 30%, 95%);
    overflow: hidden;

    span {
      background: #fffad8;
      border-radius: 50%;
      height: var(--switch-h);
      width: var(--switch-h);
      transform: translateX(var(--switch-off-handle-x)) scale(var(--switch-handle-scale));
      transition: var(--switch-transition-duration);
      cursor: pointer;
      box-shadow:
        0 0 0.25em 0.0625em #fbee8d,
        0 0 2em 0 #ffeb3b,
        inset -0.25em -0.25em 0 0 #fbee8e,
        inset -0.3125em -0.3125em 0 0.625em #fff5b2;
      margin-top: var(--switch-off-handle-x);
    }
  }

  &:checked {
    font-size: var(--switch-font-size);

    & + label {
      background-position: top;
      border-color: hsl(207, 30%, 50%);

      span {
        background: transparent;
        transform: translateX(var(--switch-on-handle-x)) scale(var(--switch-handle-scale));
        box-shadow:
          inset -0.1875em -0.1875em 0 0 #fbe7ef,
          inset -0.5625em -0.5625em 0 0 #fffff7;
      }
    }
  }
}

/*-- Housekeeping --*/

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
}
</style>
