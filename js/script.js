var slider = document.querySelector(".service_slider");
var slides = document.querySelectorAll(".service_slide");
var prevBtn = document.querySelector(".btn_prev");
var nextBtn = document.querySelector(".btn_next");

var currentIndex = 0; // Индекс текущего слайда 

// Функция для переключения слайдов
function showSlides(index) {
    for (var i = 0; i < slides.length; i++) {
        if (i >= index && i < index + 3) {
            slides[i].style.display = "flex";
        } else {
            slides[i].style.display = "none";
        }
    }
}

// Обработчик нажатия на кнопку "Предыдущий слайд"
prevBtn.addEventListener("click", function () {
    currentIndex--;

    // Если индекс становится отрицательным, переключаемся на последний слайд 
    if (currentIndex < 0) {
        currentIndex = slides.length - 3;
    }

    showSlides(currentIndex);
});

// Обработчик нажатия на кнопку "Следующий слайд"
nextBtn.addEventListener("click", function () {
    currentIndex++;

    // Если индекс превышает количество слайдов, переключаемся на первый слайд 
    if (currentIndex >= slides.length - 2) {
        currentIndex = 0;
    }

    showSlides(currentIndex);
});

// Показываем слайды при загрузке страницы
showSlides(currentIndex);

var sliderclients = document.querySelector(".clients__bottom");
var slidesclients = document.querySelectorAll(".client__slider");
var prevArrow = document.querySelector(".arrow__prev");
var nextArrow = document.querySelector(".arrow__next");

var indexCurent = 0; // Индекс текущего слайда 

// Функция для переключения слайдов
function slidesShow(index) {
    for (var u = 0; u < slidesclients.length; u++) {
        if (u >= index && u < index + 2) {
            slidesclients[u].style.display = "flex";
        } else {
            slidesclients[u].style.display = "none";
        }
    }
}

// Обработчик нажатия на кнопку "Предыдущий слайд"
prevArrow.addEventListener("click", function () {
    indexCurent--;

    // Если индекс становится отрицательным, переключаемся на последний слайд 
    if (indexCurent < 0) {
        indexCurent = slidesclients.length - 2;
    }

    slidesShow(indexCurent);
});

// Обработчик нажатия на кнопку "Следующий слайд"
nextArrow.addEventListener("click", function () {
    indexCurent++;

    // Если индекс превышает количество слайдов, переключаемся на первый слайд 
    if (indexCurent >= slidesclients.length - 1) {
        indexCurent = 0;
    }

    slidesShow(indexCurent);
});

// Показываем слайды при загрузке страницы
slidesShow(indexCurent);