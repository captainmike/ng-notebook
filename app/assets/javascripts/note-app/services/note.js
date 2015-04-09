angular.module('noteApp')
  .factory('Note', function() {
    return {
      all: function() {
        return [
          {
            title: "Mascherano on Xavi",
            description: "Mascherano: \"Like the fans, I hope Xavi stays. He represents everything a Barça player should be. He's an example for future players.\""
          },
          {
            title: "Suarez on playing with Messi and Neymar",
            description: "Suarez: \"It's a privilege to play with Messi and Neymar. And it's a relief - with them around, I have less responsibility.\""
          },
          {
            title: "Alves on life",
            description: "Alves: \"Life is a great game and I'm a small player\""
          },
          {
            title: "Mascherano on Alves",
            description: "Mascherano: \"Alves is one of the best players Barça ever had. I'd like him to stay. He's entertaining, but also a great professional.\""
          },
          {
            title: "Suarez on Barcelona's Squad",
            description: "Suarez: \"The squad at Barcelona is spectacular. I didn't expect them all to be so modest.\""
          }
        ];
      }
    };
  });
