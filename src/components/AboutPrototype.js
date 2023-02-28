import React, {useState} from 'react'

const maria_about =
"Hello, my name is Marie Shimizu and I am a driven graduate student \
pursuing a master's degree in Computer Science at San Francisco State \
University. In my current project, I am leading a team and responsible \
for project management, people management, as well as coding for the \
backend. Alongside my studies, I also work part-time as a software \
developer at school, where I specialize in programming languages such as \
Java, Python, JavaScript/TypeScript, HTML, and CSS. My past projects \
have ranged from building websites with login functionalities and \
split-screen multiplayer games to web scraping using Python. I have a \
passion for technology and I am always eager to learn new things. When I \
am not working, you can find me with my nose in a book or engaging with \
ChatGPT lately. I approach life with a positive and growth-oriented \
mindset and believe in being friendly and open to new connections. I \
welcome anyone to say hello if they see me around. Let's connect."

const francis_about =
"Hello, I’m Francis Quang and I am the back-end lead for my team. \
My only knowledge of back-end is from web development class, but back-end \
has always interested me so I hope to learn and have a strong back-end foundation. \
My biggest strength is communicating and having an open-mind mentality to all sorts of ideas. \
You can usually find me driving on the backroads or I would stay home and play games with friends. \
I hope to work in the car industry as a Software Engineer. \
Overall, I have a never give up mindset, positive, and have a down to earth personality. \
Looking forward to working with everybody!"

const aaron_about =
"Hi there! My name is Aaron, and I am from Santa Clara county. Im\
passionate about biomedical research in pattern analysis. Im a big fan\
of surfing and I love to surf whenever I get the chance. My favorite\
type of music is classic rock and my favorite band is Aerosmith. If I\
had to describe myself in three words, I would say that I am driven,\
positive, and totally not lazy and sarcastic. Thanks for reading, and I\
look forward to getting to know you!"

const tommy_about =
"Hi, I am the Github master of my team and I have no speciality, yet. I am a jack \
of all trades and master of none. I love to hike, adventure, and hangout \
with my friends in my free time. My favorite movies are Christopher \
Nolan movies and I love to watch them in IMAX with my friends. I really \
enjoy working in groups and I hope to one day lead teams professionally. \
My biggest strength is communication and I always try to tackle problems \
with a positive attitude. Overall, I'm an ambitious and determined \
person who loves to make incremental progress every day."

const arielle_about =
"Hello, my name is Arielle Riray and I am the Front-End lead of my team. \
I like building databases, creating games, designing interfaces, and doing \
web development in CS. I have experience working with backend, but Id rather \
work in the frontend due to my background in creating artwork and design which \
is my stronger suit. Aside from CS, some of my hobbies include drawing, playing \
piano, exploring new places, and longboarding. \
Overall, Id describe myself as a creative and adventurous person that enjoys \
learning and trying to live life to the fullest with the time we have, cause \
tomorrow is never guaranteed."

const kenneth_about =
"Hi, my name is Kenneth Gee and I am 22 years old. I am the Backend Engineer \
for Team #1. My backend skills are a cut above my frontend skills. One day \
I hope to become a software developer for a big tech company. Whenever the weather \
permits, I like to play baseball. I started playing baseball when I was six years \
old all the way until my junior year of high school. The biggest strength that I \
have is the experience in participating in team situations and having the ability \
to easily cooperate with others."

const rabin_about =
"Hi, I am Rabin Karki, and I am the database lead of this project. I \
have experience working on database projects in the past, and I love \
to spend my leisure time reading books and going fishing. My goal is \
to become a skilled engineer and I am always looking for ways to \
improve my abilities. I enjoy solving problems and find great \
satisfaction in being able to create solutions that are effective and \
efficient. Although I switched my major to computer science during my \
senior year, and while I may not be particularly strong in coding, I \
am catching up and working hard to improve my skills. If I had to \
describe myself in three words, I would say that I am friendly, kind, \
and helpful. I am very excited about this group project and am looking \
forward to contributing my skills and knowledge to help us succeed.\n"

function AboutPrototype() {
    const our_team = [
        ["Name", "Role", "About"],
        ["Maria", "Team Lead", maria_about],
        ["Francis", "Backend Lead", francis_about],
        ["Aaron Kuo", "Document Editor/Frontend engineer", aaron_about],
        ["Tommy","Github Master",tommy_about],
        ["Arielle","Frontend Lead",arielle_about],
        ["Kenneth","Backend Engineer",kenneth_about],
        ["Rabin","Database Master",rabin_about],
      ];

      return (
        <div>
          <table>
            <thead>
              <tr>
                {our_team[0].map((item, index) => {
                  return <th>{item}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {our_team.slice(1, our_team.length).map((item, index) => {
                return (
                  <tr>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                    <td><br></br>{item[2]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
}

export default AboutPrototype
