const fs = require('fs');
const converter = require('postcss-to-js');

function DO(prefix, files) {
  console.log('do', prefix, files[0]);

  const ast = converter.parseAst(fs.readFileSync('node_modules/' + files[0]));
  //console.log(ast[':root']);
  const result = converter.toStyled(ast).map(line => 'export const ' + line[0] + ' = ' + line[1] + ';').join('\n');
  fs.writeFileSync(`src/${prefix}/index.js`, `
    import { css, injectGlobal }  from 'styled-components';\n    
    ${result};
  `);
}

//tachyons

DO('tachyons', ['tachyons/css/tachyons.css']);

if (1) {
//turretcss

  DO('turretcss', ['turretcss/dist/turretcss.min.css']);

//basscss

  DO('basscss', ['basscss/css/basscss-cp.css']);

// beard

  DO('beard', ['beardcss/dist/beard.css']);

//bootstrap

  DO('bootstrap', ['bootstrap/dist/css/bootstrap.css']);

  DO('bootstrap-grid', ['bootstrap/dist/css/bootstrap-grid.css']);
}
;
