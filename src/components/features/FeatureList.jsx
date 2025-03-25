import '../../css/components/feature-list.css'

function FeatureList() {
    const data = [
      {
        heading: "Grow Together",
        paragraph:
          "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you`ll miss out on with a feedback form.",
        imageUrl: "src/assets/images/illustration-grow-together.svg",
        imageAlt: "Illustration of people growing together with a discussion",
        imageTitle: "Grow Together Illustration",
      },
      {
        heading: "Flowing Conversations",
        paragraph:
          "You wouldn`t navigate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural experience.",
        imageUrl: "src/assets/images/illustration-flowing-conversation.svg",
        imageAlt: "Illustration of people having a smooth conversation",
        imageTitle: "Flowing Conversations Illustration",
      },
      {
        heading: "Your Users",
        paragraph:
          "It takes no time at all to integrate Huddle with your app`s authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
        imageUrl: "src/assets/images/illustration-your-users.svg",
        imageAlt: "Illustration of users interacting with an app",
        imageTitle: "Your Users Illustration",
      },
    ];
  
    return (
      <>
        {data.map((item, index) => (
          <article key={`${item.heading}-${index}`} className="feature">
            <div className="container feature__container">
              <div className="feature__info">
                <h2>{item.heading}</h2>
                <p>{item.paragraph}</p>
              </div>
              <div className="feature__image">
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  title={item.imageTitle}
                />
              </div>
            </div>
          </article>
        ))}
      </>
    );
  }
  
  export default FeatureList;
  