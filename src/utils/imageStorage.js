const IMAGES = 'images';

export function addShowcaseImage(name, dataUrl) {
  const images = localStorage.getItem(IMAGES);

  const insertData = { name, dataUrl };

  if (!images) {
    localStorage.setItem(IMAGES, JSON.stringify([insertData]));

    return;
  }

  localStorage.setItem(
    IMAGES,
    JSON.stringify([...JSON.parse(images), insertData])
  );
}

export function getShowcaseImages() {
  const images = localStorage.getItem(IMAGES);

  if (!images) {
    return [];
  }

  return JSON.parse(images);
}
