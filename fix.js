const fs = require('fs');

const files = [
  'components/admin/application-file.tsx',
  'components/admin/applications-manager.tsx',
  'components/admin/dashboard-client.tsx'
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  content = content.replace(/'pay out'/g, "'disburse'");
  content = content.replace(/"pay out"/g, '"disburse"');
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Fixed ' + file);
  }
}
