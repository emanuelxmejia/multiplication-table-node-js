const fs = require('fs');
const colors = require('colors');

const createFile = async ( base = 5, list = false, until = 10 ) => {
  try {
    let output  = '',
        output_console = '';

    for (let i = 1; i <= until; i++) {
      output += `${ base } x ${ i } = ${ base * i }\n`;
      output_console += `${ base } ${ 'x'.red } ${ i } ${ '='.red } ${ base * i }\n`;
    }

    if (list) {
      console.log('======================='.red);
      console.log('    Table of: ', colors.cyan(base));
      console.log('======================='.red);

      console.log(output_console);
    }

    fs.writeFileSync(`./output/table-${ base }.txt`, output);

    return `table-${ base }.txt`.rainbow;
  } catch(err) {
    throw err;
  }

};

module.exports = {
  createFile
};