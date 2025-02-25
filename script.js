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
    "question-image-6.jpg","question-image-6.jpg","question-image-6.jpg","question-image-6.jpg","question-image-6.jpg","question-image-6.jpg",
    "question-image-6.jpg",
];

const questions = [
    "柾国儿是不是全天下最可爱？",
    "柾国儿难道不是全天下最可爱？",
    "除了柾国儿我想不到谁最可爱",
    "你坏.....",
    "不要逗柾国儿了快选当然啦",
    "不要逗柾国儿了快选当然啦","不要逗柾国儿了快选当然啦","不要逗柾国儿了快选当然啦","不要逗柾国儿了快选当然啦","不要逗柾国儿了快选当然啦","不要逗柾国儿了快选当然啦","不要逗柾国儿了快选当然啦","不要逗柾国儿了快选当然啦",
    "不要逗柾国儿了快选当然啦",
];

noButton.addEventListener('click', function() {
    noClicks++;
    if (noClicks <= questionImages.length) {
        const currentIndex = (noClicks - 1) % questionImages.length;
        questionContainer.innerHTML = `
            <img src="${questionImages[currentIndex]}" alt="Question Image ${currentIndex + 1}" class="question-image">
            <h1>${questions[currentIndex]}</h1>
        `;
        noButton.textContent = noButtonTexts[currentIndex];
        yesButton.style.transform = `scale(${1 + noClicks *0.2})`;
        noButton.style.transform = `scale(${1 - noClicks* 0.1})`;
    } else {
    }
});