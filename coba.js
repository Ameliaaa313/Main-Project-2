const clothing = ["shirt", "pants", "jacket"];
const color = ["black", "white"];
const size = ["S", "M", "L"];

const generateList = () => {
    const combinedList = [];

    clothing.forEach(clothing => {
        color.forEach(color => {
            size.forEach(size => {
                combinedList.push(clothing + " " + color + " " + size);
            });
        });
    });

    return combinedList;
};

console.log(generateList());