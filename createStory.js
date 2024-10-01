import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter the component name: ', (input) => {
  if (/[*_]/.test(input)) {
    console.error('The component name should not contain special characters like * or _.');
    return;
  }

  const name = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  createComponent(name);
  rl.close();
});

function createComponent(name) {
  const dirPath = path.join(process.cwd(), `src/Components/${name}`);

  if (fs.existsSync(dirPath)) {
    console.error(`This component already exists: ${name}`);
    return;
  }

  fs.mkdirSync(dirPath, { recursive: true });
  const storyTemplateDirPath = path.join(process.cwd(), 'StoryTemplate');
  const files = fs.readdirSync(storyTemplateDirPath);

  console.log(`Creating component...`);
  files.forEach(file => {
    let fileContent = fs.readFileSync(path.join(storyTemplateDirPath, file), 'utf8');
    const updatedFileContent = fileContent.replace(/YourComponentName/g, name);
    const updatedFileName = file.replace('YourComponentName', name);
    fs.writeFileSync(path.join(dirPath, updatedFileName), updatedFileContent);
  });
  console.log(`
    Finished to create:
     ${name}
      └──
        ├── ${name}.stories.ts
        ├── ${name}.tsx
        ├── ${name}.types.ts
        ├── index.ts
        └── style.scss
  `);

  const indexPath = path.join(process.cwd(), 'src/Components/index.ts');
  let indexContent = fs.readFileSync(indexPath, 'utf8');

  const newExportStatement = `export * from './${name}';\n //new component export ** do not remove **\n`;
  indexContent = indexContent.replace('//new component export ** do not remove **', newExportStatement);

  fs.writeFileSync(indexPath, indexContent);
}
