// Bereitet das Porträtfoto für die Website auf.
//
//   node scripts/prepare-portrait.mjs <quelle.jpg> [ziel.jpg]
//
// - dreht das Bild anhand der EXIF-Ausrichtung,
// - schneidet es auf ein Hochformat (4:5) um das Gesicht zu,
// - entfernt sämtliche Metadaten (EXIF inkl. GPS, Kamera, Datum),
// - speichert eine verkleinerte Arbeitskopie für src/assets/.
//
// Das Originalfoto selbst wird nie nach public/ oder dist/ kopiert.
import sharp from 'sharp';

const [, , input, output = 'src/assets/joshua-letschner.jpg'] = process.argv;
if (!input) {
  console.error('Aufruf: node scripts/prepare-portrait.mjs <quelle.jpg> [ziel.jpg]');
  process.exit(1);
}

// Ausschnitt bezogen auf das korrekt gedrehte Original (4032 × 3024 px).
const crop = { left: 610, top: 0, width: 2420, height: 3024 };

const oriented = await sharp(input).rotate().toBuffer();
await sharp(oriented)
  .extract(crop)
  .resize({ width: 1400 })
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(output); // sharp schreibt ohne withMetadata() keine Metadaten

const meta = await sharp(output).metadata();
const leaked = ['exif', 'gps', 'xmp', 'iptc'].filter((key) => meta[key]);
if (leaked.length > 0) {
  console.error(`Metadaten im Ergebnis gefunden: ${leaked.join(', ')}`);
  process.exit(1);
}
console.log(`${output}: ${meta.width} × ${meta.height} px, ohne EXIF/GPS/XMP/IPTC`);
