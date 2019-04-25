module.exports = {
    apps: [
      {
        name: 'Report & Chart Inventory Man',
        script: './src/index.ts',
        instances: 0,
        exec_mode: 'cluster',
        watch: true,
        env: {
          NODE_ENV: 'production',
          PORT: '6800'
        }
      }
    ]
  };