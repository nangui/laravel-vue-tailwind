let mix = require('laravel-mix');

class Tailwind {
  dependencies() {
    this.requiresReload = `
      Tailwind haw now been installed. Please ensure that
      your tailwind.config.js configuration file (npx tailwind init)
      has been created, and then run "npm run dev" again.
    `;

    return ['tailwindcss'];
  }

  register(configPath = './tailwind.config.js') {
    this.configPath = configPath;
  }

  boot() {
    if (Mix.components.has('sass')) {
      Config.processCssUrls = false;
    }

    let tailwindcss = require('tailwindcss');

    Config.postCss.push(tailwindcss(this.configPath));
  }
}

mix.extend('tailwindnext', new Tailwind());
