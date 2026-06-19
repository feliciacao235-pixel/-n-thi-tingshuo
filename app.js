// State management
let currentState = {
    unit: null,
    mode: null, // 'flashcard', 'practice', 'quiz'
    currentIndex: 0,
    score: 0,
    answers: [],
    memorized: []
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    updateProgressSummary();
    loadProgress();
});

// Navigation functions
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function showHome() {
    showScreen('homeScreen');
    updateProgressSummary();
}

function selectUnit(unitNumber) {
    currentState.unit = unitNumber;
    document.getElementById('unitTitle').textContent = `Unit ${unitNumber}`;
    showScreen('unitMenuScreen');
}

function backToUnitMenu() {
    showScreen('unitMenuScreen');
}

// Flashcard functions
function startFlashcards() {
    currentState.mode = 'flashcard';
    currentState.currentIndex = 0;
    currentState.memorized = [];
    
    const idioms = IDIOMS_DATA[currentState.unit];
    if (!idioms || idioms.length === 0) {
        alert('Không có dữ liệu cho unit này!');
        return;
    }
    
    showScreen('flashcardScreen');
    document.getElementById('flashcardComplete').style.display = 'none';
    document.getElementById('flashcard').style.display = 'block';
    document.querySelector('.flashcard-controls').style.display = 'flex';
    
    loadFlashcard();
}

function loadFlashcard() {
    const idioms = IDIOMS_DATA[currentState.unit];
    const current = idioms[currentState.currentIndex];
    
    // Update progress
    document.getElementById('flashcardTitle').textContent = `Unit ${currentState.unit} - Thành ngữ`;
    document.getElementById('flashcardProgress').textContent = 
        `${currentState.currentIndex + 1} / ${idioms.length}`;
    
    // Reset card flip
    document.getElementById('flashcardInner').classList.remove('flipped');
    
    // Front side
    document.getElementById('idiomChinese').textContent = current.chinese;
    document.getElementById('idiomPinyin').textContent = current.pinyin;
    
    // Back side
    document.getElementById('idiomChineseBack').textContent = current.chinese;
    document.getElementById('idiomPinyinBack').textContent = current.pinyin;
    document.getElementById('idiomMeaning').textContent = current.meaning;
    document.getElementById('idiomExample').textContent = current.example;
}

function flipCard() {
    document.getElementById('flashcardInner').classList.toggle('flipped');
}

function nextCard() {
    const idioms = IDIOMS_DATA[currentState.unit];
    currentState.currentIndex++;
    
    if (currentState.currentIndex >= idioms.length) {
        showFlashcardComplete();
    } else {
        loadFlashcard();
    }
}

function markMemorized() {
    const idioms = IDIOMS_DATA[currentState.unit];
    const current = idioms[currentState.currentIndex];
    currentState.memorized.push(current);
    nextCard();
}

function showFlashcardComplete() {
    document.getElementById('flashcard').style.display = 'none';
    document.querySelector('.flashcard-controls').style.display = 'none';
    
    const completeDiv = document.getElementById('flashcardComplete');
    completeDiv.style.display = 'block';
    
    const idioms = IDIOMS_DATA[currentState.unit];
    let listHTML = '';
    idioms.forEach(idiom => {
        listHTML += `<p>✓ ${idiom.chinese} - ${idiom.meaning}</p>`;
    });
    document.getElementById('learnedList').innerHTML = listHTML;
}

function restartFlashcards() {
    startFlashcards();
}

// Exercise functions
function startPractice() {
    currentState.mode = 'practice';
    startExercise();
}

function startQuiz() {
    currentState.mode = 'quiz';
    startExercise();
}

