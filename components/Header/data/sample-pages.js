import imgAPI from '@/assets/images/imgAPI';

const sample = [
  {
    name: 'company',
    thumb: imgAPI.ui[3],
    child: [
      {
        name: 'about',
        link: '/about',
      },
      {
        name: 'team',
        link: '/about/team',
      },
      {
        name: 'blog',
        link: '/blog',
      },
      {
        name: 'blog detail',
        link: '/blog/detail-blog',
      },
    ],
  },
];

export default sample;
