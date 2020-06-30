const categoriesUl = Array.from(
    document.querySelectorAll('ul#categories > li.item')
);
    // console.log(`В списке ${categoriesFirstLi.length} категорий`);
   
const categoriesList = Array.from(
    document.querySelectorAll('ul#categories li.item ul')
);

const categoriesArr = [];

    categoriesList.forEach (element => {
        categoriesArr.push(`Категория: ${document.querySelector('h2').textContent}
        / Количество элементов: ${element.children.length}`)
    });

    console.log (categoriesArr)



