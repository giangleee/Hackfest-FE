export default [
    {
      id: 'first.page',
      name: 'First Page',
      sub: [
        {
          id: 'kanji',
          name: 'Kanji',
          dataBsTarget: 'kanji-components-nav',
          url: '',
          children: [
            {
              id: 'introduction.index',
              url: '',
              name: 'Giới thiệu về cách học huyền lục thư cải tiến',
            },
            {
              id: 'accordion.index',
              url: '/about',
              name: 'Học Kanji', //  
            },
            {
              id: 'exercise.index',
              url: '',
              name: 'Bài tập luyện tập từng chương',
            },
          ],
        },
        {
            id: 'question',
            name: 'Câu hỏi',
            dataBsTarget: 'question-component-nav',
            url: '',
            children: [
              // {
              //   id: 'alert.index',
              //   url: '',
              //   name: 'Alerts',
              // },
              // {
              //   id: 'accordion.index',
              //   url: '',
              //   name: 'Accordion',
              // },
              // {
              //   id: 'badges.index',
              //   url: '',
              //   name: 'Badges',
              // },
            ],
          },
      ],
    },
  ]
  