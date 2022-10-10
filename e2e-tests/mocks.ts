import type { ItemType } from '../src/models';

export const mockStories = [
  {
    by: 'yarapavan',
    descendants: 24,
    id: 33010645,
    kids:  [33012957, 33012842, 33010901, 33012339, 33012568, 33012897, 33012685, 33011564],
    score: 125,
    time: 1664386088,
    title: 'Learn TLA+',
    type: 'story' as ItemType,
    url: 'https://learntla.com/'
  },
  {
    by: 'caberus',
    descendants: 265,
    id: 33007873,
    kids: [33009621, 33008947, 33008730, 33008915, 33008215, 33009340, 33009223, 33008436, 33009056, 33008293, 33009312, 33008777, 33009903, 33009782, 33012433, 33009144, 33009243, 33008341, 33008906, 33008427, 33010868, 33010711, 33009998, 33009602, 33008981, 33011425, 33008807, 33010067, 33011912, 33011718, 33012140, 33011252, 33010642],
    score: 348,
    time: 1664372859,
    title: 'We reduced our server costs by moving away from AWS',
    type: 'story' as ItemType,
    url: 'https://levelup.gitconnected.com/how-we-reduced-our-annual-server-costs-by-80-from-1m-to-200k-by-moving-away-from-aws-2b98cbd21b46?gi=bb7f54e84163'
  },
  {
    by: 'colinprince',
    descendants: 129,
    id: 33007025,
    kids: [33007523, 33008985, 33008327, 33009113, 33012654, 33011946, 33009864, 33008158, 33007645, 33009637, 33010391, 33011839, 33008679, 33009106, 33009002, 33008804, 33009939, 33010714, 33008972, 33008619, 33008210, 33007380, 33009357, 33009649, 33008665, 33008180, 33008979, 33008318, 33008558],
    score: 322,
    time: 1664367371,
    title: 'Google Broke Image Search for Creative Commons',
    type: 'story' as ItemType,
    url: 'https://cogdogblog.com/2022/09/google-broke-cc-image-search/'
  }
];
