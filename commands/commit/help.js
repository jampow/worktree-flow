
module.exports = (definitions = []) => {
  console.log('Usage: wt commit [options]');
  console.log('Options:');
  definitions.forEach(def => {
    console.log(`  --${def.name}, -${def.alias}  ${def.description || 'No description available'}`);
  });
}
