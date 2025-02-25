const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const questionImage = document.getElementById('questionImage');

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

noButton.addEventListener('click', function() {
    noClicks++; // 点击次数自增1
    if (noClicks <= questionImages.length) {
        const currentIndex = (noClicks - 1) % questionImages.length; // 循环使用取模运算

        questionImage.src = questionImages[currentIndex]; // 更新图片源
        questionImage.alt = `Question Image ${currentIndex + 1}`; // 更新图片的 alt 文本
        noButton.textContent = noButtonTexts[currentIndex]; // 更新“不可以”按钮的文字

        yesButton.style.transform = `scale(${1 + noClicks * 0.2})`; // 放大“可以”按钮
        noButton.style.transform = `scale(${1 - noClicks * 0.1})`; // 缩小“不可以”按钮
    } else {
        noButton.style.display = 'none'; // 隐藏“不可以”按钮
    }
});