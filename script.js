```javascript
// ==========================================
// ⬇️ منطقة المنهج (Syllabus) ⬇️
// أحكام الميم الساكنة
// ==========================================

const syllabus = [
    {
        chapter: "أحكام الميم الساكنة",
        branches: [
            {
                title: "1. الإظهار الشفوي",
                lesson:
                    "💡 الإظهار الشفوي:\n\n" +
                    "هو إظهار الميم الساكنة إظهارًا واضحًا إذا جاء بعدها أي حرف من حروف الهجاء، " +
                    "ما عدا الباء والميم.\n\n" +
                    "🔹 مثال: أَمْرٌ، عَلَيْهِمْ غَيْرُ.\n\n" +
                    "📌 حروف الإظهار الشفوي: جميع حروف الهجاء ما عدا الباء والميم.\n\n" +
                    "وسُمّي شفويًا لأن الميم تخرج من الشفتين.",
                questions: [
                    {
                        q: "متى يكون حكم الميم الساكنة إظهارًا شفويًا؟",
                        options: [
                            "إذا جاء بعدها حرف الباء",
                            "إذا جاء بعدها حرف الميم",
                            "إذا جاء بعدها أي حرف ما عدا الباء والميم"
                        ],
                        a: "إذا جاء بعدها أي حرف ما عدا الباء والميم"
                    },
                    {
                        q: "كم عدد حروف الإظهار الشفوي؟",
                        options: [
                            "حرفان",
                            "ستة وعشرون حرفًا",
                            "حرف واحد"
                        ],
                        a: "ستة وعشرون حرفًا"
                    },
                    {
                        q: "لماذا سُمّي الإظهار الشفوي بهذا الاسم؟",
                        options: [
                            "لأن الميم تخرج من الشفتين",
                            "لأن الباء تخرج من الحلق",
                            "لأن الحكم متعلق بالمد"
                        ],
                        a: "لأن الميم تخرج من الشفتين"
                    },
                    {
                        q: "أي مثال مما يلي فيه إظهار شفوي؟",
                        options: [
                            "تَرْمِيهِمْ بِحِجَارَةٍ",
                            "لَهُمْ مَا",
                            "عَلَيْهِمْ غَيْرُ"
                        ],
                        a: "عَلَيْهِمْ غَيْرُ"
                    }
                ]
            },

            {
                title: "2. الإدغام الشفوي",
                lesson:
                    "💡 الإدغام الشفوي:\n\n" +
                    "هو إدغام الميم الساكنة في الميم المتحركة التي بعدها، " +
                    "فتصبح الميمان ميمًا واحدة مشددة مع الغنة.\n\n" +
                    "🔹 مثال: لَهُمْ مَا → تُدغم الميم الساكنة في الميم التي بعدها.\n\n" +
                    "📌 حرف الإدغام الشفوي هو: الميم فقط.\n\n" +
                    "ويُسمّى أيضًا إدغام المتماثلين الصغير.",
                questions: [
                    {
                        q: "ما حرف الإدغام الشفوي؟",
                        options: [
                            "الباء",
                            "الميم",
                            "النون"
                        ],
                        a: "الميم"
                    },
                    {
                        q: "ماذا يحدث للميم الساكنة عند مجيء ميم متحركة بعدها؟",
                        options: [
                            "تُظهر",
                            "تُخفى",
                            "تُدغم في الميم التي بعدها"
                        ],
                        a: "تُدغم في الميم التي بعدها"
                    },
                    {
                        q: "ما المثال الذي يحتوي على إدغام شفوي؟",
                        options: [
                            "لَهُمْ مَا",
                            "تَرْمِيهِمْ بِحِجَارَةٍ",
                            "عَلَيْهِمْ غَيْرُ"
                        ],
                        a: "لَهُمْ مَا"
                    },
                    {
                        q: "يصاحب الإدغام الشفوي ماذا؟",
                        options: [
                            "الغنة",
                            "القلقلة",
                            "المد"
                        ],
                        a: "الغنة"
                    }
                ]
            },

            {
                title: "3. الإخفاء الشفوي",
                lesson:
                    "💡 الإخفاء الشفوي:\n\n" +
                    "هو إخفاء الميم الساكنة عند حرف الباء، " +
                    "مع بقاء الغنة.\n\n" +
                    "🔹 مثال: تَرْمِيهِمْ بِحِجَارَةٍ.\n\n" +
                    "📌 حرف الإخفاء الشفوي هو: الباء فقط.\n\n" +
                    "وسُمّي شفويًا لأن الميم والباء يخرجان من الشفتين.",
                questions: [
                    {
                        q: "متى يكون حكم الميم الساكنة إخفاءً شفويًا؟",
                        options: [
                            "إذا جاء بعدها حرف الباء",
                            "إذا جاء بعدها حرف الميم",
                            "إذا جاء بعدها حرف النون"
                        ],
                        a: "إذا جاء بعدها حرف الباء"
                    },
                    {
                        q: "ما حرف الإخفاء الشفوي؟",
                        options: [
                            "الباء",
                            "الميم",
                            "الفاء"
                        ],
                        a: "الباء"
                    },
                    {
                        q: "أي مثال مما يلي فيه إخفاء شفوي؟",
                        options: [
                            "لَهُمْ مَا",
                            "تَرْمِيهِمْ بِحِجَارَةٍ",
                            "عَلَيْهِمْ غَيْرُ"
                        ],
                        a: "تَرْمِيهِمْ بِحِجَارَةٍ"
                    },
                    {
                        q: "هل يصاحب الإخفاء الشفوي غنة؟",
                        options: [
                            "نعم",
                            "لا",
                            "يكون فيه مد فقط"
                        ],
                        a: "نعم"
                    }
                ]
            },

            {
                title: "4. مراجعة أحكام الميم الساكنة",
                lesson:
                    "📚 مراجعة شاملة:\n\n" +
                    "للميم الساكنة ثلاثة أحكام فقط:\n\n" +
                    "1️⃣ الإظهار الشفوي:\n" +
                    "إذا جاء بعد الميم الساكنة أي حرف ما عدا الباء والميم.\n\n" +
                    "2️⃣ الإدغام الشفوي:\n" +
                    "إذا جاء بعد الميم الساكنة حرف الميم.\n\n" +
                    "3️⃣ الإخفاء الشفوي:\n" +
                    "إذا جاء بعد الميم الساكنة حرف الباء.\n\n" +
                    "🧠 طريقة سهلة للحفظ:\n" +
                    "ميم + ميم = إدغام.\n" +
                    "ميم + باء = إخفاء.\n" +
                    "ميم + أي حرف آخر = إظهار.",
                questions: [
                    {
                        q: "كم عدد أحكام الميم الساكنة؟",
                        options: [
                            "حكمان",
                            "ثلاثة أحكام",
                            "أربعة أحكام"
                        ],
                        a: "ثلاثة أحكام"
                    },
                    {
                        q: "ميم ساكنة بعدها ميم، ما الحكم؟",
                        options: [
                            "إظهار شفوي",
                            "إخفاء شفوي",
                            "إدغام شفوي"
                        ],
                        a: "إدغام شفوي"
                    },
                    {
                        q: "ميم ساكنة بعدها باء، ما الحكم؟",
                        options: [
                            "إخفاء شفوي",
                            "إدغام شفوي",
                            "إظهار شفوي"
                        ],
                        a: "إخفاء شفوي"
                    },
                    {
                        q: "ميم ساكنة بعدها حرف غير الميم والباء، ما الحكم؟",
                        options: [
                            "إظهار شفوي",
                            "إخفاء شفوي",
                            "إدغام شفوي"
                        ],
                        a: "إظهار شفوي"
                    },
                    {
                        q: "ما الأحكام الثلاثة للميم الساكنة؟",
                        options: [
                            "الإظهار والإدغام والإخفاء الشفوي",
                            "الإقلاب والإخفاء والإدغام",
                            "المد والقلقلة والإظهار"
                        ],
                        a: "الإظهار والإدغام والإخفاء الشفوي"
                    }
                ]
            }
        ]
    }
];

// ==========================================
// إعدادات السلالم والثعابين
// يمكنك تعديل أماكنها حسب رغبتك (من: إلى)
// ==========================================

const snakesAndLadders = {
    4: { to: 14, msg: "🪜 صعود السلم!" },
    9: { to: 31, msg: "🪜 قفزة رائعة!" },
    17: { to: 7, msg: "🐍 انزلاق الثعبان!" },
    20: { to: 38, msg: "🪜 صعود السلم!" },
    45: { to: 22, msg: "🐍 انزلاق الثعبان!" },
    54: { to: 88, msg: "🪜 قفزة عملاقة!" },
    62: { to: 19, msg: "🐍 انزلاق خطير!" },
    99: { to: 8, msg: "🐍 ثعبان النهاية!" }
};

// ==========================================
// متغيرات اللعبة الأساسية
// ==========================================

let cIdx = 0;
let bIdx = 0;
let qIdx = 0;
let needsLesson = true;
let currentPosition = 1;
let isMoving = false;

// ==========================================
// تشغيل اللعبة عند تحميل الصفحة
// ==========================================

window.onload = () => {
    createBoard();
    populateIndex();
    positionPlayerAtStart();
};

// ==========================================
// إنشاء لوحة اللعبة
// ==========================================

function createBoard() {
    const board = document.getElementById("board");

    if (!board) return;

    board.innerHTML = "";

    for (let row = 9; row >= 0; row--) {
        for (let col = 0; col < 10; col++) {

            let num =
                (row % 2 === 0)
                    ? (row * 10 + 10 - col)
                    : (row * 10 + col + 1);

            const cell = document.createElement("div");

            cell.className = "cell";
            cell.id = `cell-${num}`;
            cell.innerText = num;

            // إضافة أيقونات السلالم والثعابين
            if (snakesAndLadders[num]) {
                cell.innerText +=
                    snakesAndLadders[num].to > num
                        ? " 🪜"
                        : " 🐍";
            }

            board.appendChild(cell);
        }
    }
}

// ==========================================
// تحريك اللاعب إلى مربع معين
// ==========================================

function movePlayerTo(position, isJumping = false) {

    const player = document.getElementById("player");
    const targetCell = document.getElementById(`cell-${position}`);
    const board = document.getElementById("board");

    if (!player || !targetCell || !board) return;

    const cellRect = targetCell.getBoundingClientRect();
    const boardRect = board.getBoundingClientRect();

    const top =
        cellRect.top -
        boardRect.top +
        (cellRect.height - player.offsetHeight) / 2;

    const left =
        cellRect.left -
        boardRect.left +
        (cellRect.width - player.offsetWidth) / 2;

    player.style.top = `${top}px`;
    player.style.left = `${left}px`;

    if (isJumping) {

        player.classList.add("jumping");

        setTimeout(() => {
            player.classList.remove("jumping");
        }, 150);
    }
}

// ==========================================
// وضع اللاعب في البداية
// ==========================================

function positionPlayerAtStart() {

    setTimeout(() => {
        movePlayerTo(1);
    }, 100);
}

// ==========================================
// تحديث مكان اللاعب عند تغيير حجم الشاشة
// ==========================================

window.onresize = () => {
    movePlayerTo(currentPosition);
};

// ==========================================
// إنشاء فهرس الدروس
// ==========================================

function populateIndex() {

    const select = document.getElementById("lesson-index");

    if (!select) return;

    select.innerHTML = "";

    syllabus.forEach((chap, cIndex) => {

        const optGroup = document.createElement("optgroup");

        optGroup.label = chap.chapter;

        chap.branches.forEach((branch, bIndex) => {

            const opt = document.createElement("option");

            opt.value = `${cIndex}-${bIndex}`;
            opt.innerText = branch.title;

            optGroup.appendChild(opt);
        });

        select.appendChild(optGroup);
    });
}

// ==========================================
// الانتقال إلى درس معين
// ==========================================

function jumpToLesson() {

    const select = document.getElementById("lesson-index");

    if (!select || !select.value) return;

    const [c, b] = select.value.split("-");

    cIdx = parseInt(c);
    bIdx = parseInt(b);
    qIdx = 0;

    needsLesson = true;

    showFeedback("تم التبديل إلى الدرس بنجاح 🔄");
}

// ==========================================
// فتح السؤال أو الدرس
// ==========================================

function drawQuestion() {

    if (isMoving) return;

    if (cIdx >= syllabus.length) {

        alert("🎉 لقد أتممت جميع أسئلة أحكام الميم الساكنة!");

        return;
    }

    const select = document.getElementById("lesson-index");

    if (select) {
        select.value = `${cIdx}-${bIdx}`;
    }

    if (needsLesson) {
        showLessonUI(false);
    } else {
        showQuestion();
    }
}

// ==========================================
// عرض الدرس
// ==========================================

function showLessonUI(isRetry) {

    const branchData = syllabus[cIdx].branches[bIdx];

    if (!branchData) return;

    const title = document.getElementById("lesson-title");
    const text = document.getElementById("lesson-text");
    const lessonSection = document.getElementById("lesson-section");
    const questionSection = document.getElementById("question-section");
    const modal = document.getElementById("quiz-modal");

    if (!title || !text || !lessonSection || !questionSection || !modal) {
        return;
    }

    title.innerText = branchData.title;

    let textToShow = branchData.lesson;

    if (isRetry) {

        title.innerText = "❌ إجابة خاطئة!";

        textToShow =
            "راجع الشرح جيدًا قبل المحاولة:\n\n" +
            textToShow;
    }

    text.innerText = textToShow;

    lessonSection.classList.remove("hidden");
    questionSection.classList.add("hidden");
    modal.classList.remove("hidden");
}

// ==========================================
// عرض السؤال
// ==========================================

function showQuestion() {

    const chapterData = syllabus[cIdx];
    const branchData = chapterData.branches[bIdx];

    if (!branchData || !branchData.questions.length) {
        return;
    }

    const questionData = branchData.questions[qIdx];

    if (!questionData) return;

    const label = document.getElementById("chapter-branch-label");
    const counter = document.getElementById("question-counter");
    const questionText = document.getElementById("question-text");
    const optionsDiv = document.getElementById("options");
    const lessonSection = document.getElementById("lesson-section");
    const questionSection = document.getElementById("question-section");
    const modal = document.getElementById("quiz-modal");

    if (!label || !counter || !questionText || !optionsDiv || !modal) {
        return;
    }

    label.innerText =
        `${chapterData.chapter} - ${branchData.title}`;

    counter.innerText =
        `السؤال ${qIdx + 1} من ${branchData.questions.length}`;

    questionText.innerText = questionData.q;

    optionsDiv.innerHTML = "";

    questionData.options.forEach(option => {

        const button = document.createElement("button");

        button.className = "opt-btn";
        button.innerText = option;

        button.onclick = () => {
            checkAnswer(option, questionData.a);
        };

        optionsDiv.appendChild(button);
    });

    if (lessonSection) {
        lessonSection.classList.add("hidden");
    }

    if (questionSection) {
        questionSection.classList.remove("hidden");
    }

    modal.classList.remove("hidden");
}

// ==========================================
// التحقق من الإجابة
// ==========================================

function checkAnswer(selected, correct) {

    if (selected === correct) {

        const modal = document.getElementById("quiz-modal");
        const askBtn = document.getElementById("ask-btn");
        const diceBtn = document.getElementById("dice-btn");

        if (modal) {
            modal.classList.add("hidden");
        }

        showFeedback("✅ إجابة صحيحة!");

        if (askBtn) {
            askBtn.disabled = true;
        }

        if (diceBtn) {
            diceBtn.disabled = false;
        }

        qIdx++;
        needsLesson = false;

        const currentBranch =
            syllabus[cIdx].branches[bIdx];

        if (qIdx >= currentBranch.questions.length) {

            qIdx = 0;
            bIdx++;
            needsLesson = true;

            if (bIdx >= syllabus[cIdx].branches.length) {

                bIdx = 0;
                cIdx++;

                if (cIdx >= syllabus.length) {

                    showFeedback(
                        "🎉 أحسنت! أتممت جميع دروس أحكام الميم الساكنة!"
                    );

                    if (askBtn) {
                        askBtn.disabled = true;
                    }

                    if (diceBtn) {
                        diceBtn.disabled = false;
                    }

                    return;
                }
            }
        }

    } else {

        needsLesson = true;

        showLessonUI(true);
    }
}

// ==========================================
// رسائل التغذية الراجعة
// ==========================================

function showFeedback(text) {

    const feedback =
        document.getElementById("feedback-message");

    if (!feedback) return;

    feedback.innerText = text;

    feedback.classList.remove("hidden");

    feedback.style.animation = "none";

    // إعادة تشغيل الحركة
    void feedback.offsetHeight;

    feedback.style.animation =
        "popIn 1.5s ease-out forwards";
}

// ==========================================
// رمي النرد
// ==========================================

function rollDice() {

    if (isMoving) return;

    const diceDisplay =
        document.getElementById("dice-display");

    const diceBtn =
        document.getElementById("dice-btn");

    if (!diceDisplay || !diceBtn) return;

    diceBtn.disabled = true;

    isMoving = true;

    diceDisplay.classList.add("rolling");

    setTimeout(() => {

        diceDisplay.classList.remove("rolling");

        const diceValue =
            Math.floor(Math.random() * 6) + 1;

        const diceIcons = [
            "⚀",
            "⚁",
            "⚂",
            "⚃",
            "⚄",
            "⚅"
        ];

        diceDisplay.innerText =
            diceIcons[diceValue - 1];

        let targetPosition =
            currentPosition + diceValue;

        // لا نتجاوز المربع 100
        if (targetPosition > 100) {
            targetPosition = 100;
        }

        movePlayerStepByStep(
            currentPosition,
            targetPosition,
            () => {

                currentPosition = targetPosition;

                // انتظار بسيط قبل فحص السلم أو الثعبان
                setTimeout(() => {

                    if (snakesAndLadders[currentPosition]) {

                        const jumpData =
                            snakesAndLadders[currentPosition];

                        showFeedback(jumpData.msg);

                        movePlayerStepByStep(
                            currentPosition,
                            jumpData.to,
                            () => {

                                currentPosition =
                                    jumpData.to;

                                finishMove();
                            }
                        );

                    } else {

                        finishMove();
                    }

                }, 400);
            }
        );

    }, 1000);
}

// ==========================================
// إنهاء حركة اللاعب
// ==========================================

function finishMove() {

    isMoving = false;

    if (currentPosition === 100) {

        showFeedback(
            "🎉 مبروووك! وصلت إلى النهاية!"
        );

        const askBtn =
            document.getElementById("ask-btn");

        if (askBtn) {
            askBtn.disabled = true;
        }

    } else {

        const askBtn =
            document.getElementById("ask-btn");

        if (askBtn) {
            askBtn.disabled = false;
        }
    }
}

// ==========================================
// تحريك اللاعب خطوة بخطوة
// ==========================================

function movePlayerStepByStep(
    start,
    end,
    onComplete
) {

    let current = start;

    const step =
        end > start ? 1 : -1;

    // إذا كان المكان نفسه
    if (start === end) {

        if (onComplete) {
            onComplete();
        }

        return;
    }

    const timer = setInterval(() => {

        if (current !== end) {

            current += step;

            movePlayerTo(
                current,
                true
            );

        } else {

            clearInterval(timer);

            if (onComplete) {
                onComplete();
            }
        }

    }, 300);
}
```