function startExercise() {
    currentState.currentIndex = 0;
    currentState.score = 0;
    currentState.answers = [];
    
    const exercises = EXERCISES_DATA[currentState.unit];
    if (!exercises || exercises.length === 0) {
        alert('Không có bài tập cho unit này!');
        return;
    }
    
    showScreen('exerciseScreen');
    document.getElementById('quizComplete').style.display = 'none';
    document.getElementById('questionCard').style.display = 'block';
    document.querySelector('.exercise-controls').style.display = 'flex';
    
    const title = currentState.mode === 'quiz' ? 'Kiểm tra' : 'Luyện tập';
    document.getElementById('exerciseTitle').textContent = `Unit ${currentState.unit} - ${title}`;
    
    loadQuestion();
}

function loadQuestion() {
    const exercises = EXERCISES_DATA[currentState.unit];
    const current = exercises[currentState.currentIndex];
    
    // Update progress
    document.getElementById('exerciseProgress').textContent = 
        `Câu ${currentState.currentIndex + 1} / ${exercises.length}`;
    
    // Hide feedback and next button
    document.getElementById('feedback').classList.remove('show', 'correct', 'incorrect');
    document.getElementById('checkBtn').style.display = 'inline-block';
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('checkBtn').disabled = true;
    
    if (current.type === 'idiom') {
        loadIdiomQuestion(current);
    } else if (current.type === 'structure') {
        loadStructureQuestion(current);
    }
}

function loadIdiomQuestion(question) {
    document.getElementById('questionType').textContent = '📚 Chọn thành ngữ phù hợp';
    document.getElementById('questionContent').innerHTML = question.question;
    
    let optionsHTML = '';
    question.options.forEach((option, index) => {
        optionsHTML += `
            <button class="option-btn" onclick="selectOption(${index})">
                ${String.fromCharCode(65 + index)}. ${option}
            </button>
        `;
    });
    document.getElementById('questionOptions').innerHTML = optionsHTML;
}

function loadStructureQuestion(question) {
    document.getElementById('questionType').textContent = `✍️ ${question.structure}`;
    
    // Create input fields for blanks
    let content = question.question;
    const blankCount = (content.match(/___/g) || []).length;
    
    for (let i = 0; i < blankCount; i++) {
        content = content.replace('___', `<input type="text" id="blank${i}" class="blank-input" oninput="checkBlanksFilled()">`);
    }
    
    document.getElementById('questionContent').innerHTML = content + 
        `<div class="hint" style="margin-top: 15px; color: #666; font-size: 0.9em;">💡 ${question.hints}</div>`;
    document.getElementById('questionOptions').innerHTML = '';
}

function selectOption(index) {
    // Remove previous selection
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Select new option
    document.querySelectorAll('.option-btn')[index].classList.add('selected');
    currentState.selectedOption = index;
    document.getElementById('checkBtn').disabled = false;
}

function checkBlanksFilled() {
    const exercises = EXERCISES_DATA[currentState.unit];
    const current = exercises[currentState.currentIndex];
    const blankCount = current.blanks.length;
    
    let allFilled = true;
    for (let i = 0; i < blankCount; i++) {
        const input = document.getElementById(`blank${i}`);
        if (!input || input.value.trim() === '') {
            allFilled = false;
            break;
        }
    }
    
    document.getElementById('checkBtn').disabled = !allFilled;
}

function checkAnswer() {
    const exercises = EXERCISES_DATA[currentState.unit];
    const current = exercises[currentState.currentIndex];
    const feedback = document.getElementById('feedback');
    
    let isCorrect = false;
    
    if (current.type === 'idiom') {
        isCorrect = checkIdiomAnswer(current);
    } else if (current.type === 'structure') {
        isCorrect = checkStructureAnswer(current);
    }
    
    // Update score
    if (isCorrect) {
        currentState.score++;
        feedback.className = 'feedback show correct';
        feedback.innerHTML = `<h4>✓ Chính xác!</h4><p>${current.explanation || ''}</p>`;
    } else {
        feedback.className = 'feedback show incorrect';
        let correctAnswer = '';
        if (current.type === 'idiom') {
            correctAnswer = current.options[current.correct];
        }
        feedback.innerHTML = `<h4>✗ Chưa đúng!</h4><p>${current.explanation || ''}</p>`;
    }
    
    // Save answer
    currentState.answers.push({ question: currentState.currentIndex, correct: isCorrect });
    
    // Show next button
    document.getElementById('checkBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'inline-block';
    
    // Save progress
    saveProgress();
}

function checkIdiomAnswer(question) {
    const selected = currentState.selectedOption;
    const correct = question.correct;
    
    // Highlight correct and incorrect
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === correct) {
            btn.classList.add('correct');
        } else if (index === selected && index !== correct) {
            btn.classList.add('incorrect');
        }
    });
    
    return selected === correct;
}

