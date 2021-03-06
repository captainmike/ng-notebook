angular.module('noteApp.services')
  .factory('Note', function() {
    return {
      featured: function() {
        return {
          title: "Mascherano on Xavi",
          description: "Mascherano: \"Like the fans, I hope Xavi stays. He represents everything a Barça player should be. He's an example for future players.\"",
          notebook: 'fc-barcelona'
        };
      },

      all: function() {
        return [
          {
            title: "Suarez on playing with Messi and Neymar",
            description: "Suarez: \"It's a privilege to play with Messi and Neymar. And it's a relief - with them around, I have less responsibility.\"",
            notebook: 'fc-barcelona'
          },
          {
            title: "Alves on life",
            description: "Alves: \"Life is a great game and I'm a small player\"",
            notebook: 'fc-barcelona'
          },
          {
            title: "Mascherano on Alves",
            description: "Mascherano: \"Alves is one of the best players Barça ever had. I'd like him to stay. He's entertaining, but also a great professional.\"",
            notebook: 'fc-barcelona'
          },
          {
            title: "Suarez on Barcelona's Squad",
            description: "Suarez: \"The squad at Barcelona is spectacular. I didn't expect them all to be so modest.\"",
            notebook: 'fc-barcelona'
          },
          {
            title: "Rails Guide",
            description: "Official Ruby on Rails guide has tutorial style documentaions. It is very high quality and covers many aspects of Ruby on Rails.",
            notebook: 'ruby-on-rails'
          },
          {
            title: "AngularJS's offical website",
            description: "https://angularjs.org/",
            notebook: 'angular-js'
          },
          {
            title: "Official documentation for Angular New Router (1.4 & 2.0)",
            description: "http://angular.github.io/router/",
            notebook: 'angular-js'
          }
        ];
      }
    };
  });
