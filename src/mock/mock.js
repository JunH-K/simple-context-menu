export const mock = [
  { title: '첫번째' },
  {
    title: '서브메뉴',
    menu: [
      { title: '서브메뉴-1', key: 'sub1' },
      { title: '서브메뉴-2', key: 'sub2' },
      { title: '서브메뉴-3', key: 'sub3' }
    ]
  },
  { separator: true },
  { title: '세번째' },
  { title: '네번째', disable: true },
]
