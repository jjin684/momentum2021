const quotes = [
    {
        quote: "큰 희망이 큰 사람을 만든다",
        author: "♥"
    },
    {
        quote: "나까지 나설 필요는 없다",
        author: "♥"
    },
    {
        quote: "헌신하면 헌신짝 된다",
        author: "♥"
    },
    {
        quote: "포기하면 편하다",
        author: "♥"
    },
    {
        quote: "가는말이 고우면 사람을 얕본다"  ,      
        author: "♥"
    },
    {
        quote: "잘생긴놈은 얼굴값하고 못생긴놈은 꼴값한다",
        author: "♥"
    },
    {
        quote: "동정할거면 돈으로 줘요",
        author: "♥"
    },
    {
        quote: "즐길수 없으면 피하라",
        author: "♥"
    },
    {
        quote: "이것 또한 지나가리라",
        author: "♥"
    },
    {
        quote: "대문으로 가난이 찾아오면 사람은 창문으로 도망간다",
        author: "♥"
    },
    {
        quote: "일찍 일어나는 새가 더 피곤하다"  ,  
        author: "♥"
    },
    {
        quote: "먼저 가는 건 순서 없다",
        author: "♥"
    },
    {
        quote: "똥차가고 벤츠온다",
        author: "♥"
    },
    {
        quote: "늦었다고 할때가 가장 늦은 거다",
        author: "♥"
    },
    {
        quote: "고생끝에 골병난다",
        author: "♥"
    },
    {
        quote: "원수는 회사에서 만난다",
        author: "♥"
    },
    {
        quote: "티끌 모아봐야 티끌",
        author: "♥"
    }
];



const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todayQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText =  todayQuote.quote;
author.innerText = todayQuote.author;
