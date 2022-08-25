import {messageDate, chatDate} from '../../utlis/date';

let users = [
     {
          name: 'Alice Freeman',
          photo: 'avatars/avatarWoman3.png',
          id: 1,
          messages: [
               {
                    text: "Hey, where are you? ",
                    date: {
                         messageDate,
                         chatDate,
                    },
                    side: 'left',
               },
               {
                    text: "What's happen?",
                    date: {
                         messageDate,
                         chatDate,
                    },
                    side: 'right',
               },
               {
                    text: 'Your work is the worst !',
                    date: {
                         messageDate,
                         chatDate: 'Mon 22,2022',
                    },
                    side: 'left',
               }
          ]
     },
     {
          name: 'Josephina',
          photo: 'avatars/avatarWoman2.png',
          id: 2,
          messages: [
               {
                    text: 'Hi, please go to 1B meetign room !',
                    date: {
                         messageDate,
                         chatDate,
                    },
                    side: 'left',
               },
               {
                    text: 'Hi, okay',
                    date: {
                         messageDate,
                         chatDate,
                    },
                    side: 'right',
               },
               {
                    text: 'We are losing money, quick!',
                    date: {
                         messageDate,
                         chatDate: 'Sun 21,2022',
                    },
                    side: 'left',
               }
          ]
     },
     {
          name: 'Andrew',
          photo: 'avatars/avatarMan1.png',
          id: 3,
          messages: [
               {
                    text: 'Quickly, come to the meeting room 1B !',
                    date: {
                         messageDate,
                         chatDate,
                    },
                    side: 'left',
               }
          ]
     },
     {
          name: 'Jessica',
          photo: 'avatars/avatarWoman1.png',
          id: 4,
          messages: [
               {
                    text: 'Hello',
                    date: {
                         messageDate,
                         chatDate,
                    },
                    side: 'left',
               },
               {
                    text: 'Hello',
                    date: {
                         messageDate,
                         chatDate,
                    },
                    side: 'right',
               },
               {
                    text: 'Where are you?',
                    date: {
                         messageDate,
                         chatDate: 'Sat 20,2022',
                    },
                    side: 'left',
               }
          ]
     },
     {
          name: 'John Carter',
          photo: 'avatars/avatarMan2.png',
          id: 5,
          messages: [
               {
                    text: 'Hello',
                    date: {
                         messageDate,
                         chatDate,
                    },
                    side: 'left',
               },
               {
                    text: 'Hello',
                    date: {
                         messageDate,
                         chatDate,
                    },
                    side: 'right',
               },
               {
                    text: 'How are you?',
                    date: {
                         messageDate,
                         chatDate: 'Wed 17,2022',
                    },
                    side: 'left',
               }
          ]
     }
];


export default users;