function checkStructureAnswer(question) {
    const blanks = question.blanks;
    let allCorrect = true;
    
    blanks.forEach((correctAnswer, index) => {
        const input = document.getElementById(`blank${index}`);
        if (input) {
            const userAnswer = input.value.trim();
            // Allow empty answers for blanks that should be empty
            if (correctAnswer === '') {
                // Any non-empty answer is acceptable for flexible blanks
                if (userAnswer !== '') {
                    input.style.borderColor = '#4CAF50';
                }
            } else if (userAnswer === correctAnswer) {
                input.style.borderColor = '#4CAF50';
            } else {
                input.style.borderColor = '#f44336';
                allCorrect = false;
            }
            input.disabled = true;
        }
    });
    
    return allCorrect;
}

function nextQuestion() {
    const exercises = EXERCISES_DATA[currentState.unit];
    currentState.currentIndex++;
    
    if (currentState.currentIndex >= exercises.length) {
        showExerciseComplete();
    } else {
        loadQuestion();
    }
}

function showExerciseComplete() {
    document.getElementById('questionCard').style.display = 'none';
    document.querySelector('.exercise-controls').style.display = 'none';
    
    const completeDiv = document.getElementById('quizComplete');
    completeDiv.style.display = 'block';
    
    const exercises = EXERCISES_DATA[currentState.unit];
    const totalQuestions = exercises.length;
    const percentage = Math.round((currentState.score / totalQuestions) * 100);
    
    document.getElementById('quizResults').innerHTML = `
        <div class="score">${percentage}%</div>
        <div class="details">
            <div>Số câu đúng: ${currentState.score} / ${totalQuestions}</div>
            <div>Số câu sai: ${totalQuestions - currentState.score}</div>
        </div>
    `;
}

function restartQuiz() {
    startExercise();
}

// Progress tracking
function saveProgress() {
    const key = `unit${currentState.unit}_progress`;
    const data = {
        score: currentState.score,
        total: EXERCISES_DATA[currentState.unit].length,
        lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(key, JSON.stringify(data));
    updateProgressSummary();
}

function loadProgress() {
    Object.keys(IDIOMS_DATA).forEach(unit => {
        const key = `unit${unit}_progress`;
        const data = localStorage.getItem(key);
        if (data) {
            const progress = JSON.parse(data);
            const percentage = Math.round((progress.score / progress.total) * 100);
            const progressDiv = document.getElementById(`progress-unit${unit}`);
            if (progressDiv) {
                progressDiv.textContent = `Hoàn thành: ${percentage}% (${progress.score}/${progress.total})`;
            }
        }
    });
}

function updateProgressSummary() {
    let totalCompleted = 0;
    let totalUnits = Object.keys(IDIOMS_DATA).length;
    
    Object.keys(IDIOMS_DATA).forEach(unit => {
        const key = `unit${unit}_progress`;
        const data = localStorage.getItem(key);
        if (data) {
            const progress = JSON.parse(data);
            if (progress.score === progress.total) {
                totalCompleted++;
            }
        }
    });
    
    document.getElementById('progressSummary').textContent = 
        `Đã hoàn thành ${totalCompleted}/${totalUnits} units`;
}
