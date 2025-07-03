import { useBoundStore } from "../store";
import { PageBuilder } from "../components/PageBuilder";
import { useEffect } from "react";

export const PageHome = () => {
  const loadPageContent = useBoundStore((store) => store.loadPageContent);
  const loadingPage = useBoundStore((store) => store.loadingPage);
  const errorPage = useBoundStore((store) => store.errorPage);
  const pageContent = useBoundStore((store) => store.pageContent);

  useEffect(() => {
    loadPageContent("page-home");
    // console.log("store.pageContent: ", pageContent);
  }, [loadPageContent]);

  if (loadingPage) return <p>LOADING...</p>;

  if (errorPage) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Error loading page: {errorPage}</p>
      </div>
    );
  }

  const pageData = pageContent?.["page-home"]?.section_block;

  return <PageBuilder pageData={pageData} />;
};

/* 
У вашому коді `useEffect` **обов'язковий** для правильної роботи компонента. Ось чому:

## Чому useEffect потрібен:

1. **Ініціалізація даних**: Він відповідає за завантаження контенту сторінки при першому рендері
2. **Уникнення зайвих запитів**: Перевіряє `isPageLoaded('home')` перед викликом `fetchPageContent`
3. **Правильний життєвий цикл**: Забезпечує виконання side effect'у в потрібний момент

## Що станеться без useEffect:

```javascript
// ❌ Неправильно - без useEffect
const PageHome = () => {
  // ... інший код
  
  // Це викличе помилку або не спрацює
  if (!isPageLoaded('home')) {
    fetchPageContent('home'); // Side effect під час рендеру!
  }
  
  // ... решта коду
};
```

Без `useEffect` ви отримаєте:
- Помилки React про side effects під час рендеру
- Можливі нескінченні цикли ре-рендеру
- Непередбачувану поведінку

## Альтернативи (якщо потрібно):

1. **Завантаження в батьківському компоненті**:
```javascript
// Батьківський компонент вже завантажив дані
const ParentComponent = () => {
  useEffect(() => {
    fetchPageContent('home');
  }, []);
  
  return <PageHome />;
};
```

2. **Використання React Query або SWR**:
```javascript
const PageHome = () => {
  const { data, isLoading, error } = useQuery(
    ['page', 'home'],
    () => fetchPageContent('home')
  );
  // ...
};
```

*/
