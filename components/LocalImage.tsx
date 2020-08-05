
export default function LocalImage(img : any) {
  let image;
  try {
    const index =  img == null ? 'notFound' : img.toString();
    image = images[index];
  } catch (e) {
    image = images.notFound;
  }
  return image;
};

export const images : { [key: string]: any[] } = {
  notFound: require('../assets/images/notFound.png'),
  myHeroes: require('../assets/images/wizard.png'),
  recruit: require('../assets/images/warrior.png'),
  // heroes
  t1: require('../assets/images/heroes/t1.png'),
  t2: require('../assets/images/heroes/t2.png')
};
