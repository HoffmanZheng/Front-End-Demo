import { Command } from 'commander';
const program = new Command();
import * as packgeFile from './package.json';
import * as index from './index'

// -p -d

program
  .name('static-web-server')
  .description('A Node-based static web server, which could handle resource request in certain directory.')
  .version(`${packgeFile.version}`)
  .option('-p, --port <int>', 'port for server to listen, default 8888', '8888')
  .option('-d, --directory <string>', 'static resource directory to serve, default current path', '.')
  .action((options: any) => {
      console.log(options.port, options.directory)
      index.startServer();
  });
  
program.parse();