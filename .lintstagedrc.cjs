module.exports = {
  'frontend/src/**/*.{js,jsx,ts,tsx}': ['npm run lint:files -w frontend --'],
  'backend/src/**/*.js': ['npm run lint:files -w backend --'],
  '*.{md,yml,yaml,json}': ['prettier --write']
};
