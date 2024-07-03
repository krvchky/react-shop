import CategoryItem from "./CategoryItem";

export default function CategoryList({category, catid}) {

  const categoryEmpty = {
    title: 'Переглянути всі',
    id: 0
  };

  return (
    <div className="dropdown-content">
        {
          <CategoryItem cat={categoryEmpty} />
        }
        {
          (category.length === 0)
            ? <p>категорій не знайдено</p>
            : category.map((cat, index) => <CategoryItem key={index} cat={cat} catid={catid}/>)
        }
    </div>
  )
}
