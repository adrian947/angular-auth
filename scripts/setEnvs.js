require('dotenv').config();
const fs = require('fs');
const path = require('path');

// Ruta del archivo de destino
const targetPath = './src/environments/environments.ts';
const targetDir = path.dirname(targetPath);
// Construye el contenido del archivo `environments.ts` a partir de las variables de entorno

const envConfigFile = `
export const environment = {
  base_url: "${process.env.BASE_URL}",
};
`;
// Verifica si el directorio existe; si no, lo crea
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`Directorio ${targetDir} creado.`);
}

// Escribe el archivo `environments.ts`
fs.writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
    console.error('Error al generar el archivo environments.ts:', err);
  } else {
    console.log(`Archivo ${targetPath} generado exitosamente.`);
  }
});
