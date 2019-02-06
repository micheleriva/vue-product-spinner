export default function preloadImages(srcs) {
  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = function() {
        resolve(img);
      };
      img.onerror = img.onabort = function() {
        reject(src);
      };
      img.src = src;
    });
  }
  const promises = [];
  for (let i = 0; i < srcs.length; i++) {
    promises.push(loadImage(srcs[i]));
  }
  return Promise.all(promises);
}
