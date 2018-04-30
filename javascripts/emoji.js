const emojis = {
  smile: '600',
  frown: '641',
  joy: '602',
  rofl: '923',
  happy: '603',
  wink: '609',
  'smile-eyes': '60A',
  yum: '60B',
  cool: '60F',
  love: '60D',
  kiss: '618',
  hug: '917',
  star: '929',
  think: '914',
  'raised-eyebrow': '928',
  neutral: '610',
  eyeroll: '644',
  tongue: '61B',
  cry: '622',
  scream: '631',
  angry: '620',
  nerd: '913',
  evil: '608',
  clown: '921',
  poop: '4A9',
};

const convertEmojis = (inputString) => {
  return inputString.replace(/:\S+:/g, emoji => {
    emoji = emoji.replace(/:/g, '');
    if (emojis[emoji]) {
      emoji = `&#x1F${emojis[emoji]};`;
    }
    return emoji;
  });
};

module.exports = convertEmojis;
