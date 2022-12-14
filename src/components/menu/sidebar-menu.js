export default [
  {
    id: "first.page",
    name: "First Page",
    sub: [
      {
        id: "troChuyen",
        name: "Trò Chuyện Ngẫu Nhiên",
        dataBsTarget: "trochuyen-component-nav",
        url: "",
        children: [
          {
            id: 'chat.index',
            url: '/chat',
            name: 'Chat',
          },
          {
            id: 'videocall.index',
            url: '/videocall',
            name: 'Video Call',
          }
        ],
      },
      {
        id: "kanji",
        name: "Kanji",
        dataBsTarget: "kanji-components-nav",
        url: "",
        children: [
          {
            id: "introduction.index",
            url: "/introduction",
            name: "Giới thiệu về cách học huyền lục thư cải tiến",
          },
          {
            id: "learnKanji.index",
            url: "/learn-kanji",
            name: "Học Kanji", //
          },
          {
            id: "exercise.index",
            url: "",
            name: "Bài tập luyện tập từng chương",
          },
        ],
      },
      {
        id: "question",
        name: "Câu hỏi",
        dataBsTarget: "question-component-nav",
        url: "",
        children: [
          {
            id: 'alert.index',
            url: '/question',
            name: 'Câu hỏi trắc nghiệm',
          },
        ],
      },
      {
        id: "contact",
        name: "Liên lạc",
        dataBsTarget: "contact-component-nav",
        url: "/",
        children: [
          {
            id: 'alert.index',
            url: '/teacher-contact',
            name: 'Liên lạc với giảng viên',
          },
        ],
      },
    ],
  },
];
