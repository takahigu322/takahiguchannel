import React from 'react';
// Lessonコンポーネントをインポートしてください
import Lesson from './Lesson';

class Main extends React.Component {
  render() {
    const lessonList = [
      {
        name: 'Youtube',
        image: 'https://lh3.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc',
        link: 'https://www.youtube.com/channel/UC90TWFlCpQDAGjFLdG4RToA',
      },
      {
        name: 'Twitter',
        image: 'https://kohrogi.com/wp/wp-content/uploads/2014/09/1cc6858dcc5d31363b5ed0e3cc3af94a.jpg',
        link: 'https://twitter.com/takahiguchannel',
      },
      {
        name: 'Instagram',
        image: 'https://dohack.jp/wp-content/uploads/2015/07/e88307.jpg',
        link: 'https://www.instagram.com/takahigu322/',
      },
      {
        name: 'Facebook',
        image: 'https://www.facebook.com/images/fb_icon_325x325.png',
        link: 'https://www.facebook.com/profile.php?id=100016835250454',
      },
    ];


    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <h1>Takahigu Channel</h1>
            <h2>Takahigu Channelより良い名前ないかねと思ってるこの頃</h2>
          </div>
          <div className='lesson-container'>
            <h3 className='section-title'>大したSNSじゃない</h3>
            {lessonList.map((lessonItem) => {
              return (
                <Lesson
                  name={lessonItem.name}
                  image={lessonItem.image}
                  link={lessonItem.link}
                ></Lesson>
              )
            })}

          </div>
        </div>
      </div>
    );
  }
}

export default Main;
