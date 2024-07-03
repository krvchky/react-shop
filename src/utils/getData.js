// Функція отримання данних сервера
export default async function getData(url) {
    // Звертаємся до сервера
    const res = await fetch(url);

    // Перевіряємо чи відповідь успішна
    if (!res.ok) {
        return [];
    }

    // Декодуємо відповідь
    const data = await res.json();

    // повертаємо сформовані дані
    return data;
}

// Посилання до апі
export const apiUrl = {
    catalog: "https://6622700f27fcd16fa6c9d44f.mockapi.io/catalog",
    catalogByCategory: "https://6622700f27fcd16fa6c9d44f.mockapi.io/catalog?catid=",
    hotoffer: "https://6622700f27fcd16fa6c9d44f.mockapi.io/catalog?hotoffer=yes",
    category: "https://6622700f27fcd16fa6c9d44f.mockapi.io/category",
    search: "https://6622700f27fcd16fa6c9d44f.mockapi.io/catalog?search=",
};




 