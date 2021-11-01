module.exports = {
  name: 'api-gateway',
  script: `${__dirname}/dist/main.js`,

  instances: 1,
  autorestart: true,
  watch: false,
  max_memory_restart: '1G',

  error_file: `${__dirname}/logs/err.log`,
  out_file: `${__dirname}/logs/out.log`,
  combine_logs: true,
  merge_logs: false,
};
