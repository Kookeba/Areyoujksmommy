const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const questionContainer = document.getElementById('questionContainer');

yesButton.addEventListener('click', function() {
    window.location.href = 'love.html';
});

let noClicks = 0;
const noButtonTexts = [
    "你干嘛",
    "柾国儿不可爱？╥╥",
    "五岁的柾国儿也不可爱？",
    "不许选这个！！！！",
    "选旁边辣个！！！！",
    "我要伤心啦...",
    "我要伤心啦...",
    "我要伤心啦...",
    "我要伤心啦...",
    "我要伤心啦...",
    "我要伤心啦...",
    "我要伤心啦...","我要伤心啦...","我要伤心啦..."
];

const questionImages = [
    "question-image-1.jpg",
    "question-image-2.jpg",
    "IMG_7304.JPG",
    "question-image-4.jpg",
    "question-image-3.jpg",
    "question-image-3.jpg","question-image-3.jpg","question-image-3.jpg","question-image-3.jpg","question-image-3.jpg","question-image-3.jpg",
    "question-image-3.jpg",
];

const questions = [
    "干嘛选这个",
    "怎么不是？",
    "你敢跟我对视吗！",
    "你坏.....",
    "哼你等着！",
    "哼你等着！","哼你等着！","哼你等着！","哼你等着！","哼你等着！","哼你等着！",
    "哼你等着！","哼你等着！","哼你等着！",
];

questionImages.forEach(imgSrc => {
    new Image().src = imgSrc;
});

noButton.addEventListener('click', function() {
    noClicks++; // 点击次数自增1
    const currentIndex = (noClicks - 1) % questionImages.length;

    questionContainer.innerHTML = `
        <img src="${questionImages[currentIndex]}" alt="Question Image ${currentIndex + 1}" class="question-image">
        <h1 style="color: black;">${questions[currentIndex]}</h1>
    `;
    noButton.textContent = noButtonTexts[currentIndex];

    yesButton.style.transform = `scale(${1 + noClicks * 0.23})`;
    noButton.style.transform = `scale(${1 - noClicks * 0.1})`;
    yesButton.style.ce= `${299+ noClicks * 100}%`;
    if (noClicks >= questionImages.length) {
        noButton.style.display = 'none';
    }
});